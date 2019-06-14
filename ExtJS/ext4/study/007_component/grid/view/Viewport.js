Ext.define("mvccase.view.Viewport", {
	extend: "Ext.container.Viewport",
	margin:'10 10 10 10',
	items:[{
		xtype:"displayPanel",
	}],
	onBoxReady: function(){
		this.callParent();
	}
})