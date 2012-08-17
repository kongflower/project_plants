Ext.define('plants.view.galleryBoard',{
	extend : 'Ext.Panel',
	xtype: 'galleryBoard',
	
	config : {
		title : 'galleryBoard',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [],
		
		html : [ '<h2>galleryBoard</h2>' ].join("")
	}
});