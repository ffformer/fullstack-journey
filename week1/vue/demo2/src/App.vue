<!--
  步骤2：组件拆分 + props 父传子

  组件树：App（父） → UserCard（子）
  父组件通过 :属性名="值" 把数据传给子组件
-->
<!--
  天气查询应用 — 完整的数据流：

  WeatherSearch ──emit('search', 城市名)──► App 调用 API
                                              │
  WeatherCard   ◄──props(:weather)────────────┘

  涉及知识点：组件拆分、props、emit、ref、wttr.in API、fetch/async
-->
<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue'
import WeatherSearch from './components/WeatherSearch.vue'
import WeatherCard from './components/WeatherCard.vue'

const weather = ref(null)
const loading = ref(false)
const error = ref('')

// ---- 搜索历史 ----
// 从 localStorage 恢复历史记录，没有就空数组
const savedHistory = localStorage.getItem('weatherHistory')
const history = reactive(savedHistory ? JSON.parse(savedHistory) : [])

// watchEffect 自动追踪 history 变化 → 写入 localStorage 持久化
watchEffect(() => {
  localStorage.setItem('weatherHistory', JSON.stringify(history))
})

// 页面标题自动同步：查哪个城市，浏览器标签页标题就显示哪个
watchEffect(() => {
  document.title = weather.value
    ? `🌤 ${weather.value.city} - ${weather.value.temp}°C`
    : '天气查询'
})

// ---- 生命周期 ----
const appTime = ref('')
onMounted(() => {
  appTime.value = new Date().toLocaleTimeString()
  handleSearch('Beijing')
})

// ---- 搜索逻辑 ----
const handleSearch = async (city) => {
  loading.value = true
  error.value = ''
  weather.value = null

  try {
    const res = await fetch(`https://wttr.in/${city}?format=j1`)
    if (!res.ok) throw new Error('城市不存在')
    const data = await res.json()

    const cur = data.current_condition[0]
    weather.value = {
      city: data.nearest_area[0].areaName[0].value,
      temp: cur.temp_C,
      humidity: cur.humidity,
      desc: cur.weatherDesc[0].value
    }

    // 查询成功 → 加入历史（去重：已有则删旧位置，再插到最前面）
    const idx = history.indexOf(city)
    if (idx !== -1) history.splice(idx, 1)
    history.unshift(city)
    // 最多保留 6 条历史
    if (history.length > 6) history.pop()
  } catch (e) {
    error.value = '查询失败：' + e.message
  } finally {
    loading.value = false
  }
}

// 点击历史城市直接切换
const switchCity = (city) => {
  handleSearch(city)
}

// 删除某条历史
const removeHistory = (index) => {
  history.splice(index, 1)
}

// 清空全部历史
const clearHistory = () => {
  history.splice(0, history.length)
}
</script>

<template>
  <div class="app">
    <h1>🌤 天气查询</h1>

    <WeatherSearch @search="handleSearch" />

    <p v-if="loading">查询中...</p>
    <p v-else-if="error" class="error">{{ error }}</p>
    <WeatherCard v-else :weather="weather" />

    <!-- 搜索历史 -->
    <div class="history" v-if="history.length > 0">
      <h3>📋 搜索历史
        <button class="clear-btn" @click="clearHistory">清空</button>
      </h3>
      <span
        v-for="(city, i) in history"
        :key="i"
        class="tag"
      >
        <span @click="switchCity(city)" class="city-name">{{ city }}</span>
        <span @click="removeHistory(i)" class="del">×</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.app {
  text-align: center;
  padding: 40px;
}
h1 {
  color: #42b883;
  margin-bottom: 24px;
}
.error {
  color: #e74c3c;
}

/* 搜索历史 */
.history {
  margin-top: 30px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.history h3 {
  font-size: 16px;
  margin-bottom: 12px;
}
.clear-btn {
  font-size: 12px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 2px 8px;
  cursor: pointer;
  margin-left: 10px;
  vertical-align: middle;
}
.tag {
  display: inline-block;
  background: #f0f9f4;
  border: 1px solid #42b883;
  border-radius: 12px;
  padding: 4px 8px 4px 12px;
  margin: 4px;
  font-size: 14px;
}
.city-name {
  cursor: pointer;
  color: #42b883;
}
.city-name:hover {
  text-decoration: underline;
}
.del {
  cursor: pointer;
  color: #ccc;
  margin-left: 4px;
  font-weight: bold;
}
.del:hover {
  color: #e74c3c;
}
</style>
