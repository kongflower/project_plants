Ext.define('plants.view.resultInfo',{
	extend : 'Ext.Panel',
	xtype: 'resultInfo',
	
	config : {
		title : 'resultInfo',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [],
		
		html : [ '<h2>resultInfo</h2>' ].join("")
	}
});