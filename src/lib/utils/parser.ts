import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
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
	const posts = readdirSync(dirname).map((filename) => parseFile(join(dirname, filename), hydrate));

	return posts.sort(
		(a, b) => new Date(b.date.published).getTime() - new Date(a.date.published).getTime()
	);
}
