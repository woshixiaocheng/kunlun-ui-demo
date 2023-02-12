<template>
  <component :is="tag" :class="colClass" :style="colStyle">
    <slot />
  </component>
</template>
<script lang="ts">
export default {
  name: 'kl-col',
};
</script>
<script setup lang="ts">
import { colProps } from './col';
import { defineProps, computed, inject, CSSProperties } from 'vue';
import { useNamespace } from '@kunlun-ui/utils';
import { isArray, isNumber } from 'lodash';
const props = defineProps(colProps);
const ns = useNamespace('col');
const gutter = inject('gutter', 0);
const colStyle = computed(() => {
  const styles: CSSProperties = {};
  if (gutter && isNumber(gutter)) {
    styles.paddingLeft = styles.paddingRight = `${gutter / 2}px`;
  } else if (isArray(gutter)) {
    styles.paddingLeft = styles.paddingRight = `${gutter[0] / 2}px`;
  }
  return styles;
});
const colClass = computed(() => {
  const classes: string[] = [];
  const pos = [
    'span',
    'offset',
    'pull',
    'push',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'order',
  ] as const;
  pos.forEach((prop) => {
    const size = props[prop]; //得到值
    if (isNumber(size)) {
      //先判断传入的值是number
      if (prop === 'span') {
        classes.push(ns.b() + '-' + `${size}`);
      } else if (size > 0) {
        classes.push(ns.b(prop) + '-' + `${size}`);
      }
    } else if (
      (prop === 'xs' ||
        prop === 'sm' ||
        prop === 'md' ||
        prop === 'lg' ||
        prop === 'xl') &&
      prop.hasOwnProperty('order')
    ) {
      classes.push(ns.b(prop) + '-' + 'order' + `${prop[order]}` + `${size}`);
    }
  });
  return [ns.b(), ns.is('guttered', gutter), classes];
});
</script>
