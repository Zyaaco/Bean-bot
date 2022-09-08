const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = async (keyword) => {
    if (Array.isArray(keyword)) {
        if (keyword.length > 0) {
            keyword = keyword.join(" ");
        }else {
            keyword = 'bean';
        }
    }
    const response = await fetch(url(keyword));
    
    const json = await response.json();
    return json;
};
const url = (keyword = 'bean') => {
    return `https://tenor.googleapis.com/v2/search?q=${keyword}&key=${process.env.TENORKEY}&client_key=my_test_app`;
};