Ext.define('plants.view.plantsMain',{
	extend : 'Ext.Panel',
	xtype: 'plantsMain',
	
	requires: [
       'Ext.Img'
    ],
	
	config : {
		layout: {type:"vbox", align:'stretch'},
		defaults: {flex:1},
		id : 'plantsMain',

		items 	: [
		        {
		        	xtype  	: 'button',
		        	text 	: '식물찾기',
		        	id 		: 'buttonSearch',
		        	itemId 	: 'searchPlants',
		        	action 	: 'movePage',
		        },
		        {
		        	xtype 	: 'button',
		        	id  	: 'buttonGallery',
		        	itemId 	: 'galleryBoard',
		        	text 	: '갤러리',
		        	action 	: 'movePage',
		        },
		        {
					xtype 	: 'button',
					id  	: 'buttonMyPage01',
					itemId 	: 'mypage01',	
					text 	: '마이페이지',
					action 	: 'movePage'
				},
		        {
					xtype 	: 'button',
					id  	: 'buttonSetting',
					itemId 	: 'set',
					text 	: '설정',
					action 	: 'movePage'
				}
		]
	}
});