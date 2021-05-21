import axios from "axios";
const request = {
    start(opts) {
        const {
            baseURL,
            url,
            headers,
            data
        } = opts;
        return new Promise((resolve, reject) => {
            axios({
                    baseURL,
                    url,
                    headers,
                    data
                })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((res) => {
                    reject(res.response);
                });
        });
    }
}
export default request;