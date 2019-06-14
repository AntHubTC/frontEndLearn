Ext.define("mvccase.view.pjGrid", {
	extend: "Ext.grid.Panel",
	xtype:'pjGrid',
	alias:"widget.pjGrid",
	border: false,
	columns:[],//列
	disPlayfields:[],//显示数据域
	dColumns:[{
		name:"column1",
		text:"列1"
	},{
		name:"column2",
		text:"列2"
	},{
		name:"column3",
		text:"列3"
	}],
    initComponent: function() {
		var me = this;
		
		me.buildColumns();
		me.bindData();
		me.callParent();//这不能少
	},
	buildColumns: function(){
		var me = this, 
			columns = [],
			disPlayfields = [];
		
		Ext.Array.forEach(me.dColumns, function(item, index, allItems){
			columns.push({
				dataIndex: item.name,
				text: item.text
			});
			disPlayfields.push(item.name);
		});
		
		me.columns = columns;
		me.disPlayfields = disPlayfields;
	},
	bindData: function(){
		var me = this;
		var store = Ext.create("Ext.data.Store", {
			fields: me.disPlayfields,
			data: [{column1:"R1C1",column2:"R1C2",column3:"R1C3"},
				{column1:"R2C1",column2:"R2C2",column3:"R2C3"},
				{column1:"R3C1",column2:"R3C2",column3:"R3C3"}]
		});
		
		me.store = store;
	}
});