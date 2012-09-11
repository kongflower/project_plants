Ext.define('plants.view.communityShow',{
	extend : 'Ext.Panel',
	xtype: 'communityShow',
	
	requires: [
	    'Ext.Img',
	],
	
	config : {
		title: 'communityShow',
		layout 	: {type:'vbox',align:'center'},
		id: 'communityShow',
		scrollable:true,
		
		items: [
			{
				xtype :'titlebar',
				title : '커뮤니티',
				width : '100%',
				height: 50,
		    	docked  : 'top',
				style 	: "background-image:url('./resources/images/action_bar_v2.png');background-size:100% 100%;border:0;",
				items 	: [
		             {
		            	 xtype 	 : 'button',
			   			 action  : 'actionBack',
		            	 iconCls : 'arrow_left',
		            	 iconMask: 'true',
		            	 ui      : 'plain',
		             },
		             {
		            	 xtype 	 : 'button',
		            	 action  : 'posting',
		            	 iconCls : 'compose',
		            	 iconMask: 'true',
		            	 ui      : 'plain',
		            	 align   : 'right',
		             },
		        ]
			},
			{
		    	xtype 	: 'panel',
		    	width 	: '100%',
		    	height 	: '800px',
		    	layout 	: 'fit',
		    	zIndex  : -1,
		    	items 	: [
		    		{
			    		xtype 	: 'container',
			    		width 	: '100%',
				   	    height  : '100%',
				   	    left    : 0,
		    	    	top     : '-110px',
		    	    	zIndex  : 0,
			        	style 	: "background-image:url('./resources/images/bg_board_view.png');" +
			  			   		  'border:0;' +
						          'background-color:transparent;' + 
						          'background-repeat:no-repeat;' + 
						          'background-size:100% 100%;' + 
						          'align:center'
		    		},
		    		{
		    	    	xtype:'panel',
		    	    	width:320,
		    	    	height:240,
		    	    	margin :'10 0 0 0',
		    	    	layout : {type:'vbox',align:'top'},
//		    	    	
//		    	    	style 	: "background-image:url('./resources/images/frame_02.png');" +
//		  		   		  'border:0;' +
//		  		   		  'background-color:transparent;' + 
//		  		   		  'background-repeat:no-repeat;' + 
//		  		   		  'background-size:100% 100%;' + 
//		  		   		  'align:center',
		  		   		  
		    	    	items:[
							{
								xtype 	: 'container',
								width 	: '100%',
								top     : '50px',
								zIndex  : 1,
								items 	: {
									xtype 	: 'img',
//									id 		: 'favoBookmarkImg',
							   	    width 	: '100%',
							   	    height  : '100%',
							   	   	src 	: './resources/images/frame_board_view.png',
							    	mode 	: 'none',
								},
								style 	: 'border:none;' +
										  'background-color:transparent;'
				  		   		  		  
							},
							{	
								xtype 	: 'label',
//								id 		: 'infoName',
								margin  : '10px 0 0 15px',
								style  	: 'color : #263B49;font-size:140%;',
							    html 	: 'My label!'
							}
		    	    	],
		    	    }
		    	]
		    },
//		    {
//		    	xtype 	:'container',
//		    	width 	:'100%',
//		    	height 	:'71px',
//		    	zIndex  :2,
//		    	margin 	:'8 0 0 0',
//		    	style 	: "background-image:url('./resources/images/frame_board_view.png');" +
//				   		  'border:0;' +
//				          'background-color:transparent;' + 
//				          'background-repeat:no-repeat;' + 
//				          'background-size:100% 100%;' + 
//				          'align:center' + 
//				          'background-color:transparent;',
//		    },
	    ]
	}
});

//http://14.63.218.122/uploadImage/plantsMainPicture.jpg