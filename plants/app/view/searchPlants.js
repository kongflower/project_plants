Ext.define('plants.view.searchPlants',{
	extend : 'Ext.Panel',
	xtype: 'searchPlants',
	id: 'searchPlants',
	
	config : {
		title : 'searchPlants',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
		    {
		    	xtype: 'button',
		    	id : 'buttonGoDetail',
		    	text: 'Detail',
		    	value: {xtype: 'detailResult'},
		    	action: 'movePage'
		    },
		    {
		    	xtype: 'button',
		    	id : 'buttonGoInfo',
		    	text: 'info',
		    	value: {xtype: 'resultInfo'},
		    	action: 'movePage'
		    },
		],
		
		html : [ '<h2>searchPlants</h2>' ].join("")
	}
});