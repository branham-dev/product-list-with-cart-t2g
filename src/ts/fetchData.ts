import type { Raw, Dessert } from "./interfaces.js";

export const loadDesserts = async (): Promise<Dessert[]> => {
	try {
		const response = await fetch("./data.json");
		if (!response.ok) throw new Error("Failed to load JSON");
		const data: Raw[] = await response.json();

		const desserts: Dessert[] = data.map((item: Raw) => ({
			...item,
			id: crypto.randomUUID(),
			quantity: 0,
		}));

		return desserts;
	} catch (error) {
		return [];
	}
};
