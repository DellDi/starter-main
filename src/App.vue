<template>
  <el-config-provider size="large" namespace="ep">
    <div class="f-center main-container">
      <Layout />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import Layout from './layout/layout.vue'
</script>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh);
}
</style>
