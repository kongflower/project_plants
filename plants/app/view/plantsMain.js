Ext.define('plants.view.plantsMain',{
	extend : 'Ext.Panel',
	xtype: 'plantsMain',
	
	config : {
		layout: {type:"vbox", align:'stretch'},
		defaults: {flex:1},
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
		        	xtype 	: 'button',
		        	id  	: 'buttonMypage',
		        	text 	: '마이',
		        	value 	: {xtype: 'myPage'},
		        	action 	: 'movePage',
		        }
		]
	}
});