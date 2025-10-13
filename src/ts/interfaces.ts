export interface Raw {
	name: string;
	category: string;
	price: number;
	image: {
		thumbnail: string;
		mobile: string;
		tablet: string;
		desktop: string;
	};
}

export interface Dessert extends Raw {
	id: string;
	quantity: number;
}
