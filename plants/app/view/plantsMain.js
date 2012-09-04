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
		        	id 		: 'buttonSearch',
		        	itemId 	: 'searchPlants',
		        	text 	: '식물찾기',
		        	action 	: 'movePage',
		        },
		        {
		        	xtype 	: 'button',
		        	id  	: 'buttonGallery',
		        	itemId 	: 'gallery',
		        	text 	: '갤러리',
		        	action 	: 'movePage',
		        },
		        {
					xtype 	: 'button',
					id  	: 'buttonfave',
					itemId 	: 'favo',	
					text 	: '마이페이지',
					action 	: 'movePage'
				},
		        {
					xtype 	: 'button',
					id  	: 'buttonSet',
					itemId 	: 'set',
					text 	: '설정',
					action 	: 'movePage'
				}
		]
	}
});