# lxm-fold-grid是一个全平台前端页面模板，一般用来做个人中心页面模板，也可以做其他页面模板。宫格折叠收起展开+堆叠图片轮播+操作条+头像+胶囊按钮+图标带文字选项卡
> **组件名：lxm-fold-grid**
> 代码块： `lxm-fold-grid`

### 说明

基于Color UI 的宫格，本模板引用插件luyj-grid-link的主要功能包括：
* 按组显示宫格信息。
* 每组可以选择标题是否展示、可以选择背景色。
* 超过一行，自动设置折叠/展开的形式。点击：**展开** 或**折叠**按钮显示宫格内容。
* 也可以修改为超过两行自动设置折叠/展开的形式。这个可以修改“luyj-grid-link.vue”文件里的参数。item.colNumber*1改为：item.colNumber*2。@/common/data/data.js，列表iconsList里图标超过9个，比如12个左右。

### 安装方式

* 本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，`HBuilderX 2.5.5`起，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`。
* 本组件的样式基于ColorUI 。所以，若要使用先依照官网下载并下源码解压，复制根目录的 /colorui 文件夹到你的根目录。然后在App.vue 引入关键Css `main.css` `icon.css`。

``` html
<style>
    @import "colorui/main.css";
    @import "colorui/icon.css";
    @import "app.css"; /* 你的项目css */
    ....
</style>
```

### 本模板引用插件luyj-grid-link的基本用法

在 ``template`` 中的使用

```html
	<luyj-grid-link :list="list" @gridExc="clickGrid"></luyj-grid-link>
```

这里 `list`对应列表数据;@gridExc,对应没有链接属性时，宫格的执行方法,其中`e.detail.dataset.exec`对应列表中宫格的**`exec`**属性。这里引用了数据：

```javascript
list: [{
			title: '成员管理',
			cur: 'applications',
			bgColor: 'bg-blue light', // 背景颜色
			color: 'blue',
			title_show: false,
			showAll: false,
			colNumber: 3, // 显示的列数
			iconsList: [{
					cuIcon: 'group_fill',
					color: 'blue',
					name: '组织机构',
					url: '/pages/toUrl/toUrl'
				},
				{
					cuIcon: 'friendadd',
					color: 'blue',
					name: '无URL',
					exec : 'add'
				},
				{
					cuIcon: 'friendaddfill',
					color: 'blue',
					name: '无Url',
					exec: 'invite'
				},
			]
		},
		{
			title: '基础数据',
			cur: 'basic',
			bgColor: '', // 背景颜色
			color: 'blue',
			title_show: true,
			showAll: false,
			colNumber: 5, // 显示的列数
			iconsList: [{
					cuIcon: 'text',
					color: 'yellow',
					name: '基本信息',
					url: '/pages/toUrl/toUrl'
				},
				{
					cuIcon: 'peoplelist',
					color: 'blue',
					name: '员工管理',
					url: '/pages/toUrl/toUrl'
				},

			]
		}, {
			title: '产品目录',
			cur: 'goods',
			bgColor: '', // 背景颜色
			color: 'blue',
			title_show: true,
			showAll: false,
			colNumber: 5, // 显示的列数
			iconsList: [{
					cuIcon: 'list',
					color: 'yellow',
					name: '分类',
					url: '/pages/toUrl/toUrl'
				},
				{
					cuIcon: 'goodsnew',
					color: 'blue',
					name: '型号',
					url: '/pages/toUrl/toUrl'
				},
				{
					cuIcon: 'shake',
					color: 'olive',
					name: '设备',
					url: '/pages/toUrl/toUrl'
				},
				{
					cuIcon: 'questionfill',
					color: 'yellow',
					name: '常见问题',
					url: '/pages/toUrl/toUrl'
				}
			]
		},
		{
			title: '权限管理',
			cur: 'goods',
			bgColor: '', // 背景颜色
			color: 'blue',
			title_show: true,
			showAll: false,
			colNumber: 5, // 显示的列数
			iconsList: [{
				cuIcon: 'goodsfill',
				color: 'red',
				name: '权限设置',
				url: '/pages/toUrl/toUrl'
			}]
		}
	], 
```

### 属性说明

|属性名					|类型			|默认值		|说明																
|:-:					|:-:			|:-:		|:-:																
| list					|Arrary			|[]			|宫格组，其中里面的每一组对象表示每一组宫格的展示

#### list 内对象的参数说明

|属性名					|类型			|是否必填		|说明
|:-:					|:-:			|:-:			|:-:
|title					|String			|是				|标题
|cur					|String			|是				|当前宫格组的名称（每组不能重名）
|bgColor				|String			|是				|宫格的背景颜，(可以为''),参考Color UI的样式
|color					|String			|是				|标题字体的颜色
|title_show				|Boolean		|是				|是否显示标题
|showAll				|Boolean		|是				|是否默认展开所有宫格
|colNumber				|Number			|是				|每行展示宫格的列数
|iconsList				|Array			|是				|宫格的图标列表

##### iconsList 内对象的参数说明

|属性名					|类型			|是否必填		|说明
|:-:					|:-:			|:-:			|:-:
|cuIcon					|String			|是				|图标名称，参考ColorUI库
|color					|String			|是				|宫格颜色
|name					|String			|是				|名称
|url					|String			|否				|宫格默认的跳转路径
|exec					|String			|否				|存储参数（无Url时），宫格的参数。点击宫格是，@gridExc传递参数

### 事件说明
| 事件名		| 说明		|	返回参数 
| :-:			| :-:		| :-:	
|@gridExc		| 宫格无跳转路径时，返回参数，用于区分宫格，执行不同操作			| value= {e.detail.dataset.exec}
传奇开心果模板，名称：lxm-fold-gridV1.0.0,传奇开心果出品，2022.1.6