Ext.define('plants.view.idSetting',{
	extend : 'Ext.Panel',
	xtype: 'idSetting',
	
	config : {
		title : '아이디설정',
		
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
		
		html : [ '<h2>id설정</h2>' ].join("")
	}
});