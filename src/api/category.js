import reuqest from '@/utils/http.js'

export const getcategorylistdata = (id) => {
    return reuqest.get('/category',{params:{id}})
}