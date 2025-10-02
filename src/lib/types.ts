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

export interface Cooklog {
	id: string;
	title: string;
	date_cooked: string;
	image?: string;
	tags?: string[];
	cook_logs?: any[];
}

export interface Haiku {
	date: string;
	en: string[];
	ja: string[];
}
