declare module '*.vue' {
    import type { DefineComponent } from "vue";
    //返回组件类型 这例让from '.vue'返回的值的类型是组件
    const component:DefineComponent<{},{},any>
}

export default component