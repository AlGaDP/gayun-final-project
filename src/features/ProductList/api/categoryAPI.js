import { axiosInstance } from "../../../services/axios"

export function getCategory(){
    return axiosInstance.get('/category');
}

export function getCatalog(){
    return axiosInstance.get('/catalog');
}

export function getProduct(id){
    return axiosInstance.get(`/catalog/${id}`);
}