<template>
  <div
    class="common-layout rounded-xl min-w-7xl m-0 p-10 shadow-xl min-h-2xl bg-[#191e44] shadow-lg shadow-[#191f43]/50"
  >
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      stretch
    >
      <el-tab-pane label="首页" name="home"> <Home /> </el-tab-pane>
      <el-tab-pane label="付费模型" name="mode"><Mode /></el-tab-pane>
      <el-tab-pane label="更多配置" name="setting"><Setting /></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { toggleDark, useSetDark } from '~/composables'
import type { TabsPaneContext } from 'element-plus'
import Home from '~/views/home.vue'
import Mode from '~/views/mode.vue'
import Setting from '~/views/setting.vue'

const activeName = ref('home')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

onMounted(() => {
  useSetDark()
})
</script>
