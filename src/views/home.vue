<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <div class="f-center mt-10 flex-wrap flex-col gap-4">
          <EpButton title="刷新" icon="RefreshRight" click="refresh" />
          <EpButton title="刷新" icon="RefreshRight" click="refresh" />
          <EpButton title="刷新" icon="RefreshRight" click="refresh" />
        </div>
      </el-aside>
      <el-main>
        <header flex class="justify-between">
          <h2 text="left">
            运行情况 <span class="text-4">模型名称：{{ statusText }}</span>
          </h2>
          <section>{{ thisDayText }}</section>
        </header>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import EpButton from '~/components/Button/Button.vue'
type eumStatus = 'running' | 'stop'

const status = ref<eumStatus>('running')

const thisDayText = computed(() => {
  return '2023-01-01'
})

const statusText = computed(() => {
  return status.value === 'running' ? '运行中' : '已停止'
})
const refresh = (name: string) => {
  console.log('🚀 ~ refresh ~ name:', name)
}
</script>

<style scoped></style>
