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
		itemTpl 	:'{name}',
		store 		: 'searchData',
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