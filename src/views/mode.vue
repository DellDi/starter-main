<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <div class="f-center flex-wrap">
        </div>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import EpButton from '~/components/Button/Button.vue'

const refresh = (name: string) => {
  console.log('🚀 ~ refresh ~ name:', name)
}
</script>

<style scoped></style>
