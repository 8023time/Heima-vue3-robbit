// 图片懒加载
import { useIntersectionObserver } from '@vueuse/core'

export const Lazyjiazai = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el 这个值得是这个指令绑定的元素
                // binding : binding.value 绑定的是这个元素等号后面的值
                const target = ref(null)
                const targetIsVisible = ref(false)
        
                const { stop } = useIntersectionObserver(
                el,
                ([{ isIntersecting }]) => {
                   // 在这里的isintersecting 所指的就是是否进入到了视口的范围
                    if(isIntersecting) {
                        // 如果进入视口的范围
                        el.src = binding.value
                        //下面就是停止监视
                        stop()
                    }
                },
                )
            }
        })
    }
}