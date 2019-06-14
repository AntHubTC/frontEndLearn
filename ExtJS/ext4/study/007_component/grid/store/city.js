Ext.define('mvccase.store.city', {
	extend: 'Ext.data.ArrayStore',
	storeId: 'city',
	fields: ['id','text'],
	data: [['1','市1'],['2','市2'],['3','市3']]
});