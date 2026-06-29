export interface Post {
	slug?: string;
	title: string;
	tags: string[];
	language: string;
	description?: string;
	date: {
		published: string;
		updated?: string;
	};
	content?: string;
}

export interface Verse {
	slug?: string;
	id: {
		verse: string;
		content: string;
		translation: string;
		link: string;
		reflection: string;
	};
	en: {
		verse: string;
		content: string;
		translation: string;
		link: string;
		reflection: string;
	};
	ja: {
		verse: string;
		content: string;
		translation: string;
		link: string;
		reflection: string;
	};
}

export interface Cooklog {
	id: string;
	title: string;
	date_cooked: string;
	image?: string;
	tags?: string[];
	cook_logs?: any[];
}

export interface Haiku {
	slug: string;
	date: string;
	en: string[];
	ja: string[];
}

export interface Book {
	slug?: string;
	title: string;
	author: string;
	date: {
		started: string;
		finished?: string;
	};
	status: string;
	content?: string;
}
