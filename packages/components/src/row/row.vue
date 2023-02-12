<template>
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.is('wrap', !wrap),
      ns.is('justify-center', 'center' === justify),
      ns.is('justify-end', 'end' === justify),
      ns.is('justify-space-between', 'space-between' === justify),
      ns.is('justify-space-around', 'space-around' === justify),
      ns.is('justify-space-evenly', 'space-evenly' === justify),
      ns.is('align-middle', 'middle' === align),
      ns.is('align-bottom', 'bottom' === align),
      ns.is('align-top', 'top' === align),
    ]"
    :style="gutterStyle"
  >
    <slot />
  </component>
</template>
<script lang="ts">
export default {
  name: 'kl-row',
};
</script>
<script setup lang="ts">
import { rowProps } from './row';
import { defineProps, computed, CSSProperties, provide } from 'vue';
import { useNamespace } from '@kunlun-ui/utils';
import { isArray, isNumber } from 'lodash';
const props = defineProps(rowProps);
console.log(props.gutter);
const ns = useNamespace('row');
const gutterStyle = computed(() => {
  let size = props.gutter;
  let styles: CSSProperties = {}; //ts定义为css样式类型
  if (size && isNumber(size)) {
    size = size / 2;
    styles.marginLeft = styles.marginRight = `-${size}px`;
  } else if (isArray(size) && size.length > 0) {
    styles.marginLeft = styles.marginRight = `-${size[0] / 2}px`;
    if (size.length > 1) {
      styles['row-gap'] = `${size[1]}px`;
    }
  }
  return styles;
});
provide('gutter', props.gutter);
</script>
