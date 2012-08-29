Ext.define('plants.view.serviceHelp',{
	extend : 'Ext.Panel',
	xtype: 'serviceHelp',
	
	config : {
		title : '서비스도움말',
		
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
		
		html : [ '<h2>서비스도움말</h2>' ].join("")
	}
});