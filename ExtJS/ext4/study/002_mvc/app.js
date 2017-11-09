//通过调用Loader.setConfig可开启Ext.Loader，需要传递一个匿名对象，它的eanbled属性设置为true，而命名空间设置为路径映射。
//Ext.Loader.setConfig({
//	enabled: true
//});
Ext.application({
	name: "mvccase",
	autoCreateViewport: true,
	appFolder: '.',
//	models:[],
//	stores:[],
	controllers:['tcontroller']
});
