Ext.define('plants.view.galleryPreview',{
	extend : 'Ext.Panel',
	xtype: 'galleryPreview',
	
	config : {
		title : 'galleryPreview',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [],
		
		html : [ '<h2>galleryPreView</h2>' ].join("")
	}
});