import axios from 'axios'
let http = axios.create({
    baseURL:'http://localhost:8000',
})
export function miao() {
    return http.get("/miao")
}
export function list() {
    return http.get("/list")
}