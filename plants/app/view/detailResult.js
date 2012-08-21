Ext.define('plants.view.detailResult',{
	extend : 'Ext.List',
	xtype: 'detailResult',
	
	requires : [
	  	      'Ext.dataview.List',
	  	      'Ext.data.proxy.JsonP',
	  	      'Ext.data.Store'
	],
	config:{
		title : 'detailResult',
		fullscreen 	: true,
		itemTpl 	:'{title}',
		store 		:  'List',
	
	}
});