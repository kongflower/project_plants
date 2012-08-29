

Ext.define('plants.view.programInform',{
	extend : 'Ext.Panel',
	xtype: 'programInform',
	
	config : {
		title : '프로그램정보',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [],
		
		html : [ '<h2>프로그램정보</h2>' ].join("")
	}
});