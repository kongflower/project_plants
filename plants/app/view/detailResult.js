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
		store 		: 'searchData',
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
		items 		:[
		      	{
		      		xtype :'plantsTitlebar',
		      		title : '식물찾기',
		      		width : '100%',
		      		height: 50,
		      	},  		  
		]
	}
});