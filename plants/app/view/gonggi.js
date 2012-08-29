Ext.define('plants.view.gonggi', {
	extend : 'Ext.Panel',
	xtype: 'gonggi',
	
	
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