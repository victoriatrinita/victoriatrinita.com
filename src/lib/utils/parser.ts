import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import YAML from 'yaml';
import type { Haiku } from '$lib/types';
import marker from './marker';

export function splitAt(index: number, text: string): [string, string] {
	return [text.slice(0, index), text.slice(index + 1)];
}

const extractMeta = (metadata: string) => {
	if (!metadata) return {};
	const lines = metadata.split(/\r?\n/);
	return lines.reduce((acc: { [key: string]: any }, curr: string) => {
		if (!curr.includes(': ')) return acc;
		const [key, val]: [string, string] = splitAt(curr.indexOf(': '), curr);

		if (key.includes(':')) {
			const [attr, category] = splitAt(key.indexOf(':'), key);
			if (!acc[attr]) acc[attr] = {};
			acc[attr][category] = val.trim();
		} else if (val.includes(',')) {
			const items = val.split(',').map((v) => v.trim());
			acc[key] = items.filter(Boolean);
		} else acc[key] = val.trim();

		return acc;
	}, {});
};

const extractMetaVerses = (metadata: string) => {
	if (!metadata) return {};
	return YAML.parse(metadata);
};

export function parseFile(path: string, hydrate: Function) {
	const content = readFileSync(path, 'utf-8');
	const [rawData, metadata] = /---\n([\s\S]+?)\n---/.exec(content) || ['', ''];

	const frontMatter = extractMeta(metadata);
	const [filename] = path.split(/[\/]/).slice(-1);
	const article = metadata ? content.slice(rawData.length + 1) : content;
	const result = hydrate(frontMatter, article, filename);

	if (!result) return;

	if (result.date && result.date.published && !result.date.updated) {
		result.date.updated = result.date.published;
	}

	if (result.content) {
		result.content = marker.render(result.content);
	}

	return result;
}

const extractMetaHaikus = (metadata: string) => {
	if (!metadata) return {};

	const meta = YAML.parse(metadata);

	return {
		en: meta.en
			? meta.en
					.trim()
					.split('\n')
					.map((l: string) => marker.render(l))
			: [],
		ja: meta.ja
			? meta.ja
					.trim()
					.split('\n')
					.map((l: string) => marker.render(l))
			: []
	};
};

export function parseFileHaikus(path: string, hydrate: Function) {
	const content = readFileSync(path, 'utf-8');
	const [, metadata] = /---\n([\s\S]+?)\n---/.exec(content) || ['', ''];

	const frontMatter = extractMetaHaikus(metadata);
	const [filename] = path.split(/[\/]/).slice(-1);
	const result = hydrate(frontMatter, filename);

	if (!result) return;

	return result;
}

export function parseFileVerses(path: string, hydrate: Function) {
	const content = readFileSync(path, 'utf-8');
	const [, metadata] = /---\n([\s\S]+?)\n---/.exec(content) || ['', ''];

	const frontMatter = extractMetaVerses(metadata);
	const [filename] = path.split(/[\/]/).slice(-1);

	const result = hydrate(frontMatter, filename);

	if (!result) return;

	return result;
}

// export function parseDirByLanguage(dirname: string, hydrate: Function) {
// 	const entries = readdirSync(dirname);
// 	const posts: Record<string, Record<string, any>> = {};

// 	entries.forEach((entry) => {
// 		const fullPath = join(dirname, entry);
// 		if (statSync(fullPath).isDirectory()) {
// 			// this is a post folder, e.g., bisa-dinikmati-allah
// 			const langFiles = readdirSync(fullPath).filter((f) => f.endsWith('.md'));
// 			const postByLang: Record<string, any> = {};

// 			langFiles.forEach((file) => {
// 				const lang = file.replace(/\.md$/, ''); // 'id', 'en', 'ja', etc.
// 				const filePath = join(fullPath, file);
// 				const content = readFileSync(filePath, 'utf-8');

// 				const [, metadata] = /---\n([\s\S]+?)\n---/.exec(content) || ['', ''];
// 				const frontMatter = YAML.parse(metadata || '');

// 				const article = content.replace(/---\n([\s\S]+?)\n---/, '').trim();
// 				const hydrated = hydrate(frontMatter, article, file);

// 				if (hydrated) {
// 					if (hydrated.content) hydrated.content = marker.render(hydrated.content);
// 					postByLang[lang] = hydrated;
// 				}
// 			});

// 			posts[entry] = postByLang;
// 		}
// 	});

// 	return posts;
// }

export function parseDirByLanguage(dirname: string, hydrate: Function) {
	const folders = readdirSync(dirname).filter((entry) =>
		statSync(join(dirname, entry)).isDirectory()
	);

	const posts = folders.map((folderName) => {
		const fullPath = join(dirname, folderName);
		const langFiles = readdirSync(fullPath).filter((f) => f.endsWith('.md'));

		const translations: Record<string, any> = {};
		let globalMetadata: any = {};

		langFiles.forEach((file) => {
			const lang = file.replace(/\.md$/, '');
			const filePath = join(fullPath, file);
			const content = readFileSync(filePath, 'utf-8');

			const match = content.match(/---\n([\s\S]+?)\n---/);
			const frontMatter = match ? YAML.parse(match[1]) : {};
			const article = content.replace(/---\n([\s\S]+?)\n---/, '').trim();

			// Run your hydrate function
			const hydrated = hydrate(frontMatter, article, file);

			if (hydrated) {
				// If this specific file has tags or dates, promote them to globalMetadata
				if (hydrated.tags || hydrated['date:published']) {
					globalMetadata = {
						tags: hydrated.tags || [],
						date_published: hydrated['date:published'],
						date_updated: hydrated['date:updated']
					};
				}

				// Render content if present
				if (hydrated.content) {
					// Assuming 'marker' is available in your scope
					hydrated.content = marker.render(hydrated.content);
				}

				translations[lang] = hydrated;
			}
		});

		// Return a single object per folder (post)
		return {
			id: folderName, // Use folder name as the unique ID
			...globalMetadata,
			locales: Object.keys(translations),
			translations
		};
	});

	// Sort posts by date before returning
	return posts.sort(
		(a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime()
	);
}

export function parseDir(dirname: string, hydrate: Function) {
	const entries = readdirSync(dirname);
	const posts = entries
		.map((filename) => join(dirname, filename))
		.filter((filepath) => statSync(filepath).isFile())
		.map((filepath) => parseFile(filepath, hydrate))
		.filter(Boolean);

	return posts.sort(
		(a, b) => new Date(b.date.published).getTime() - new Date(a.date.published).getTime()
	);
}

export function parseDirHaikus(dirname: string, hydrate: Function) {
	const entries = readdirSync(dirname);
	console.log('entries', entries);

	const haikus = entries
		.map((filename) => join(dirname, filename))
		.filter((filepath) => statSync(filepath).isFile())
		.map((filepath) => parseFileHaikus(filepath, hydrate))
		.filter(Boolean);

	return haikus;
}

export function parseDirVerses(dirname: string, hydrate: Function) {
	const entries = readdirSync(dirname);
	const verses = entries
		.map((filename) => join(dirname, filename))
		.filter((filepath) => statSync(filepath).isFile())
		.map((filepath) => parseFileVerses(filepath, hydrate))
		.filter(Boolean);

	return verses;
}

export function parseCooklogDir(dirname: string, hydrate: Function) {
	const entries = readdirSync(dirname);
	const cooklogs = entries
		.map((filename) => join(dirname, filename))
		.filter((filepath) => statSync(filepath).isFile())
		.map((filepath) => parseFile(filepath, hydrate))
		.filter(Boolean);

	return cooklogs.sort(
		(a, b) => new Date(b.date_cooked).getTime() - new Date(a.date_cooked).getTime()
	);
}

function getLatestDir(baseDir: string): string {
	const dirs = readdirSync(baseDir).filter((d) => statSync(join(baseDir, d)).isDirectory());
	return dirs.sort((a, b) => b.localeCompare(a))[0]; // descending
}

export function parseLatestHaikuDir(baseDir: string): Haiku[] {
	const latestYear = getLatestDir(baseDir);
	const yearDir = join(baseDir, latestYear);

	const latestMonth = getLatestDir(yearDir);
	const monthDir = join(yearDir, latestMonth);

	const entries = readdirSync(monthDir);

	const haikus: Haiku[] = entries
		.map((filename) => join(monthDir, filename))
		.filter((filepath) => statSync(filepath).isFile())
		.map((filepath) => {
			const content = readFileSync(filepath, 'utf-8');

			const [, metadata] = /---\n([\s\S]+?)\n---/.exec(content) || ['', ''];
			if (!metadata) return null;

			const meta = YAML.parse(metadata);

			return {
				date: meta.date || filepath.split('/').pop()!.replace(/\.md$/, ''),
				en: meta.en ? meta.en.trim().split('\n') : [],
				ja: meta.ja ? meta.ja.trim().split('\n') : []
			};
		})
		.filter((h): h is Haiku => h !== null);

	return haikus.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
