import {components} from './src/index'
export * from './src/index'//为了可以按需引入
import  { App } from 'vue'
const install= (app: App) => {
  components.forEach(c => app.use(c))
}
export default {
  install
  }

