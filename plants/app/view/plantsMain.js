Ext.define('plants.view.plantsMain',{
	extend : 'Ext.Panel',
	xtype: 'plantsMain',
	
	config : {
		
		items: [
		        {
		        	xtype: 'button',
		        	id : 'buttonSearch',
		        	text: '식물찾기',
		        	value: {xtype: 'searchPlants'},
		        	action: 'movePage'
		        },
		        {
		        	xtype: 'button',
		        	id : 'buttonGallery',
		        	text: '갤러리',
		        	value: {xtype: 'galleryBoard'},
		        	action: 'movePage'
		        },
		        {
		        	xtype: 'button',
		        	id : 'buttonMypage',
		        	text: '마이',
		        	value: {xtype: 'myPage'},
		        	action: 'movePage'
		        }
		]
	}
});