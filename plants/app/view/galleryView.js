Ext.define('plants.view.galleryView',{
	extend : 'Ext.Panel',
	xtype: 'galleryView',
	
	config : {
		title : 'galleryview',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
		    {
		    	xtype :'plantsTitlebar',
		    	title : '식물찾기',
		    	width : '100%',
		    	height: 50,
		    },
		],
		
		html : [ '<h2>galleryView</h2>' ].join("")
	}
});