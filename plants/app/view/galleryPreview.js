Ext.define('plants.view.galleryPreview',{
	extend : 'Ext.Panel',
	xtype: 'galleryPreview',
	
	config : {
		title : 'galleryPreview',
		
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
		
		html : [ '<h2>galleryPreView</h2>' ].join("")
	}
});