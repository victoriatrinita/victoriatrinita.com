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
