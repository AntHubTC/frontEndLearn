Ext.define("mvccase.view.editGrid1", {
	extend: "Ext.grid.Panel",
	xtype:'editGrid1',
	alias:"widget.editGrid1",
	border: false,
	valueEditor:null,
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
	plugins: {
		ptype: 'cellediting',
		clicksToEdit: 1,
		listeners: {
			edit: function(editor, ctx) {
//				if (ctx.field == 'operator'){
//					if (ctx.value){
//						ctx.record.set('removed', true);
//					}
//					if (ctx.value == 'IsNull' || ctx.value == 'IsNotNull'){
//						ctx.record.set('value', '');
//					}
//				}
			},
			beforeedit: function(editor, ctx) {
//				if (ctx.field == 'value'){
//					var operator = ctx.record.get('operator');
//					if (!operator) return false;
//					if (operator == 'IsNull' || operator == 'IsNotNull') return false;
//				}
				return true;
			},
			validateedit: function(editor, ctx) {
				var operator = ctx.record.get('operator'),
					value = ctx.value;
				return true;
			}
		}
	},
    initComponent: function() {
		var me = this;
		
		me.buildColumns();
		me.bindData();
		me.callParent();//这不能少
	},
	buildColumns: function(){
		var me = this, 
			columns = []
		me.on("cellclick",function(tableView, tdEle, cellIndex, record, trEle, rowIndex){
			//var rowIndex = index + 1;
			var province = record.get("province");
			if(me.valueEditor){
				var store;
				if("省2" == province){
					store = Ext.data.StoreManager.lookup("city");
				} else {
					//store = new Ext.data.SimpleStore({
					//	fields : [ 'codeEncCode', 'codeEncMnCns' ],
					//	data : []
					//});
				}
				me.valueEditor.store.removeAll();
				me.valueEditor.store.add(store ? store.getRange() : []);
			}
		});
		
		columns.push({
			dataIndex: "name",
			text: "姓名"
		});
		columns.push({
			dataIndex: "province",
			text: "省",
			editor: {
				xtype: 'combo',
				selectOnTab: true,
				editable: false,
				valueField: 'text',
				store: 'provinces',
				listeners:{
					change: function(editor, newVal, oldVal, eOpts){
						console.info(arguments);
					}
				}
			}
		});
		columns.push({
			dataIndex: "city",
			text: "市",
			editor: me.valueEditor
		});
		me.columns = columns;
	},
	bindData: function(){
		var me = this;
		var store = Ext.create("Ext.data.Store", {
			fields: ["name", "city", "province"],
			data: [{name:"张三",city:"",province:"省1"},
				{name:"李四",city:"",province:"省2"},
				{name:"王五",city:"",province:"省3"}]
		});
		
		me.store = store;
	}
});