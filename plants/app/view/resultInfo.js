Ext.define('plants.view.resultInfo',{
	extend : 'Ext.Panel',
	xtype: 'resultInfo',
	
	requires: [
	       'Ext.Img',
	       'Ext.Label',
	       'Ext.field.Text'
	],
	
	config : {	
		layout 	: {type:'vbox',align:'middle'},
		
		scrollable:true,
		//styleHtmlContent:true,
		
		items: [
		    {
				xtype :'plantsTitlebar',
				title : '식물찾기',
				width : '100%',
				height: 50,
			},
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
		    	margin  : '0 4 10 4',
		    	flex 	: 2,
		    	mode 	:'none'
		    },
		    {	
		    	xtype 	 : 'textfield',
				name 	 : '특성',
				readOnly : true,
		    	width 	 : '90%',
		    	value 	 : '특성',
		    	margin   : '5 0 5 0',
		    	flex:2
		    	
		    },
		    {
		    	xtype 	 : 'textareafield',
		    	id 		 : 'explane',
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