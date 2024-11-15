import resquesthttps from '@/utils/http.js'

export function getbannerpicture (params = {}) {
    const { distributionSite = '1' } = params
    return resquesthttps.get('/home/banner',{
    params:{distributionSite}
    })
}

export function getnewgoods () {
    return resquesthttps.get('/home/new')
}

export function gethotgoodslist () {
    return resquesthttps.get('/home/hot')
}

export function getdoodsapi () {
    return resquesthttps.get('')
}

export const getGoodsAPI = () => {
    return resquesthttps({
      url: '/home/goods'
    })
  }