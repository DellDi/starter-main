<template>
  <div
    border="~ [#f5f5f5] solid"
    class="f-center bg-[#283156] flex-col gap-2 py-2 px-6 rounded-1 cursor-pointer"
  >
    <el-icon size="40" @click="click">
      <component :is="iconComponent" />
    </el-icon>
    <div class="text-lg">{{ props.title }}</div>
  </div>
</template>

<script setup lang="ts">
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { computed } from 'vue'

// 定义一个类型，表示 ElementPlusIconsVue 命名空间中所有键的联合类型
type ElementPlusIcons = keyof typeof ElementPlusIconsVue

const props = defineProps<{
  title?: string
  icon: ElementPlusIcons
}>()

const iconComponent = computed(() => {
  // 确保传递的图标名称是正确的，并且已经被导入
  return ElementPlusIconsVue[props.icon]
})

const emit = defineEmits(['click'])

const click = () => {
  emit('click', props.icon)
}
</script>

<style scoped></style>
