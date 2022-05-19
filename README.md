# v3 api

**ref**
ref 对基础类型操作 ref(obj) 等价于 reactive({value: obj})

**reactiv**
reactive 的参数必须是一个对象，包括 json 数据和数组都可以，否则不具有响应式

**shallowRef**
shallowRef 定义的数据，只有第一层是响应式的，即只有在更改.value 的时候才能实现响应式

**triggerRef**
使用 shallowRef 后，可以通过 triggerRef()方法主动更新界面，实现界面刷新

**shallowReactive**
shallowReactive 只有第一层有响应数据
shallowReactive 没有类似 triggerRef()的方法

**toRaw**

```javascript
let obj1 = {...};
//state和obj1是引用关系，state的本质是一个Proxy对象，其中引用了obj1
let state = reactive(obj1);
//通过toRaw方法获取到原始数据，其实是获取到obj1的内存地址，obj2和obj1是完全相等的
let obj2 = toRaw(state)
console.log(obj1 === obj2);//true
```

通过 toRaw 获取 ref 或 reactive 引用的原始数据，通过修改原始数据，
不会造成界面的更新，只有通过修改 ref 和 reactive 包装后的数据时才会发生界面响应式变化。

**markRaw**
标记一个对象，使其不能成为一个响应式对象。

**toRef**

```javascript
const state = toRef(obj, 'key');
```

需要传入 key 值 只有当前 key 可以成为响应数据 只能传递一个 key 值
与 ref 相同，则修改响应式数据会影响到原始数据，数据发生改变，但是界面不会自动更新

**toRefs**
与 toRef 相同,不需要传入 key 值 遍历所有数据

**setup 语法糖**

```javascript
// Vue3 的定义
declare global {
  const defineProps: _defineProps
  const defineEmits: _defineEmits
  const defineExpose: _defineExpose
  const withDefaults: _withDefaults
}
//可直接使用 esLint会报错 
<script setup lang="ts">
const props = defineProps({
num: Number
})
</script>

```
