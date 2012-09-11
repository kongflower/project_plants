Ext.define('plants.view.recentSearchList',{
	extend : 'Ext.List',
	xtype: 'recentSearchList',
	
	requires : [
      'Ext.dataview.List',
      'Ext.data.proxy.JsonP',
      'Ext.data.Store'
	],
	config:{
		title : '<font color="#24303c">최근찾기</font>',
        disableSelection: true,
		//fullscreen 	: true,
		
		store 		: 'recentSearchData',
		itemTpl 	:[
	       '<div style="height: 60px;">',
	        '<div style="float:left; width: 60px; height: 60px; background-image:url(./resources/images/frame_snall.png);'
	       +'background-repeat:no-repeat; background-size:100% 100%;">',
	        	'<img src="{url}" style="width: 80%; height: 80%; margin-top:10%; margin-left:10%">',
	        '</div>',
	        '<div style="margin-left: 70px; padding-top: 18px;">',
	        	'{name}',
	        '</div>',
	       '</div>'
		]
	}
});