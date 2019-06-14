Ext.define("mvccase.controller.tcontroller", {
	extend: "Ext.app.Controller",
	views:['displayPanel','normalGrid','pjGrid','editGrid1', 'dzGrid', 
	'dtGrid'],
	refs:[],
	stores:['provinces','city'],
	init: function(){
		console.info("init");
		var me = this;
		this.control({
			"button": {
				"click" : function(btn,evt,eOpts){
					if(btn["action"]){
						me[btn["action"]](btn, evt, eOpts);
					}
				}
			}
		});
	},
	onLounch: function(){
		console.info("onLoundch");
	},
	bClick: function(){
		var win = Ext.widget({
			xtype:'window',
		    title: '普通grid',
		    height: 300,
		    width: 400,
		    layout: 'fit',
		    items: [{
		        xtype: 'normalGrid',
		    }]
		});
		win.show();
	},
	pClick: function(){
		var win = Ext.widget({
			xtype:'window',
		    title: '拼接grid',
		    height: 300,
		    width: 400,
		    layout: 'fit',
		    items: [{
		        xtype: 'pjGrid'
		    }]
		});
		win.show();
	},
	eClick: function(){
		var win = Ext.widget({
			xtype:'window',
		    title: '可编辑grid',
		    height: 300,
		    width: 400,
		    layout: 'fit',
		    items: [{
		    	xtype: 'panel',
		    	items:[{
		    		xtype: 'text',
		    		autoSize:true,
					autoScroll:true,
					height:50,
		    		text:"这个只有选了省2，那么市下面才有选择的项，其他省，市下面就没有对应的项。曾经遇到了这种需求，其它项要求能够直接输入，这有其中一项选择了，那么这边的就用选择的方式。"
		    	},{
			        xtype: 'editGrid1',
			        valueEditor:{
						xtype: 'combo',
						selectOnTab: true,
						editable: true,
						valueField: 'id',
						displayField: 'text',
						store: new Ext.data.SimpleStore({
							fields : [ 'id', 'text' ],
							data : []
						}),
						queryMode: 'local'
					}
		    	}]
	    	}]
		});
		win.show();
	},
	dClick: function(){
		var win = Ext.widget({
			xtype:'window',
		    title: 'grid单元格定制',
		    height: 300,
		    width: 400,
		    layout: 'fit',
		    items: [{
		        xtype: 'dzGrid'
		    }]
		});
		win.show();
	},
	dtGridClick: function(){
		var win = Ext.widget({
			xtype:'window',
		    title: '动态grid',
		    height: 300,
		    width: 800,
		    layout: 'fit',
		    items: [{
		        xtype: 'dtGrid'
		    }]
		});
		win.show();
	}
});