Ext.define('plants.view.alramSetting',{
	extend : 'Ext.Panel',
	xtype: 'alramSetting',
	
	config : {
		title : '알람설정',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
{
	xtype: 'togglefield',
	name: 'sound',
	label: '소리알림'
},

{
	xtype: 'togglefield',
	name: 'jindong',
	label: '진동알림'
}
		        ],
		
		html : [ '<h2></h2>' ].join("")
	}
});