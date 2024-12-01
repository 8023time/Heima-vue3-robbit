import resquest from '@/utils/http'

// 下面的就是实现一个接口用来搞的作用就是实现登录功能
export const loginuserinformation = (data) => {
    return resquest.post('/login',data)
}