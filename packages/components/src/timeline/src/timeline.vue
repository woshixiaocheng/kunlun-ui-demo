<template>
    <ul :class="[n()]">
        <slot />
    </ul>
</template>
<script lang="ts">
export default {
    name: 'kl-timeline'
}
</script>
<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { timelineProps } from './type/timeline'
import { provide, defineProps } from 'vue'
import './style/timeline.scss'
const { n } = createNamespace('timeline')
const props = defineProps(timelineProps)
provide('mode', props.mode)
//mode时间轴位置
//节点倒序
</script>
<style></style>
