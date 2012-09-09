Ext.define('plants.view.favoBookmarkList',{
	extend : 'Ext.List',
	xtype: 'favoBookmarkList',
	
	requires : [
      'Ext.dataview.List',
      'Ext.data.proxy.JsonP',
      'Ext.data.Store'
	],
	config:{
		title : '즐겨찾기',
		//fullscreen 	: true,
		itemTpl 	:[
			'<div style="height: 60px;">',
			'<div style="float:left; width: 60px; height: 60px;">',
				'<img src="{url}" style="width: 100%; height: 100%;">',
			'</div>',
			'<div style="margin-left: 70px; padding-top: 18px;">',
				'{name}',
			'</div>',
			'</div>'
		],
		store 		: 'bookmarkData',
	}
});