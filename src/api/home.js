import resquesthttps from '@/utils/http.js'

export function getbannerpicture () {
    return resquesthttps.get('/home/banner')
}

export function getnewgoods () {
    return resquesthttps.get('/home/new')
}