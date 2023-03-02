import MarkdownIt from 'markdown-it';

const separators = /[\s.,!:;&"'\][#$%()*+<=>?@\\\/^_{|}~-]/g;

const marker = MarkdownIt({
	html: true,
	typographer: true
});

/** Override renderer rules */
marker.renderer.rules.heading_open = (tokens: any, idx: number) => {
	const [token, text] = [tokens[idx], tokens[idx + 1].content];
	if (parseInt(token.tag.slice(-1)) > 3) return `<${token.tag}>`;

	let tagId = text
		.toLowerCase()
		.replace(separators, '-')
		.split('-')
		.filter((i: any) => !!i)
		.join('-');
	return `<${token.tag} id="${tagId}">`;
};

export default marker;
