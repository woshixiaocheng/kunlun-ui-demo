// 规范接收的属性
//as const的作用是把这个值变成readonly的
//import type 表示只导入类型；
//ExtractPropTypes是vue3中内置的类型声明,它的作用是接收一个类型，然后把对应的vue3所接收的props类型提供出来，后面有需要可以直接使用
import { ExtractPropTypes } from "vue";
export const ButtonType=['default','primary','success','warning','danger'] as const
export const ButtonSize=['large','normal','small','mini'] as const
export const buttonProps={
    type:{
        type:String,
        value:ButtonType,
        default:''
    },
    size:{
        type:String,
        value:ButtonSize,
        default:''
    },
    plain:Boolean,
    round:Boolean,
    circle:Boolean,
    disabled:Boolean
}
//type就是指定buttonProps是一个类型
export type buttonProps=ExtractPropTypes<typeof buttonProps>
