import { getbannerpicture } from '@/api/home';
import { ref } from 'vue'
import { onMounted } from 'vue'

export const usebannerdata = () => {
    const bannercategorydata = ref()
    const getbannerdata = async () => {
    const res = await getbannerpicture()
    bannercategorydata.value = res.result
    }
    onMounted(
    () => {
        getbannerdata()
    }
    ) 
    return {
        bannercategorydata,
        getbannerdata
    }
}