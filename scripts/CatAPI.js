class CatAPI {
    constructor(api_key) {
        this.api_key = api_key
        this.baseURL = "https://api.thecatapi.com/v1";
    }
    async getImage() {
        const endpoint = "images/search"
        const apiURL = `${this.baseURL}/${endpoint}?api_key=${this.api_key}`;
        console.log(apiURL);
        const { data } = await axios.get(apiURL);
        console.log("Cat Data: ",data);
        return data[0].url;
    }
}

export default CatAPI;
