Ext.define('mvccase.store.provinces', {
	extend: 'Ext.data.ArrayStore',
	storeId: 'provinces',
	fields: ['id','text'],
	data: [['1','省1'],['2','省2'],['3','省3']]
});