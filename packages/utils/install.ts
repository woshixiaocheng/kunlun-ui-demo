import type {App,Plugin} from "vue"
//给T&Plugin这个取别名为，T&Plugin就是两个都要满足才行
type SFCWithInstall<T> = T&Plugin
//这个方法comp后面再赋值，
export const withInstall = <T>(comp:T) => {
    //这里进行类型断言，comp的类型就是Plugin插件
    (comp as SFCWithInstall<T>).install = (app:App)=>{
        //注册组件
        //为什么要as any，因为作为T泛型不能调用.name
        app.component((comp as any).name,comp as any)
    }
    return comp as SFCWithInstall<T>
}