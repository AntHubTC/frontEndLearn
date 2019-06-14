Ext.define("mvccase.view.normalGrid", {
	extend: "Ext.grid.Panel",
	xtype:'normalGrid',
	alias:"widget.normalGrid",
	border: false,
	tbar : [{
        text: "获取选择行数据",
        cls: "x-btn-text-icon",
        handler: function (btn, event) {
        	var me = this
        		grid = me.up("normalGrid");
        	var selections = grid.getSelectionModel().getSelection();
        	//更多是采用按钮置灰来控制
        	if(null == selections || 0 == selections.length){
        		Ext.Msg.alert("提示", "请选择一行数据");
        		return;
        	} 
        	var selection = selections[0];
        	var msg = "你选择的数据是：<br/>";
        	msg += "列1：" + selection.get("column1") + "<br/>";
        	msg += "列2：" + selection.get("column2");
        	
        	Ext.Msg.alert("提示", msg);
        	
        	event.preventDefault();
        }
    }],
    columns: [{
    	header: '列1',
    	dataIndex: 'column1'
	},{
    	header: '列2',
    	dataIndex: 'column2'
	}],
    store: Ext.create('Ext.data.Store', {
    	fields: ['column1', 'column2'],
    	data:[{
	    	column1: "数据一",
	    	column2: "数据二"
    	}]
    })
});