import resquest from '@/utils/http.js'

export const getgoodsinformation = (id) => {
    return resquest({
        url:'/goods',
        params:{
          id
        }
      })
}

export const getchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return resquest({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}