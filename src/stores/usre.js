// 管理用户的一些信息
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginuserinformation } from '@/api/user';

export const UseUserStore = defineStore('userinfor' , () => {
    // 定义用户数据的信息
    const userinformation = ref()
    // 接下来的就是通过接口来获取用户的一些信息
    const getuserinformation = async (data) => {
      const result = await loginuserinformation(data)
      userinformation.value = result.result
    }
    return {
      userinformation,// 在这里已经有了token等字段
      getuserinformation
    }
},
{
  persist: true,
})
