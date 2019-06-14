Ext.define("mvccase.view.dzGrid", {
	extend: "Ext.grid.Panel",
	xtype:'dzGrid',
	alias:"widget.dzGrid",
	border: false,
    columns: [{
    	header: 'ID',
    	dataIndex : 'id',
    	flex : 0.5
	},{
    	header: '任务名称',
    	dataIndex : 'taskName',
    	flex : 1,
	},{
		dataIndex : 'logInfo',
		text : '日志',
		flex : 1,
		align: 'center',
		renderer: function(value, metaData, record){
			if(value){
				var id = "gridCell"+metaData.recordIndex;
				metaData.tdAttr = 'data-qtip="查看日志"';
				Ext.defer(function() {
					Ext.widget('button', {
						renderTo: id,
						//value: value / 100,
						height: 20,
						width: 40,
						text: '查看',
						handler: function () {
							Ext.create('Ext.window.Window', {
								title: '日志',
								height: 450,
								width: 650,
								layout: 'fit',
								items: {
									autoScroll: true,
									html: value
								}
							}).show();
//							Ext.Msg.alert("日志", value);
						}
					});
				}, 50);
				return Ext.String.format('<div id="{0}"></div>', id);
			}
			return "没有日志记录";
		}
	}],                 // 仅仅用来显示一个头部。没有数据，
    store: Ext.create("Ext.data.Store", {
		fields: ["id", "taskName", "logInfo"],
		data: [{id:"001",taskName:"taskName1",logInfo:"这是日志1"},
			{id:"002",taskName:"taskName2",logInfo:null},//这里没有日志
			{id:"003",taskName:"taskName3",logInfo:"这是日志3"}]
	})
});