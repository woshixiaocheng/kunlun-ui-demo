// 规范接收的属性
//作用是接收一个类型，然后把对应的vue3所接收的props类型提供出来
import { ExtractPropTypes } from "vue";
export const ButtonType=['default','primary','success','warning','danger']
export const ButtonSize=['large','normal','small','mini']
export const buttonProps={
    type:{
        type:String,
        value:ButtonType
    },
    size:{
        type:String,
        value:ButtonSize
    }
}
export type buttonProps=ExtractPropTypes<typeof buttonProps>
