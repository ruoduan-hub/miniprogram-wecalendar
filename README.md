## miniprogram-wecalendar
> A miniprogram date component that supports sliding, weekly folding, and brisk
> Built with ESbuild, now responsive

[中文 README](README-zh_CN.md)

### Exhibit

<div style="display: flex; justify-content: space-around;background: #fff">
  <img src="https://s2.loli.net/2023/04/19/u7owCD6U9pAiLxf.png" alt="image" style="zoom: 25%;" />
  <img src="https://s2.loli.net/2023/04/19/HaL4mwgMDou5fyK.gif" alt="git" style="zoom:67%;" />
</div>

### install

```js
npm i miniprogram-wecalendar
```

or

```
yarn add miniprogram-wecalendar
```



### use

> Add the calendar custom component configuration to the page page.json or app.json that needs to use the calendar

```json
{
  "usingComponents": {
    "WeCalendar": "miniprogram-wecalendar"
  }
}
```



- Use 👇🏻 in wxml

```html
<WeCalendar markCalendarList="{{markCalendarList}}" isToday="{{true}}" bind:onRangeDate="onRangeDate" bind:onSelect="onSelect" />
```



### WeCalendar of then properties

| Property | Type | Default | required | Description |
| -------- | ----- | ----- | ----- | -------------------- |
| isToday | Boolean | False | 0 | Whether to show today button |
| markCalendarList | `Array[{ date: YYYY-MM-DD pointColor: #ccc }]` | [] | 0 | Calendar markers, color can be customized |
| defaultDate | String:  YYYY-MM-DD | Null | 0 | Default date |
| showFolding | Boolean | True | 0 | Calendar folding function |
| weeekLayer | Number | 1 | 0 | Number of rows in collapsed state |



### WeCalendar of then Func

| Property | Type | Description |
| ---------- | ----- | --------------- |
| onSelect | Function Callback | How to choose a date |
| onRangeDate | Function Callback | The scope of each rendering of the calendar |

### For example 🌰

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

### Development start
```js
npm run dev
```
- - Use the WeChat applet development tool to open the `demo` folder, change the file under `src` and it will be automatically built



