class UnsplashAPI {
    constructor(client_id) {
        this.client_id = client_id;
        this.baseURL = "https://api.unsplash.com/";
    }

    async getBackgroundImage(query) {
        try {
            const apiURL = `https://api.unsplash.com/photos/random?client_id=${this.client_id}&query=${query}&orientation=landscape`;
            const {data} = await axios.get(apiURL);
            return data.urls.full;
        } catch (error) {
            console.log(error);
            throw new Error("OutOfLimitError");
        }
    }
}

export default UnsplashAPI;
