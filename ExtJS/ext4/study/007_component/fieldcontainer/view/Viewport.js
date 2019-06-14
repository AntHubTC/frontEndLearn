Ext.define("mvccase.view.Viewport", {
	extend: "Ext.container.Viewport",
	items:[{
		xtype:"button",
		text:"添加历史",
		width: 150,
		action:'addHistory'
	},{
		xtype:"button",
		text:"移除历史",
		width: 150,
		action:'removeHistory'
	},{
		xtype:"button",
		name:"hideHistoryBtn",
		text:"收起历史",
		width: 150,
		action:'toggleHistory'
	},{
		xtype: 'fieldset',
		title: '钻取历史',
		id:'trackHistory',
//		style:{
//			display: 'none'
//		},
		items:[],
		onBoxReady: function(){
			var items = [], html = "";
			var html = "<div style='display:inline-block;margin-right: 25px'>" +
							"这是一个基础条件" +
						"</div>";
			items.push({
				xtype: 'container',
				html: html
			});

			this.insert(this.items.length, {
				xtype: 'fieldcontainer',
				fieldLabel: '基础条件',
				labelSeparator: "：",
				items: items
			});
		}
	}],
	onBoxReady: function(){
		
	}
})