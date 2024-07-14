<template>
  <div @click="click" class="f-center c-button border-2 gradient-l-r">
    <el-icon size="40">
      <component :is="iconComponent" />
    </el-icon>
    <div class="text-lg text-white">{{ props.title }}</div>
  </div>
</template>

<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { computed } from 'vue'

type ElementPlusIcons = keyof typeof ElementPlusIconsVue

const props = defineProps<{
  title?: string
  icon: ElementPlusIcons
}>()

const iconComponent = computed(() => {
  return ElementPlusIconsVue[props.icon]
})

const emit = defineEmits(['click'])

const click = () => {
  emit('click', props.icon)
}
</script>

<style scoped></style>
