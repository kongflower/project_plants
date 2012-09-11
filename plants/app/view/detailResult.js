Ext.define('plants.view.detailResult',{
	extend : 'Ext.List',
	xtype: 'detailResult',
	
	requires : [
	  	      'Ext.dataview.List',
	  	      'Ext.data.proxy.JsonP',
	  	      'Ext.data.Store'
	],
	config:{
		id:'detailResult',
		title : 'detailResult',
		fullscreen 	: true,
		store 		: 'searchData',
		itemTpl 	:[
		       '<div style="height: 60px;">',
		        '<div style="float:left; width: 60px; height: 60px; background-image:url(./resources/images/frame_snall.png);'
		       +'background-repeat:no-repeat; background-size:100% 100%;">',
		        	'<img src="http://14.63.218.122/plantsImage/img{number}.jpg" style="width: 80%; height: 80%; margin-top:10%; margin-left:10%">',
		        '</div>',
		        '<div style="margin-left: 70px; padding-top: 18px;">',
		        	'{name}',
		        '</div>',
		       '</div>'
		],
		items 		:[
		      	{
		      		xtype :'plantsTitlebar',
		      		title : '검색결과',
		      		width : '100%',
		      		docked: 'top',
		      		height: 50,
		      	},  		  
		]
	}
});