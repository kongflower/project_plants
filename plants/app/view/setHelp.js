Ext.define('plants.view.setHelp',{
	extend : 'Ext.Panel',
	xtype: 'setHelp',
	
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