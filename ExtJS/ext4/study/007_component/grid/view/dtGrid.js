Ext.define("mvccase.view.dtGrid", {
	extend: "Ext.grid.Panel",
	xtype:'dtGrid',
	alias:"widget.dtGrid",
	border: false,
    initComponent: function() {
		var me = this;
		
		me.buildColumns();
		me.callParent();//这不能少
	},
	buildColumns: function(){
		var me = this;
//		var sm = new Ext.grid.CheckboxSelectionModel();
	    var cm = [new Ext.grid.RowNumberer(), 
//	    	sm,
	        {header: "编号", dataIndex: "id", width: 65, hidden: true},
	        {header: "名称", dataIndex: "name", width: 65},
	        {header: "路径", dataIndex: "url", width: 150}
	    ];
	    var fd = ["id", "name", "url"];
	    var store = new Ext.data.JsonStore({
	        fields: fd,
	        data:[{
		        id: 1, 
		        name: "xiao", 
		        url: "http://www.baidu.com/", 
		        sex: "male"
		    },{
		        id: 2, 
		        name: "jiao", 
		        url: "http://www.sina.com.cn/", 
		        sex: "male"
		    }]
	    })
	    me.tbar = [{
            text: "换列",
//          icon: "images/icons/add.png",
            cls: "x-btn-text-icon",
            handler: function () {
                var fd = [
                	{
	                	name: "id"
	                },{
	                	name: "name"
	                },{
	                	name: "url"
	                },{
	                	name: "sex"
	                },{
	                	name: "add"
                	}
                ];
                //重新绑定store及column
                var ss = new Ext.data.JsonStore({
                    fields: fd
                });
                ss.loadData([
                	{
				        id: 1, 
				        name: "xiao", 
				        url: "http://www.baidu.com/", 
				        sex: "male",
				        add: "遂宁市船山区永兴镇安国市村"
				    },{
				        id: 2, 
				        name: "jiao", 
				        url: "http://www.sina.com.cn/", 
				        sex: "male",
				        add: "遂宁市XXXXXXX"
				    }
            	]);
				me.reconfigure(ss,  [    
			        {'header': '编号', 'dataIndex': 'id', flex: 1},
			        {'header': '姓名', 'dataIndex': 'name', flex: 1},    
			        {'header': '性别', 'dataIndex': 'sex', flex: 1},  
			        {'header': '地址', 'dataIndex': 'add', flex: 1}  
		    	]);
//				me.doLayout();
                
            }
        }];
        me.columns = cm;
        me.store = store;
	}
});