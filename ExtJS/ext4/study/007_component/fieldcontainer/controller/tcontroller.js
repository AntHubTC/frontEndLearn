Ext.define("mvccase.controller.tcontroller", {
	extend: "Ext.app.Controller",
	refs:[{
		ref: 'trackHistory',
		selector: '#trackHistory'
	},{
		ref: 'hideHistoryBtn',
		selector: 'button[name=hideHistoryBtn]'
	}],
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
	addHistory: function(){
		var me = this,
			trackHistory = me.getTrackHistory();
		var trackDims = ["项1","项2","项3"];
		var trackHistoryPanelItems = [];
		trackHistoryPanelItems.push({
			xtype:"container",
			html: (function(){
				var html = "<div style='display:inline-block;margin-right: 25px'>" +
					"维度:" + trackDims.join(",")
				"</div>";
				return html;
			})()
		});
		trackHistory.insert(trackHistory.items.length, {
			xtype: 'fieldset',
			id: "trackHistoryItem" + trackHistory.items.length,
			title: '钻取项' + trackHistory.items.length,
			labelSeparator: "：",
			items: trackHistoryPanelItems
		});
	},
	removeHistory: function(){
		var me = this,
			trackHistory = me.getTrackHistory();
		//删除钻取历史项
		if(trackHistory.items.length > 1){
			trackHistory.remove("trackHistoryItem" + (trackHistory.items.length - 1));	
		}
	},
	toggleHistory: function(){
		var me = this,
			trackHistory = me.getTrackHistory(),
			trackHistoryBtn = me.getHideHistoryBtn();
			
		trackHistory.getEl().toggle();
		var display = trackHistory.getEl().getStyle("display");
		if("block" == display){
			trackHistoryBtn.setText("收起历史");
		} else {
			trackHistoryBtn.setText("展开历史");
		}
	}
});