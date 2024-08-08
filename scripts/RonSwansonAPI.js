class RonSwansonAPI{
    constructor(){
        this.baseURL = "https://ron-swanson-quotes.herokuapp.com/v2";
    }

    async getQuote(){
        const endpoint="quotes";
        const apiURL = `${this.baseURL}/${endpoint}`
        const { data } = await axios.get(apiURL);
        // console.log(data);
        return data;
    }
}

export default RonSwansonAPI;