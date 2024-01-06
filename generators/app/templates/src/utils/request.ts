import axios,{InternalAxiosRequestConfig,AxiosResponse} from "axios";
const instance = axios.create({
    baseURL:'',
    timeout:30000
})
instance.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    console.log(config);
    return config
})
instance.interceptors.response.use((res:AxiosResponse)=>{
    return res.data
},(err)=>{
    
})
export default instance