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
		style 	: 'background:#ffffff;',
		
		items: [
		    {
				xtype :'plantsTitlebar',
				title : '식물찾기',
				width : '100%',
				height: 50,
			},
		    {
		    	xtype 	:'panel',
		    	layout 	:'fit',
		    	margin 	:'20 5 5 5',
		    	width 	:280,
		    	height 	:280,
		    	
		    	items 	:{
		    		xtype 	: 'img',
		    		id 		: 'resultImg',
			    	//itemId 	: 'resultInfo',
			   	    padding : '20 20 30 20',
			   	    width 	: '100%',
			   	    height  : '100%',
			   	   	src 	: 'http://cfile24.uf.tistory.com/image/133E6D484EDD020E048345',
		        	mode 	: 'none',
		        	style 	: "background-image:url('./resources/images/frame_Large.png');" +
					  'border:0;' +
					  'background-color:transparent;' + 
					  'background-repeat:no-repeat;' + 
					  'background-size:100% 100%;' + 
					  'align:center'
		    	}
		    },
//		    {
//		    	xtype 	:'panel',
//		    	margin 	:'5 5 5 5',
//		    	width   :'90%',
//		    	flex  	: 1,
//		    	
//		    	items 	:{
//		    		xtype 	 : 'textareafield',
//		    		id 		 : 'explane',
//		    		name 	 : '설명',
//		    		readOnly : true,
//		    		width 	 : '100%',
//		    		height   : '100%',
//		    		margin   : '5 0 5 0',
//		    	}
//		    },
		],
	}
});