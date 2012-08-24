Ext.define('plants.view.plantsMain',{
	extend : 'Ext.Panel',
	xtype: 'plantsMain',
	
	requires: [
       'Ext.Img'
   ],
	
	config : {
		layout: {type:"vbox", align:'stretch'},
		defaults: {flex:1},
<<<<<<< HEAD

		items 	: [
		        {
		        	xtype  	: 'button',
		        	text 	: '식물찾기',
		        	id 		: 'buttonSearch',
		        	itemId 	: 'searchPlants',
		        	action 	: 'movePage',
		        	flex 	: 10,
		        },
		        {
		        	xtype 	: 'button',
		        	id  	: 'buttonGallery',
		        	itemId 	: 'galleryBoard',
		        	text 	: '갤러리',
		        	action 	: 'movePage',
		        	flex 	: 10,
		        },
		        {
					xtype 	: 'button',
					id  	: 'buttonMyPage01',
					itemId 	: 'mypage01',
					//cls: 'btnAction',
					text 	: '마이페이지',
					action 	: 'movePage'
				}
=======
		items: [
	        {
	        	xtype  	: 'button',
	        	id  	: 'buttonSearch',
	        	text 	: '식물찾기',
	        	value 	: {xtype: 'searchPlants'},
	        	action 	: 'movePage',
	        	flex 	: 10,
	        },
	        {
	        	xtype 	: 'button',
	        	id  	: 'buttonGallery',
	        	text 	: '갤러리',
	        	value 	: {xtype: 'galleryBoard'},
	        	action 	: 'movePage',
	        	flex 	: 10,
	        },
	        {

				xtype: 'button',
				id : 'buttonMyPage01',
				//cls: 'btnAction',
				text: '마이페이지',
				value: {xtype: 'mypage01'},
				action: 'movePage'
			}
>>>>>>> Img Button Add
		]
	}
});