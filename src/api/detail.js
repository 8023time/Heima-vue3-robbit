import resquest from '@/utils/http.js'

export const getgoodsinformation = (id) => {
    return resquest({
        url:'/goods',
        params:{
          id
        }
      })
}