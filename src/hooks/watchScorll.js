import { onMounted,onUnmounted,ref } from "vue";
export default function (){
    let scrollTop = ref(0)
    function scrollEvent(){
        scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
    }
    onMounted(()=>{
        window.addEventListener('scroll',scrollEvent)
    })
    onUnmounted(()=>{
        window.removeEventListener('scroll',scrollEvent)
    })

    return scrollTop
}