import axios from "axios";
/**
 * 网络请求
 */
const request = {
    start: function (opts) {
        const {method,url,data} = opts;
        console.log("method:",method,",url:",url,",data:",data);
        const baseUrl="";
        return new Promise((resolve, reject) => {
            axios({
                method,
                url,
                baseURL:baseUrl,
                data
            }).then(res=>{
              if(res.status==0){
                  resolve(res.data);
              }else{
                  reject(res.statusText);
              }
            });
        });
    }
}

export default request;