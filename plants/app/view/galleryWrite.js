Ext.define('plants.view.galleryWrite',{
	extend : 'Ext.Panel',
	xtype: 'galleryWrite',
	
	config : {
		title : 'galleryWrite',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
		    {
		    	xtype :'plantsTitlebar',
		    	title : '식물	찾기',
		    	width : '100%',
		    	height: 50,
		    },
		],
		
		html : [ '<h2>galleryWrite</h2>' ].join("")
	}
});