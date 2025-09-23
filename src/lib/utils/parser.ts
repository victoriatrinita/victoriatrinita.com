import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import marker from './marker';
import YAML from 'yaml';

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

			// extract YAML frontmatter
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

	// newest first
	return haikus.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
