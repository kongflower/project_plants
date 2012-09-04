Ext.define('plants.view.tmpList',{
	extend : 'Ext.List',
	xtype: 'tmpList',
	
	requires : [
      'Ext.dataview.List',
      'Ext.data.proxy.JsonP',
      'Ext.data.Store'
	],
	config:{
		title : '즐겨찾기',
		fullscreen 	: true,
		itemTpl 	:'{firstName}',
		store 		: 'bookmarkData',
	}
});