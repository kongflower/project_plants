Ext.define('plants.view.alramSetting',{
	extend : 'Ext.Panel',
	xtype: 'alramSetting',
	
	config : {
		title : '알람설정',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [],
		
		html : [ '<h2>알림설정</h2>' ].join("")
	}
});