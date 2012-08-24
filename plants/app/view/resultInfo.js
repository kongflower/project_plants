Ext.define('plants.view.resultInfo',{
	extend : 'Ext.Panel',
	xtype: 'resultInfo',
	
	requires: [
	       'Ext.Img',
	       'Ext.Label',
	       'Ext.field.Text'
	],
	
	config : {
		title : 'resultInfo',
		
		layout 	: {type:'vbox',align:'middle'},
		defaults: {flex:2},
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
		    {
		    	xtype 	: 'label',
		    	style 	: 'background-color:gray',
		    	html 	: 'label',
		    	flex 	: 0.3,
		    	width 	: '90%',
		    	margin  : '5 0 5 0'
		    },
		    {
		    	xtype 	: 'img',
		    	src 	: 'http://cfile24.uf.tistory.com/image/133E6D484EDD020E048345',
		    	width 	: '90%',
		    	margin 	: 20,
		    	margin  : '0 4 10 4'
		    },
		    {	
		    	xtype 	 : 'textfield',
				name 	 : '특성',
				readOnly : true,
		    	width 	 : '90%',
		    	value 	 : '특성',
		    	margin   : '5 0 5 0'
		    	
		    },
		    {
		    	xtype 	 : 'textfield',
				name 	 : '설명',
				readOnly : true,
		    	width 	 : '90%',
		    	value 	 : '설명',
		    	margin   : '5 0 5 0',
		    	flex 	 : 1,
		    },
		],
	}
});