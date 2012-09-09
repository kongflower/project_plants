//Ext.define('plants.view.plantsMain',{
//	extend : 'Ext.Panel',
//	xtype: 'plantsMain',
//	
//	requires: [
//       'Ext.Img'
//    ],
//	
//	config : {
//		layout: {type:"vbox", align:'stretch'},
//		defaults: {flex:1},
//		id : 'plantsMain',
//
//		items 	: [
//		        {
//		        	xtype  	: 'button',
//		        	id 		: 'buttonSearch',
//		        	itemId 	: 'searchPlants',
//		        	text 	: '식물찾기',
//		        	action 	: 'movePage',
//		        },
//		        {
//		        	xtype 	: 'button',
//		        	id  	: 'buttonGallery',
//		        	itemId 	: 'gallery',
//		        	text 	: '갤러리',
//		        	action 	: 'movePage',
//		        },
//		        {
//					xtype 	: 'button',
//					id  	: 'buttonfave',
//					itemId 	: 'favo',	
//					text 	: '마이페이지',
//					action 	: 'movePage'
//				},
//		        {
//					xtype 	: 'button',
//					id  	: 'buttonSet',
//					itemId 	: 'set',
//					text 	: '설정',
//					action 	: 'movePage'
//		        },
//		]
//	}
//});

Ext.define('plants.view.plantsMain',{
	extend : 'Ext.Panel',
	xtype: 'plantsMain',
	
	requires: [
       'Ext.Img'
    ],
	
	config : {
		layout: {type:"vbox", align:"middle", pack:"end"},
		id : 'plantsMain',

		items: [
			{
				xtype :'plantsTitlebar',
				title : '',
				width : '100%',
				height: 50,
			},
	        {
	        	xtype  	: 'button',
	        	id 		: 'buttonSearch',
	        	itemId 	: 'searchPlants',
	        	text 	: '<img src="./resources/images/btn_find.png" style="width:50%;"/>',
	        	action 	: 'movePage',
	        	width   :  "95%",
	        	flex    : '10',
	        	style 	: "background:url(./resources/images/bg_intro_01.png);margin-top: 5px;border-top:0;" +
	        			  "moz-border-radius:0;-webkit-border-radius:0;border-radius:0;" +
	        			  "moz-border-top-left-radius:5px;-webkit-border-left-top-radius:5px;border-top-left-radius:5px;" +
	        			  "moz-border-top-right-radius:5px;-webkit-border-right-top-radius:5px;border-top-right-radius:5px;"
	        },
	        {
	        	xtype 	: 'button',
	        	id  	: 'buttonCommunity',
	        	itemId 	: 'community',
	        	text 	: '<img src="./resources/images/btn_community.png" style="width:50%;"/>',
	        	action 	: 'movePage',
	        	width   :  "95%",
	        	flex    : '10',
	        	style 	: "background:url(./resources/images/bg_intro_02.png);-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-top:0"
	        },
	        {
				xtype 	: 'button',
				id  	: 'buttonfave',
				itemId 	: 'favo',
				text 	: '<img src="./resources/images/btn_mypage.png" style="width:35%;margin:0 200px 3px 0"/>',
				action 	: 'movePage',
				width   :  "100%",
	        	flex    : '1',
	        	style 	: "background:#25313b;-moz-border-radius: 0;-webkit-border-radius: 0;border-radius: 0;border-top: 0"
			}
		]
	}
});