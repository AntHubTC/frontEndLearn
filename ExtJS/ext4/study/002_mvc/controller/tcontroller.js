Ext.define("mvccase.controller.tcontroller", {
	extend: "Ext.app.Controller",
	refs:[],
	stores:[],
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
	btnClick: function(){
		alert("click");
	}
});