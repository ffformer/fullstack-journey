<!--
  天气搜索组件：输入框 + 搜索按钮
  通过 emit 把城市名发给父组件
-->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const city = ref('')

const emit = defineEmits(['search'])
const handleSearch = () => {
  if (city.value.trim()) {
    emit('search', city.value.trim())
  }
}

// onMounted：组件挂载到 DOM 后执行
// 此时 DOM 已存在，可以安全操作 ref 对应的 DOM 元素
const inputRef = ref(null)
onMounted(() => {
  // 自动聚焦到输入框
  inputRef.value?.focus()
  console.log('🔵 WeatherSearch 已挂载')
})

// onUnmounted：组件从 DOM 移除后执行
// 用于清理定时器、取消请求、移除事件监听等，防止内存泄漏
onUnmounted(() => {
  console.log('🔴 WeatherSearch 已卸载')
})
</script>

<template>
  <div class="search">
    <p class="lifecycle-hint">onMounted → 自动聚焦输入框</p>
    <input
      ref="inputRef"
      v-model="city"
      placeholder="输入城市名（如 Beijing）"
      @keyup.enter="handleSearch"
    />
    <button @click="handleSearch" :disabled="!city">查询</button>
  </div>
</template>

<style scoped>
.search {
  margin-bottom: 24px;
}
input {
  padding: 10px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 260px;
  font-size: 16px;
  margin-right: 10px;
}
button {
  background: #42b883;
  color: #fff;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
