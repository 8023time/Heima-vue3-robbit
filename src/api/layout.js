import resquesthttps from '@/utils/http.js'

export function getcategoryheader (){
    return resquesthttps.get('/home/category/head')
}