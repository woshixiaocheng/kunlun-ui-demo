import DefaultTheme from 'vitepress/theme'
import 'theme-chalk/src/index.scss'
import kunlunui from "kunlun-ui"
export default{
    ...DefaultTheme,
    enhanceApp:async({app,router,siteData})=>{
        app.use(kunlunui)
    }
}