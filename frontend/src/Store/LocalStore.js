class LocalStore {
    storeToken(data) {
        localStorage.setItem("helaToken", JSON.stringify(data));
    }

    getToken() {
        const tokenData = localStorage.getItem("helaToken");
        return tokenData ? JSON.parse(tokenData) : null;
    }

    removeToken() {
        localStorage.removeItem("helaToken");
    }
}

export default LocalStore = new LocalStore()