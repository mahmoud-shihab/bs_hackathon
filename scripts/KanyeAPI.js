class KanyeAPI {
    constructor() {
        this.baseURL = "https://api.kanye.rest/";
    }
    async getQuote() {
        const apiURL = `${this.baseURL}`;
        const { data } = await axios.get(apiURL);
        // console.log(data);
        return data;
    }
}

export default KanyeAPI;
