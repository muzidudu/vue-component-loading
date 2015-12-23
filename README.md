## Vue-Loading

### 使用示例

```
<link rel="stylesheet" href="index.build.css">
<script type="text/javascript" src="index.build.js"></script>

<div id="bodyCont" :is-loading-show="false">
    <vue-loading toast-text="加载中" :is-show="isLoadingShow"></vue-loading>
    <input type="button" @click="showLoading()" value="显示加载浮层">
</div>
```

### Directive支持的属性(Props)

| 属性 | 支持的值 |
|:----------|:----------------------------------------------------------------------------|
| toast-text | 加载中文案，只有默认皮肤时生效 |
| is-show | 是否展示加载浮层组件 |
| skin | 加载浮层皮肤样式，默认为黑色菊花，设置为`meituan`时为小团动画 |

### 暴露的方法列表

| 方法名 | 产生的动作 |
|:----------|:----------------------------------------------------------------------------|
| show | 显示加载浮层 |
| hide | 隐藏加载浮层 |
| toggle | 交替展示和隐藏加载浮层 |

### 监听的事件列表

| 事件名称 | 产生的动作 |
|:----------|:----------------------------------------------------------------------------|
| vue-loading-show | 显示加载浮层 |
| vue-loading-hide | 隐藏加载浮层 |
| vue-loading-toggle | 交替展示和隐藏加载浮层 |