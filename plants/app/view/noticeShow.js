Ext.define('plants.view.noticeShow',{
	extend : 'Ext.Panel',
	xtype: 'noticeShow',
	
	requires: [
	    'Ext.Img',
	],
	
	config : {
		title: 'noticeShow',
		layout 	: {type:'vbox',align:'center'},
		id: 'noticeShow',
		scrollable:true,
		
		items: [
			{
				xtype :'titlebar',
				title : '공지사항',
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
//		             {
//		            	 xtype 	 : 'button',
//		            	 action  : 'noticing',
//		            	 iconCls : 'compose',
//		            	 iconMask: 'true',
//		            	 ui      : 'plain',
//		            	 align   : 'right',
//		             },
		             
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
		    	    	margin :'60 0 0 0',
		    	    	style   : 'background:url(./resources/images/frame_board_view.png);' +
						          'background-color:transparent;' + 
						          'background-repeat:no-repeat;' + 
						          'background-size:100% 100%;' + 
						          'align:center',
		    	    	layout : {type:'vbox',align:'top'},
		  		   		  
		    	    	items:[
							{	
								xtype 	: 'label',
								id 		: 'noticeSubject',
								margin  : '-40px 0 0 15px',
								style  	: 'color:#263B49;font-size:140%;',
							    html 	: 'My label!'
							},
							{
								xtype 	: 'container',
								width 	: '300',
								top     : '21px',
								left    : '40px',
								zIndex  : 1,
								
								items 	: [							
								{
									xtype 	: 'img',
									id 		: 'noticeImg',
									zIndex  : 2,
									src     : '',
							   	    width 	: '238px',
							   	    height  : '190px',
							    	mode 	: 'none',
								}
								],
								style 	: 'border:1px solid #aaa;' +
										  'background-color:transparent;'
							},
							{	
								xtype 	: 'label',
								id 		: 'noticeMemo',
								style  	: 'color:#263B49;font-size:100%;',
								top 	: 245,
								left    : 25,
							    html 	: '본문',
							    style   : 'margin-right: 25px;'
							},

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