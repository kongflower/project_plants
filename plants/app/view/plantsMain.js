Ext.define('plants.view.plantsMain',{
	extend : 'Ext.Panel',
	xtype: 'plantsMain',
	
	requires: [
       'Ext.Img'
    ],
	
	config : {
		layout: {type:"vbox", align:"stretch"},
		id : 'plantsMain',

		items: [
			{
				xtype :'plantsTitlebar',
				title : '',
				width : '100%',
				height: 50,
				items : [
		             {
		            	 xtype 	 : 'button',
		            	 align   : 'right',
		            	 itemId  : 'set',
		            	 iconCls : 'settings',
		            	 iconMask: 'true',
		            	 ui      : 'plain',
			   			 action  : 'movePage'
		            }
				]
			},
	        {
	        	xtype  	: 'button',
	        	id 		: 'buttonSearch',
	        	itemId 	: 'searchPlants',
	        	text 	: '<img src="resources/images/btn_find.png" style="width:50%;" />',
	        	border  : "0",
	        	action 	: 'movePage',
	        	flex    : '10',
	        	style 	: "background:url(resources/images/bg_intro_01.png);background-size:100% 100%;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;"
	        },
	        {
	        	xtype 	: 'button',
	        	id  	: 'buttonCommunity',
	        	itemId 	: 'community',
	        	text 	: '<img src="resources/images/btn_community.png" style="width:50%;" />',
	        	border  : "0",
	        	action 	: 'movePage',
	        	flex    : '10',
	        	style 	: "background:url(resources/images/bg_intro_02.png);background-size:100% 100%;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;"
	        },
	        {
				xtype 	: 'button',
				id  	: 'buttonfave',
				itemId 	: 'favo',
				text 	: '',
				border  : "0",
				action 	: 'movePage',
	        	flex    : '1',
	        	style 	: "background:url(resources/images/btn_mypage.png) 5px 5px no-repeat, #25313b;background-size:40%;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;"
			}
		]
	}
});