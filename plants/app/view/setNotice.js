Ext.define('plants.view.setNotice', {
	extend : 'Ext.Panel',
	xtype: 'setNotice',
	
	
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
			    xtype: 'setNoticeItem'
		    }
		]
	}}
);