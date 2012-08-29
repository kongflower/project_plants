Ext.define('plants.view.galleryBoard',{
	extend : 'Ext.Panel',
	xtype: 'galleryBoard',
	
	config : {
		title : 'galleryBoard',
		
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
		
		html : [ '<h2>galleryBoard</h2>' ].join("")
	}
});