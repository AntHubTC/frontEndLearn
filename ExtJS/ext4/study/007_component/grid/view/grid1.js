Ext.define("mvccase.view.grid1", {
	extend: "Ext.grid.Panel",
	itemId: 'displayPanel',
	emptyText:"无数据",
	autoScroll: true, //内容溢出的时候自动显示滚动条
	initComponent: function() {
		var me = this;
		
		me.buildItems();
	},
	buildItems: function(){
		var me = this;
		var columns = [];
		
		columns.push({
			
		});
		
		me.columns = columns;
//		me.store = ;
	}
});