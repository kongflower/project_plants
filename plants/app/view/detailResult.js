Ext.define('plants.view.detailResult',{
	extend : 'Ext.Panel',
	xtype: 'detailResult',
	
	config : {
		title : 'detailResult',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
		    {
		    	xtype : 'list', 	
		    }
		],
		
		html : [ '<h2>detailResult</h2>' ].join("")
	}
});