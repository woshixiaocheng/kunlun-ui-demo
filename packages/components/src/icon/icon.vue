<template>
  <i :class="`kl-icon-${name}`"></i>111
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
  name:{
    type:String,
    default:""
  }
})
</script>