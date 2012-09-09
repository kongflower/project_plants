Ext.define('plants.view.searchPlants',{
	extend 	: 'Ext.Panel',
	xtype 	: 'searchPlants',
	
	requires: ["Ext.Img"],
	
	config : {
		id 			: 'searchPlants',
		title   	: 'searchPlants',
		fullscreen 	: true,
		layout 		: {type:'vbox',align:'middle'},
//		cls 		: 'myPageBG',
		
		items: [
		    {
		    	xtype :'titlebar',
		    	title : '식물검색',
		    	width : '100%',
		    	height: 50,
		    	style 	: "background-image:url('./resources/images/action_bar_v2.png');background-size:100% 100%;border:0;" +
						  "-moz-border-top-left-radius:7px;-webkit-border-top-left-radius:7px;border-top-left-radius:7px;" +
						  "-moz-border-top-right-radius:7px;-webkit-border-top-right-radius:7px;border-top-right-radius:7px;",
		        items 	: [
		             {
		            	 xtype 	 : 'button',
			   			 action  : 'actionBack',
		            	 iconCls : 'arrow_left',
		            	 iconMask: 'true',
		            	 ui      : 'plain',
//		            	 xtype 	: 'button',
//			   			 action : 'actionBack',
//			   			 align 	: 'left',
//			   			 width 	: '60px',
//			   			 height : '26px',
//			   			 style 	: "background-image:url('./resources/images/btn_back.png');" +
//			   			    	  'border:0;' +
//			   			    	  'background-color:transparent;' + 
//			   			    	  'background-repeat:no-repeat;' + 
//			   			    	  'background-size:100% 100%;',
//			   			 margin : '0 0 0 5',
		             },
		             {
		            	 xtype 	 : 'button',
		            	 action  : 'initCondition',
		            	 iconCls : 'refresh',
		            	 iconMask: 'true',
		            	 ui      : 'plain',
//		            	 width 	: '30px',
//		            	 height : '26px',
		            	 align  : 'right',
//		            	 style 	: "background-image:url('./resources/images/btn_reFresh.png');" +
//		            	 'border:0;' +
//		            	 'background-color:transparent;' + 
//		            	 'background-repeat:no-repeat;' + 
//		            	 'background-size:100% 100%;',
		             },
		             
		        ]
		    },
		    {
		    	xtype 	:'panel',
		    	width   :'96%',
		    	flex 	: 4.5,
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
			    		xtype 	:'panel',
				    	layout 	:'fit',
				    	margin 	:'10 5 10 5',
				    	width 	:300,
				    	height 	:300,
				    	zIndex  :1,
				    	items 	:{
				    		xtype 	: 'img',
				    		id 		: 'searchMainImg',
				    		action  : 'tapMainImg',
					    	itemId 	: -1,
					   	    padding : '20 20 30 20',
					   	    width 	: '100%',
					   	    height  : '100%',
					   	   	src 	: './resources/images/noResult.png',
				        	mode 	: 'none',
				        	style 	: "background-image:url('./resources/images/mainImageFrame.png');" +
							  		  'border:0;' +
							  		  'background-color:transparent;' + 
							  		  'background-repeat:no-repeat;' + 
							  		  'background-size:100% 100%;' + 
							  		  'align:center'
							  		  
				    	},
		    	    }
		    	],  		  
		    },
		    {	
		    	xtype 	: 'panel',
		    	layout 	: {type:'hbox', align:'stretch',pack:'center'},
		    	defaults: {width: '60px', height: '51px', margin  : '0 4 10 4'},
		    	width 	: '96%',
		    	flex:1,
		    	style 	: "background-image:url('./resources/images/searchBG02.png');" +
		    			  'border:0;' +
		    			  'background-color:transparent;' + 
		    			  'background-repeat:no-repeat;' + 
		    			  'background-size:100% 100%;' + 
		    			  'align:center' + 
		    			  'background-color:transparent;',
		    	
		    	items:[
		    		{
		   		        xtype 	: 'button',
		    		    id  	: 'buttonFlower',
		    		    action 	: 'showSelect',
		    		    
		    		},
		    		{
		    		    xtype 	: 'button',
		    		    id  	: 'buttonLeaf',
		   			    action 	: 'showSelect',
		   			    
		   		    },
		    	    {
		    			xtype 	: 'button',
		    			id  	: 'buttonFruit',
		    			action 	: 'showSelect',
		    			
		    		},
		    		{
		    			xtype 	: 'button',
		    			id  	: 'buttonGoDetail',
		    			itemId 	: 'detailResult',
		    			action 	: 'movePage',
		    			
		    		},
		        ],
		    },
		    {
		    	 xtype 		: 'panel',
		    	 id 	    : 'searchRerultPanel',
		    	 width 		: '96%',
		    	 layout 	: {type:'hbox', align:'stretch',},
		    	 flex       : 1,
			     defaults 	: {width: '70px', height: '60px',margin  : '0 4 10 4'},
		    	 scrollable : {
		    		 direction: 'horizontal',
		    		 directionLock: true
		    	 },
		    	 margin  :'0 0 5 0',
		    	 style 	: "background-image:url('./resources/images/searchBG03.png');" +
   			   			  'border:0;' +
   			   			  'background-color:transparent;' + 
   			   			  'background-repeat:no-repeat;' + 
   			   			  'background-size:100% 100%;' + 
   			   			  'align:center' + 
   			   			  'background-color:transparent;',
		    	 
		    	 items:[
					{
						xtype 	:'panel',
						layout 	:'fit',
						margin 	:'5 5 5 5',
						style 	: "background-image:url('./resources/images/frame_snall.png');" +
						  'border:0;' +
						  'background-color:transparent;' + 
						  'background-repeat:no-repeat;' + 
						  'background-size:100% 100%;',
						items 	:{
							xtype 	: 'img',
							action 	: 'clickResultImage', 
					    	src 	: './resources/images/noResult.png',
					    	width 	: '100%',
					   	    height 	: '100%',
					    	mode 	: 'none',
					    	padding : '5 5 5 5',
						}
					},
					{
						xtype 	:'panel',
						layout 	:'fit',
						margin 	:'5 5 5 5',
						style 	: "background-image:url('./resources/images/frame_snall.png');" +
						'border:0;' +
						'background-color:transparent;' + 
						'background-repeat:no-repeat;' + 
						'background-size:100% 100%;',
						items 	:{
							xtype 	: 'img',
							action 	: 'clickResultImage', 
							src 	: './resources/images/noResult.png',
							width 	: '100%',
							height 	: '100%',
							mode 	: 'none',
							padding : '5 5 5 5',
						}
					},
					{
						xtype 	:'panel',
						layout 	:'fit',
						margin 	:'5 5 5 5',
						style 	: "background-image:url('./resources/images/frame_snall.png');" +
						'border:0;' +
						'background-color:transparent;' + 
						'background-repeat:no-repeat;' + 
						'background-size:100% 100%;',
						items 	:{
							xtype 	: 'img',
							action 	: 'clickResultImage', 
							src 	: './resources/images/noResult.png',
							width 	: '100%',
							height 	: '100%',
							mode 	: 'none',
							padding : '5 5 5 5',
						}
					},
					{
						xtype 	:'panel',
						layout 	:'fit',
						margin 	:'5 5 5 5',
						style 	: "background-image:url('./resources/images/frame_snall.png');" +
						'border:0;' +
						'background-color:transparent;' + 
						'background-repeat:no-repeat;' + 
						'background-size:100% 100%;',
						items 	:{
							xtype 	: 'img',
							action 	: 'clickResultImage', 
							src 	: './resources/images/noResult.png',
							width 	: '100%',
							height 	: '100%',
							mode 	: 'none',
							padding : '5 5 5 5',
						}
					},
					{
						xtype 	:'panel',
						layout 	:'fit',
						margin 	:'5 5 5 5',
						style 	: "background-image:url('./resources/images/frame_snall.png');" +
						'border:0;' +
						'background-color:transparent;' + 
						'background-repeat:no-repeat;' + 
						'background-size:100% 100%;',
						items 	:{
							xtype 	: 'img',
							action 	: 'clickResultImage', 
							src 	: './resources/images/noResult.png',
							width 	: '100%',
							height 	: '100%',
							mode 	: 'none',
							padding : '5 5 5 5',
						}
					},
					{
						xtype 	:'panel',
						layout 	:'fit',
						margin 	:'5 5 5 5',
						style 	: "background-image:url('./resources/images/frame_snall.png');" +
						'border:0;' +
						'background-color:transparent;' + 
						'background-repeat:no-repeat;' + 
						'background-size:100% 100%;',
						items 	:{
							xtype 	: 'img',
							action 	: 'clickResultImage', 
							src 	: './resources/images/noResult.png',
							width 	: '100%',
							height 	: '100%',
							mode 	: 'none',
							padding : '5 5 5 5',
						}
					},
					{
						xtype 	:'panel',
						layout 	:'fit',
						margin 	:'5 5 5 5',
						style 	: "background-image:url('./resources/images/frame_snall.png');" +
						'border:0;' +
						'background-color:transparent;' + 
						'background-repeat:no-repeat;' + 
						'background-size:100% 100%;',
						items 	:{
							xtype 	: 'img',
							action 	: 'clickResultImage', 
							src 	: './resources/images/noResult.png',
							width 	: '100%',
							height 	: '100%',
							mode 	: 'none',
							padding : '5 5 5 5',
						}
					},
					{
						xtype 	:'panel',
						layout 	:'fit',
						margin 	:'5 5 5 5',
						style 	: "background-image:url('./resources/images/frame_snall.png');" +
						'border:0;' +
						'background-color:transparent;' + 
						'background-repeat:no-repeat;' + 
						'background-size:100% 100%;',
						items 	:{
							xtype 	: 'img',
							action 	: 'clickResultImage', 
							src 	: './resources/images/noResult.png',
							width 	: '100%',
							height 	: '100%',
							mode 	: 'none',
							padding : '5 5 5 5',
						}
					},
					{
						xtype 	:'panel',
						layout 	:'fit',
						margin 	:'5 5 5 5',
						style 	: "background-image:url('./resources/images/frame_snall.png');" +
						'border:0;' +
						'background-color:transparent;' + 
						'background-repeat:no-repeat;' + 
						'background-size:100% 100%;',
						items 	:{
							xtype 	: 'img',
							action 	: 'clickResultImage', 
							src 	: './resources/images/noResult.png',
							width 	: '100%',
							height 	: '100%',
							mode 	: 'none',
							padding : '5 5 5 5',
						}
					},
					{
						xtype 	:'panel',
						layout 	:'fit',
						margin 	:'5 5 5 5',
						style 	: "background-image:url('./resources/images/frame_snall.png');" +
						'border:0;' +
						'background-color:transparent;' + 
						'background-repeat:no-repeat;' + 
						'background-size:100% 100%;',
						items 	:{
							xtype 	: 'img',
							action 	: 'clickResultImage', 
							src 	: './resources/images/noResult.png',
							width 	: '100%',
							height 	: '100%',
							mode 	: 'none',
							padding : '5 5 5 5',
						}
					},
			     ],
		    },
		],
	}
});