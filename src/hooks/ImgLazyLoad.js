import { useIntersectionObserver } from '@vueuse/core'
import imgDefault from '../assets/logo.png'
export default {
    install(app) {
        app.directive('imgLazy', {
            mounted(el, binding) {
                el.src = imgDefault // 默认图片
                const { stop } = useIntersectionObserver(el, ([{ isIntersecting }], observerElement) => {
                        if (isIntersecting) { // 可见区域
                            el.onerror = () => { // 当图片加载失败 设置为默认图片
                                el.src = imgDefault
                            }
                            stop() // 可见区域后 下次不在执行监听
                            el.src = binding.value // 设置传过来的地址去请求
                        }
                    }, { threshold: 0 }) // 当可视区域宽高为0就触发
                console.log(el, binding.value)
            }
        })
    }
}