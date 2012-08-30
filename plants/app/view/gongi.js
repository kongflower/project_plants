Ext.define('plants.view.gongi', {
	extend : 'Ext.Panel',
	xtype: 'gongi',
	
	
	config : {
		title : '공지사항',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
		    {
				xtype :'plantsTitlebar',
				title : '식물찾기',
				width : '100%',
				height: 50,
			},
		    {
			    xtype: 'gongisahang'
		    }
		]
	}}
);