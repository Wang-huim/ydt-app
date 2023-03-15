/**
 * 目录的宫格索引
 */

module.exports = {
	current_list: [{
		title: '成员管理',
		cur: 'applications',
		bgColor: '', // 背景颜色
		color: 'blue',
		title_show: false,
		showAll: false,
		colNumber: 5, // 显示的列数
		iconsList: [{
				cuIcon: 'refund',
				color: 'blue',
				name: '兑换',
			},
			{
				cuIcon: 'discoverfill',
				color: 'yellow',
				name: '发现',
				exec: 'add'
			},
			{
				cuIcon: 'goods',
				color: 'green',
				name: '商品',
				exec: 'invite'
			},
			{
					cuIcon: 'cart',
					color: 'red',
					name: '购物',
				},
				{
					cuIcon: 'crown',
					color: 'orange',
					name: '人员',
					exec: 'add'
				},
				{
					cuIcon: 'redpacket',
					color: 'red',
					name: '红包',
					exec: 'invite'
				},
			{
					cuIcon: 'game',
					color: 'pink',
					name: '游戏',
				},
				{
					cuIcon: 'upstage',
					color: 'cyan',
					name: '奖杯',
					exec: 'add'
				},
				{
					cuIcon: 'share',
					color: 'blue',
					name: '分享',
					exec: 'invite'
				},

			
		]
	}],
	system_list: [{
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
					exec: 'add'
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
}
