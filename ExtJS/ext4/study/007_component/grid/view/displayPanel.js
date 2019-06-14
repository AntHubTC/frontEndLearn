Ext.define("mvccase.view.displayPanel", {
	extend: "Ext.panel.Panel",
	xtype:'displayPanel',
	alias:"widget.displayPanel",
	dockedItems:[],
	autoScroll: true, //内容溢出的时候自动显示滚动
	border: false,
	initComponent: function() {
		var me = this;
		
		me.buildItems();
		me.callParent();//这不能少
	},
	buildItems: function(){
		var me = this, items = [];
		
		items.push({
			margin: "0 10 0 0",
			xtype:"button",
			text:"基础grid",
			action:'bClick'
		});
		items.push({
			html: "普通的grid生成方式"
		});
		
		items.push({
			margin: "0 10 0 0",
			xtype:"button",
			text:"拼接grid",
			action:'pClick'
		});
		items.push({
			html: "所有的列都是动态拼接而成，适用于列不固定，动态生成。"
		});
		
		items.push({
			margin: "0 10 0 0",
			xtype:"button",
			text:"可编辑grid",
			action:'eClick'
		});
		items.push({
			html: "可以编辑单元格的grid。本例中的下拉列表是级联的。"
		});
		
		items.push({
			margin: "0 10 0 0",
			xtype:"button",
			text:"grid单元格定制",
			action:'dClick'
		});
		items.push({
			html: "对单元格做特殊的定制。例如本例中的将特定列的特定情况下生成“查看”按钮。"
		});
		
		items.push({
			margin: "0 10 0 0",
			xtype:"button",
			text:"列动态grid",
			action:'dtGridClick'
		});
		items.push({
			html: "列动态grid主要功能是grid在特定情况下，它每次的列都有变化，这个时候就可以使用这个示例中的代码。<br/> 这个曾在数据平台开发数据上卷下钻的时候遇到过。"
		});
		
		me.items = items;
//		me.store = ;
	}
});