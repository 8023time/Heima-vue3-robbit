import reuqest from '@/utils/http.js'

export const getcategorylistdata = (id) => {
    return reuqest.get('/category',{params:{id}})
}

export const getCategoryFilterAPI = (id) => {
    return reuqest({
      url:'/category/sub/filter',
      params:{
        id
      }
    })
  }

export const getSubCategoryAPI = (data) => {
  return reuqest({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}
  