// 从 Vue 按需导入 API（ES Module 方式）
import {createApp,reactive,ref,computed,watch,watchEffect} from './vue.esm-browser.js'

// 创建 Vue 应用实例
createApp({

    // setup 是组合式 API 的入口，所有逻辑写在这里
    setup(){
        // ---- 基础数据 ----
        // ref() 包装基本类型，通过 .value 读写
        const number = ref(987)
        number.value = 123

        // reactive() 包装对象，直接读写属性，不需要 .value
        const web = reactive({
            title:"former",
            url:"https://www.former.com"
        })
        web.title = "vue3"

        // 方法：修改 web 对象的值
        const edit = () => {
            web.title = "vue3.2"
            web.url = "https://www.vue3.com"
        }

        // ---- v-show 演示 ----
        const show = ref(true)
        const toggle = () => {
            show.value = !show.value
        }

        // ---- v-if 演示 ----
        const show2 = ref(true)
        const toggle2 = () => {
            show2.value = !show2.value
        }

        // ---- v-if / v-else-if / v-else 演示 ----
        const level = ref(0)
        const nextLevel = () => {
            // 0→1→2→0 循环
            level.value = (level.value + 1) % 3
        }

        // ---- v-bind 动态属性绑定演示 ----
        // reactive 包装对象，用于 :href 动态绑定链接
        const link = reactive({
            url: 'https://www.vue3.com'
        })
        const canClick = ref(true)
        const toggleDisabled = () => {
            canClick.value = !canClick.value
        }

        // ---- v-for 列表渲染演示 ----
        // reactive 包装数组，push/pop 等操作会自动触发视图更新
        const list = reactive(['苹果', '香蕉', '橘子'])
        const addItem = () => {
            list.push('新水果' + (list.length + 1))
        }
        const removeItem = () => {
            list.pop()
        }

        // ---- v-model 双向绑定演示 ----
        const text = ref('')
        const gender = ref('男')
        // 复选框组绑定数组，选中多个时存入多个 value
        const hobbies = ref([])

        // ---- v-model 修饰符演示 ----
        const lazyText = ref('')
        const num = ref(0)
        const trimText = ref('')

        // ---- v-text 与 v-html 演示 ----
        // v-text 原样输出标签，v-html 真正渲染成 HTML
        const rawText = ref('<strong>我是粗体吗？</strong>')
        const rawHtml = ref('<strong>我才是真正的粗体</strong>')

        // ---- computed 计算属性演示 ----
        const price = ref(10)
        const count = ref(2)
        // computed 有缓存，price 或 count 不变时不会重复计算
        const total = computed(() => {
            return price.value * count.value
        })

        // ---- watch 监听器演示 ----
        const keyword = ref('')
        const oldVal = ref('')
        const newVal = ref('')
        const changeCount = ref(0)
        // watch(监听源, (新值, 旧值) => { ... })
        // 需要明确指定监听谁，能拿到旧值，默认首次不执行
        watch(keyword, (newValue, oldValue) => {
            oldVal.value = oldValue
            newVal.value = newValue
            changeCount.value++
        })

        // ---- watchEffect 演示 ----
        const firstName = ref('张')
        const lastName = ref('三')
        const fullName = ref('')
        // watchEffect 自动追踪回调里用到的所有响应式数据
        // 立即执行一次（所以页面打开就有全名），拿不到旧值
        watchEffect(() => {
            fullName.value = firstName.value + lastName.value
        })

        // ---- 图片轮播演示 ----
        // 三张图片的路径数组
        const imgs = ['./1.png', './2.png', './3.png']
        // 当前显示第几张（索引从 0 开始）
        const currentIndex = ref(0)
        // 上一张：到第一张时回到最后一张（循环）
        const prev = () => {
            currentIndex.value = currentIndex.value === 0 ? imgs.length - 1 : currentIndex.value - 1
        }
        // 下一张：到最后一张时回到第一张（循环）
        const next = () => {
            currentIndex.value = currentIndex.value === imgs.length - 1 ? 0 : currentIndex.value + 1
        }
        // 点击圆点直接跳到对应图片
        const goTo = (i) => {
            currentIndex.value = i
        }

        // ---- 笔记本演示 ----
        // reactive 数组存储笔记，每项 { content: 内容, done: 是否完成 }
        const notes = reactive([])
        // 输入框双向绑定
        const noteContent = ref('')
        // 添加笔记：push 后清空输入框
        const addNote = () => {
            if (!noteContent.value) return
            notes.push({ content: noteContent.value, done: false })
            noteContent.value = ''
        }
        // 按索引删除笔记
        const removeNote = (i) => {
            notes.splice(i, 1)
        }
        // computed 自动统计已完成数量
        const doneCount = computed(() => {
            return notes.filter(n => n.done).length
        })

        // ---- 购物车演示 ----
        // 商品数据（通常来自后端，这里写死做演示）
        const goodsList = reactive([
            { id: 1, name: '笔记本电脑', price: 5999 },
            { id: 2, name: '无线鼠标', price: 99 },
            { id: 3, name: '机械键盘', price: 399 }
        ])

        // 从 localStorage 读取之前保存的购物车数据（持久化）
        const savedCart = localStorage.getItem('cart')
        const cart = reactive(savedCart ? JSON.parse(savedCart) : [])

        // 加入购物车：如果已存在则 qty+1，否则新增，默认勾选
        const addToCart = (goods) => {
            const item = cart.find(c => c.id === goods.id)
            if (item) {
                item.qty++
                item.checked = true
            } else {
                cart.push({ ...goods, qty: 1, checked: true })
            }
        }
        // 修改数量：delta 为 1 加一件，-1 减一件
        const changeQty = (i, delta) => {
            cart[i].qty += delta
            if (cart[i].qty <= 0) {
                cart.splice(i, 1)
            }
        }
        // 从购物车删除单个
        const removeFromCart = (i) => {
            cart.splice(i, 1)
        }
        // 批量删除选中的商品（倒序遍历避免索引错乱）
        const removeChecked = () => {
            for (let i = cart.length - 1; i >= 0; i--) {
                if (cart[i].checked) {
                    cart.splice(i, 1)
                }
            }
        }
        // 清空整个购物车
        const clearCart = () => {
            cart.splice(0, cart.length)
        }

        // watchEffect 自动追踪 cart 变化，写入 localStorage（持久化）
        watchEffect(() => {
            localStorage.setItem('cart', JSON.stringify(cart))
        })

        // computed 全选/全不选：get 判断是否全选中，set 批量切换所有商品选中状态
        const allChecked = computed({
            get() {
                return cart.length > 0 && cart.every(item => item.checked)
            },
            set(val) {
                cart.forEach(item => { item.checked = val })
            }
        })
        // computed 只计算勾选商品的总金额
        const cartTotal = computed(() => {
            return cart.reduce((sum, item) => {
                return item.checked ? sum + item.price * item.qty : sum
            }, 0)
        })
        // computed 只计算勾选商品的总件数
        const cartCount = computed(() => {
            return cart.reduce((sum, item) => {
                return item.checked ? sum + item.qty : sum
            }, 0)
        })
        // computed 选中商品件数
        const checkedCount = computed(() => {
            return cart.filter(item => item.checked).length
        })

        // setup 必须 return 出去，模板中才能使用这些变量和方法
        return {
            msg: 'hello vue3',
            web,
            show,
            toggle,
            show2,
            toggle2,
            level,
            nextLevel,
            link,
            canClick,
            toggleDisabled,
            list,
            addItem,
            removeItem,
            text,
            gender,
            hobbies,
            lazyText,
            num,
            trimText,
            rawText,
            rawHtml,
            price,
            count,
            total,
            keyword,
            oldVal,
            newVal,
            changeCount,
            firstName,
            lastName,
            fullName,
            imgs,
            currentIndex,
            prev,
            next,
            goTo,
            notes,
            noteContent,
            addNote,
            removeNote,
            doneCount,
            goodsList,
            cart,
            addToCart,
            changeQty,
            removeFromCart,
            removeChecked,
            clearCart,
            cartTotal,
            cartCount,
            allChecked,
            checkedCount,
            edit
        }
    }
}).mount('#app') // 挂载到 id="app" 的 DOM 元素上
