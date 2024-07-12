<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

defineProps<{ msg: string }>()

const count = ref(0)
const input = ref('element-plus')

const curDate = ref('')

const toast = () => {
  ElMessage.success('Hello')
}

const value1 = ref(true)
</script>

<template>
  <h1 color="$ep-color-primary">{{ msg }}</h1>

  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a> for more
    information.
  </p>

  <!-- example components -->
  <div class="mb-4">
    <el-button size="large" @click="toast">El Message</el-button>
  </div>

  <div f-center class="my-2 text-center"></div>

  <div>
    <el-switch v-model="value1" />
    <el-switch
      v-model="value1"
      class="m-2"
      style="--ep-switch-on-color: black; --ep-switch-off-color: gray"
    />
  </div>

  <div class="my-2">
    <el-input class="m-2" v-model="input" style="width: 200px" />
    <el-date-picker
      class="m-2"
      v-model="curDate"
      type="date"
      placeholder="Pick a day"
    ></el-date-picker>
  </div>
  x
</template>

<style>
.ep-button {
  margin: 4px;
}
.ep-button + .ep-button {
  margin-left: 0;
  margin: 4px;
}
</style>
