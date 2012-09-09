Ext.define('plants.view.recentSearchInfo',{
	extend : 'Ext.Panel',
	xtype: 'recentSearchInfo',
	
	requires: [
	       'Ext.Img',
	       'Ext.Label',
	       'Ext.field.Text'
	],
	
	config : {	
		layout 	: {type:'vbox',align:'center'},
		
		scrollable:true,
		//styleHtmlContent:true,
		style 	: 'background:#ffffff;',
		
		items: [
		    {
				xtype :'plantsTitlebar',
				title : '<font color="#24303c">상세정보</font>',
				width : '100%',
				height: 50,
			},
		    {
				xtype 	:'panel',
		    	width 	:'96%',
		    	height 	:230,
		    	layout 	: {type:'vbox',align: 'center'},
		    	zIndex  :-1,
		    	items 	:[
		    		{
			    		xtype 	: 'container',
			    		width 	: '100%',
				   	    height  : '100%',
				   	    left    :0,
		    	    	top     :0,
		    	    	zIndex  :0,
		    	    	margin 	:'25 0 0 0',
			        	style 	: "background-image:url('./resources/images/searchBG01.png');" +
			  			   		  'border:0;' +
						          'background-color:transparent;' + 
						          'background-repeat:no-repeat;' + 
						          'background-size:100% 100%;' + 
						          'align:center'
		    		},
		    		{
		    	    	xtype:'panel',
		    	    	width:300,
		    	    	height:240,
		    	    	margin :'10 0 0 0',
		    	    	layout : {type:'vbox',align: 'center'},
		    	    	items:[
							{
								xtype 	:'container',
								layout 	:'fit',
								width 	:265,
								height 	:182,
								zIndex  :1,
								items 	:{
									xtype 	: 'img',
									id 		: 'recentSearchImg',
							   	    width 	: '100%',
							   	    height  : '100%',
							   	    padding : '17 21 0 20',
							   	   	src 	: './resources/images/searchBG01.png',
							    	mode 	: 'none',
								},
								style 	: 'border:none;' +
										  'background-color:transparent;'
				  		   		  		  
							},
							{	
								xtype 	: 'label',
								id 		: 'infoName',
								margin  : '5 0 0 0',
								style  	: 'color : #4b7490; font-weight:bold; font-size:150%;',
							    html 	: 'My label!'
							}
		    	    	],
		    	    	style 	: "background-image:url('./resources/images/frame_02.png');" +
				  		   		  'border:0;' +
				  		   		  'background-color:transparent;' + 
				  		   		  'background-repeat:no-repeat;' + 
				  		   		  'background-size:100% 100%;' + 
				  		   		  'align:center'
		    	    	
		    	    }
		    	]
		    },
		    {
		    	xtype 	:'container',
    	    	width 	:'100%',
    	    	height 	:'71px',
    	    	zIndex  :2,
    	    	margin 	:'8 0 0 0',
    	    	style 	: "background-image:url('./resources/images/title_character.png');" +
    			   		  'border:0;' +
    			          'background-color:transparent;' + 
    			          'background-repeat:no-repeat;' + 
    			          'background-size:100% 100%;' + 
    			          'align:center' + 
    			          'background-color:transparent;',
		    },
		],
	}
});