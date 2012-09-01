Ext.define('plants.view.gallery',{
	extend : 'Ext.Panel',
	xtype: 'gallery',
	
	config : {
		title : 'gallery',
		
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
		
		html : [ '<h2>gallery</h2>' ].join("")
	}
});