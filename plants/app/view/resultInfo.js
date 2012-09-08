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
		    	width   :'96%',
		    	height  : 230,
		    	layout 	: {type:'vbox',align: 'center'},
		    	items 	:[
		    	    {
		    	    	xtype 	:'container',
		    	    	width 	:'100%',
		    	    	height 	:'100%',
		    	    	left    :0,
		    	    	top     :0,
		    	    	zIndex  :0,
		    	    	margin 	:'25 0 0 0',
		    	    	style 	: "background-image:url('./resources/images/searchBG01.png');" +
		    			   		  'border:0;' +
		    			          'background-color:transparent;' + 
		    			          'background-repeat:no-repeat;' + 
		    			          'background-size:100% 100%;' + 
		    			          'align:center' + 
		    			          'background-color:transparent;',
		    	    },
		    	    {
		    	    	xtype:'panel',
		    	    	width:300,
		    	    	height:240,
		    	    	margin :'10 0 0 0',
		    	    	items:[
							{
								xtype 	:'container',
								layout 	:'fit',
								width 	:260,
								height 	:180,
								zIndex  :1,
								items 	:{
									xtype 	: 'img',
									id 		: 'resultImg',
							   	    width 	: '100%',
							   	    height  : '100%',
							   	    padding : '20 0 0 40',
							   	   	src 	: './resources/images/searchBG01.png',
							    	mode 	: 'none',
								},
								style 	: 'border:none;' +
										  'background-color:transparent;'
				  		   		  		  
							}
		    	    	],
		    	    	style 	: "background-image:url('./resources/images/frame_02.png');" +
				  		   		  'border:0;' +
				  		   		  'background-color:transparent;' + 
				  		   		  'background-repeat:no-repeat;' + 
				  		   		  'background-size:100% 100%;' + 
				  		   		  'align:center'
		    	    	
		    	    }
		    	],  		  
		    },
		],
	}
});