<template>
  <button :class="[
    ns.b(),
    ns.m(type),
    ns.m(size),
    ns.is('disabled',disabled),
    ns.is('circle',circle),
    ns.is('plain',plain),
    ns.is('round',round)
  ]"><slot></slot></button>
</template>
<script lang="ts">
export default{
  name:"kl-button"
}
</script>
<script lang="ts" setup >
//直接导入type.ts里规范好的属性用defineProps注册
import { buttonProps } from './type';
import {useNamespace} from '@kunlun-ui/utils'
import  {defineProps} from 'vue'
const props=defineProps(buttonProps)
const ns=useNamespace('button')
</script>


