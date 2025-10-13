export const loadDesserts = async () => {
    try {
        const response = await fetch("./data.json");
        if (!response.ok)
            throw new Error("Failed to load JSON");
        const data = await response.json();
        const desserts = data.map((item) => ({
            ...item,
            id: crypto.randomUUID(),
            quantity: 0,
        }));
        return desserts;
    }
    catch (error) {
        return [];
    }
};
//# sourceMappingURL=fetchData.js.map