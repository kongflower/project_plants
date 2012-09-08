Ext.define('plants.view.recentSearchInfo',{
	extend : 'Ext.Panel',
	xtype: 'recentSearchInfo',
	
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
		    		id 		: 'recentSearchImg',
			    	//itemId 	: 'resultInfo',
			   	    padding : '20 20 30 20',
			   	    width 	: '100%',
			   	    height  : '100%',
			   	   	src 	: './resources/images/lee01.jpeg',
		        	mode 	: 'none',
		        	style 	: "background-image:url('./resources/images/frame_Large.png');" +
					  'border:0;' +
					  'background-color:transparent;' + 
					  'background-repeat:no-repeat;' + 
					  'background-size:100% 100%;' + 
					  'align:center'
		    	}
		    },
		],
	}
});