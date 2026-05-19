<!--
  步骤2：组件拆分 + props 父传子

  props 是父组件传给子组件的数据
  像函数的参数一样，父组件用 :prop名="值" 传入
-->
<script setup>
// defineProps：父传子 —— 接收父组件传来的数据（返回值赋给变量才能在 JS 里用）
const props = defineProps({
  name: String,
  age: Number
})

// defineEmits：子传父 —— 子组件向父组件发事件
// emit('事件名', 参数) 触发事件，父组件用 @事件名="处理函数" 接收
const emit = defineEmits(['sayHi'])

const handleClick = () => {
  // 通过 props.name 拿到父组件传的值
  emit('sayHi', props.name + ' 向你打招呼')
}
</script>

<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p>年龄：{{ age }} 岁</p>
    <!-- 点击按钮 → 触发 sayHi 事件 → 父组件收到 -->
    <button @click="handleClick">打招呼</button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  width: 200px;
  display: inline-block;
  text-align: center;
}
.card h3 {
  color: #42b883;
  margin: 0 0 8px 0;
}
</style>
