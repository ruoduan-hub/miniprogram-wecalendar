## miniprogram-wecalendar
> 一个支持滑动、自定义折叠、标记日期、轻快的小程序日期组件
> 使用ESbuild 构建,现在的快速响应的

---

[![npm (tag)](https://img.shields.io/npm/v/miniprogram-wecalendar)](https://www.npmjs.com/package/miniprogram-wecalendar) 
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ruoduan-hub/miniprogram-wecalendar)](https://github.com/ruoduan-hub/miniprogram-wecalendar)
[![esbuild-node](https://img.shields.io/badge/Node18-Esbuild-blue)](https://github.com/ruoduan-hub/miniprogram-wecalendar)
[![miniprogram](https://img.shields.io/badge/Component-miniprogram-blue)](https://github.com/ruoduan-hub/miniprogram-wecalendar)
[![GitHub](https://img.shields.io/badge/license-Anti%20996-blue)](https://github.com/ruoduan-hub/miniprogram-wecalendar)

---

[英文 README](README.md)

### 展示

<div style="display: flex; justify-content: space-around;background: #fff">
  <img src="https://s2.loli.net/2023/04/19/u7owCD6U9pAiLxf.png" alt="image" style="zoom: 25%;" />
  <img src="https://s2.loli.net/2023/04/19/HaL4mwgMDou5fyK.gif" alt="git" style="zoom:67%;" />
</div>

### 安装

```js
npm i miniprogram-wecalendar
```

or

```
yarn add miniprogram-wecalendar
```



### 使用

> 在使用地方 `page.json` 或者 `app.json` 中使用 👇🏻

```json
{
  "usingComponents": {
    "WeCalendar": "miniprogram-wecalendar"
  }
}
```

> ~~打开开发工具 `less` 模式~~
>
> 1.2.0 支持 wxss

```json
"useCompilerPlugins": [
            "less"
        ]
```




- 在 wxml 加入使用 👇🏻

```html
<WeCalendar markCalendarList="{{markCalendarList}}" isToday="{{true}}" bind:onRangeDate="onRangeDate" bind:onSelect="onSelect" />
```



### WeCalendar的参数

| Property | Type | Default | required | Description |
| -------- | ----- | ----- | ----- | -------------------- |
| isToday | Boolean | False | 0 | 是否展示今天按钮icon |
| markCalendarList | `Array[{ date: YYYY-MM-DD pointColor: #ccc }]` | [] | 0 | 标记日历的数组,支持自定义颜色 |
| defaultDate | String:  YYYY-MM-DD | Null | 0 | 默认时间 |
| showFolding | Boolean | True | 0 | 日历折叠功能 |
| weeekLayer | Number | 1 | 0 | 日历折叠的等级 \| 行数 |



### WeCalendar 的方法

| Property | Type | Description |
| ---------- | ----- | --------------- |
| onSelect | Function Callback | 日历每天的点击事件 |
| onRangeDate | Function Callback | 日历渲染的日期范围 |

### 举个例子 🌰

- onSelect

```js
onSelect: (e) => {
  const {day} = e.detail
  // ...
}
```

- onRangeDate

```js
onRangeDate: (e) => {
  const {beginTime, endTime} = e.detail
  // ...
}
```


### 开发启动
```js
npm run dev
```
- 用微信小程序开发工具打开`demo`文件夹即可，更改`src`下面的文件会自动构建



