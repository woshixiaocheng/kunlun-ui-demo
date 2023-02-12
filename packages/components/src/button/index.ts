import button from './button.vue'
//button是组件类型，因此可以用install注册组件
import {withInstall} from '@kunlun-ui/utils/install'
const Button = withInstall(button)
export default Button