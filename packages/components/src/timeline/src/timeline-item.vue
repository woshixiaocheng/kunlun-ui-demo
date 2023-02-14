<template>
    <li :class="itemClasses">
        <!-- 没有dot插槽时展示 -->
        <div :class="[n(), n('--tail')]"></div>
        <div v-if="!slots.dot" :class="[n(), n(`--dot--normal`)]"></div>
        <div v-if="slots.dot">
            <slot name="dot" />
        </div>
        <div :class="[n('--content')]">
            <slot name="default" />
        </div>
    </li>
</template>
<script lang="ts">
export default {
    name: 'kl-timeline-item'
}
</script>
<script setup lang="ts">
import { createNamespace } from '@kunlun-design/utils'
import { timelineProps } from './type/timeline'
import { defineProps, useSlots, inject, computed } from 'vue'
import './style/timelineitem.scss'
const { n } = createNamespace('timeline-item')
const props = defineProps(timelineProps)
const slots: any = useSlots()
const mode: any = inject('mode', 'left')
const itemClasses = computed(() => {
    let classes: any[] = [n()]
    if (mode === 'right') {
        classes.push(n('--right'))
    } else if (mode === 'center') {
        classes.push(n('--center'))
    }
    return classes
})
</script>
<style></style>
