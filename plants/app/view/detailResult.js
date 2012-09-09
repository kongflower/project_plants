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
		        '<div style="float:left; width: 60px; height: 60px; background-image:url(./resources/images/frame_snall.png);'
		       +'background-repeat:no-repeat; background-size:100% 100%;">',
		        	'<img src="{url}" style="width: 80%; height: 80%; margin-top:10%; margin-left:10%">',
		        '</div>',
		        '<div style="margin-left: 70px; padding-top: 18px;">',
		        	'{name}',
		        '</div>',
		       '</div>'
		],
		items 		:[
		      	{
		      		xtype :'plantsTitlebar',
		      		title : '<font color="#24303c">검색결과</font>',
		      		width : '100%',
		      		height: 50,
		      	},  		  
		]
	}
});