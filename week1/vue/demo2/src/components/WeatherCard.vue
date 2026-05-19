<!--
  天气展示组件：接收父组件传来的天气数据，用 props 展示
  只在有数据时才渲染
-->
<script setup>
import { onMounted, onBeforeUnmount, onUnmounted, ref } from 'vue'

defineProps({
  weather: {
    type: Object,
    default: null
  }
})

// 记录组件创建时间，演示 onMounted 的使用
const createTime = ref('')

onMounted(() => {
  // 组件挂载到 DOM 后，记录当前时间
  const now = new Date()
  createTime.value = now.toLocaleTimeString()
  console.log('🟢 WeatherCard 已挂载，创建时间：' + createTime.value)
})

// onBeforeUnmount：组件即将卸载前执行（DOM 还在，可以做清理前的最后操作）
onBeforeUnmount(() => {
  console.log('🟡 WeatherCard 即将卸载...')
})

// onUnmounted：组件已卸载后执行（DOM 已移除，做善后清理）
onUnmounted(() => {
  console.log('🔴 WeatherCard 已卸载，不再显示天气信息')
})
</script>

<template>
  <div class="weather-card" v-if="weather">
    <h2>{{ weather.city }}</h2>
    <p class="temp">{{ weather.temp }}°C</p>
    <p>💧 湿度：{{ weather.humidity }}%</p>
    <p>🌤 天气：{{ weather.desc }}</p>
    <p class="create-time">（组件创建于：{{ createTime }}）</p>
  </div>
</template>

<style scoped>
.weather-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 24px;
  width: 300px;
  margin: 0 auto;
  text-align: center;
  background: #f9f9f9;
}
.temp {
  font-size: 48px;
  font-weight: bold;
  color: #42b883;
  margin: 10px 0;
}
h2 {
  margin: 0;
}
</style>
