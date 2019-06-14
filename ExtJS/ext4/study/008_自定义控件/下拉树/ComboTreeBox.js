Ext.define('ComboTreeBox', {
	extend: 'Ext.form.field.ComboBox',
	multiSelect: true,
	matchFieldWidth: false,
	maxHeight: 150,
	treeStore:null,
	columns:[{
		xtype: 'treecolumn',
		flex: 1,
		dataIndex: 'text'
	}],
	listConfig: {
		width: 500,
		minWidth: 250,
		maxWidth: 500,
		height: 200,
		maxHeight: 200
	},
	createPicker: function() { //点击之后才会执行
		var me = this;
		
		//创建树控件  
		var picker = Ext.create('Ext.tree.Panel', {
			store: me.treeStore,
			rootVisible: true,
			selModel: {
				mode: me.multiSelect ? 'SIMPLE' : 'SINGLE'
			},
			floating: true,
			hidden: true,
			focusOnToFront: false,
			shrinkWrapDock: 1,
			width:500,
			useArrows: true,
			floating: true,
//			cascade : 'both',//级联方式:1.child子级联;2.parent,父级联,3,both全部级联
			minHeight: 100,
			maxHeight: 600,
			columns: me.columns
		});
		//注册事件用于选择用户选择的值  
		me.mon(picker, {
			itemclick: me.onItemClick,
			refresh: me.onListRefresh,
			scope: me
		});

		me.mon(picker.getSelectionModel(), {
			beforeselect: me.onBeforeSelect,
			beforedeselect: me.onBeforeDeselect,
			selectionchange: me.onListSelectionChange,
			scope: me
		});
		this.picker = picker;
		return picker;
	},

	onItemClick: function(picker, record) {
		/* 
		 * If we're doing single selection, the selection change events won't fire when 
		 * clicking on the selected element. Detect it here. 
		 */
		var me = this,
			selection = me.picker.getSelectionModel().getSelection(),
			valueField = me.valueField;

		if (!me.multiSelect && selection.length) {
			if (record.get(valueField) === selection[0].get(valueField)) {
				// Make sure we also update the display value if it's only partial  
				me.displayTplData = [record.data];
				me.setRawValue(me.getDisplayValue());
				me.collapse();
			}
		}
	}
});