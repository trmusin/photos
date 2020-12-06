import Unsplash from 'unsplash-js';


const instance = new Unsplash({
    accessKey: "ImF-jEdFhgzN4EG1XLpbn9nnaXim7R0FQzygY4MuPqo",
    headers: {
        "X-Custom-Header": "foo"
    },
    timeout: 5000
});

const unsplashApi = {
    getCollectionsList: async (page)=> {
        let response = await instance.collections.listCollections(page, 3, "latest");
        let data = await response.json();
        if (data.errors) {
            return data
        }
        return {results: data}
    },
    getCollection: async (params)=> {
        let response = await instance.collections.getCollectionPhotos(params.query, params.page, 5, "latest");
        let data = await response.json();
        if (data.errors) {
            return data
        }
        return {results: data}
    },
    getPhotosList: async (page)=> {
        let response = await instance.photos.listPhotos(page, 5, "latest");
        let data = await response.json();
        if (data.errors) {
            return data
        }
        return {results: data}
    },
    getPhoto: async (id)=> {
        let response = await instance.photos.getPhoto(id);
        let data = await response.json();
        if (data.errors) {
            return data
        }
        return {results: data}
    },
    searchPhotos: async (params)=> {
        let response = await instance.search.photos(params.search, params.page, 5, {orientation: "portrait", color: "green"});
        let data = await response.json();
        if (data.errors) {
            return data
        }
        return data
    },
};

export default unsplashApi;