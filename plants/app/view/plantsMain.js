Ext.define('plants.view.plantsMain',{
	extend : 'Ext.Panel',
	xtype: 'plantsMain',
	
	config : {
		layout 	: {type:"vbox", align:'stretch'},
		id 		:'plantsMain',
		defaults: {flex:1},
		items 	: [
		        {
		        	xtype  	: 'button',
		        	text 	: '식물찾기',
		        	id 		: 'buttonSearch',
		        	itemId 	: 'searchPlants',
		        	value 	: {xtype: 'searchPlants'},
		        	action 	: 'movePage',
		        	flex 	: 10,
		        },
		        {
		        	xtype 	: 'button',
		        	id  	: 'buttonGallery',
		        	itemId 	: 'galleryBoard',
		        	text 	: '갤러리',
		        	value 	: {xtype: 'galleryBoard'},
		        	action 	: 'movePage',
		        	flex 	: 10,
		        },
		        {
					xtype 	: 'button',
					id  	: 'buttonMyPage01',
					itemId 	: 'mypage01',
					//cls: 'btnAction',
					text 	: '마이페이지',
					value 	: {xtype: 'mypage01'},
					action 	: 'movePage'
				}
		]
	}
});