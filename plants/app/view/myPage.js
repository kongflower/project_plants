Ext.define('plants.view.myPage',{
	extend : 'Ext.Panel',
	xtype: 'myPage',
	
	config : {
		title : 'myPage',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [],
		
		html : [ '<h2>myPage</h2>' ].join("")
	}
});