export const liveSearch = (needle, products, onMatch) => {
    const search = needle.toLowerCase();
    const searchResults = products.filter(item => {
        return item.title.toLowerCase().includes(search);
    });
    onMatch(searchResults);
};