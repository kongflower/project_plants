Ext.define('plants.view.set',{
	extend: 'Ext.Panel',
	xtype: 'set',
	
	config : {
		
				title : '설정',
		    	xtype: 'panel',
		    	layout: {type: 'vbox'},
		    	items: [
		    	    {
		    	    	xtype :'plantsTitlebar',
		    	    	title : '식물찾기',
		    	    	width : '100%',
		    	    	height: 50,
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '아이디설정',
		    	    	action:'movePage',
		    	    	itemId:'idSetting',
		    	    	flex: 1
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '알림설정',
		    	    	action:'movePage',
		    	    	itemId:'alramSetting',
		    	    	flex: 1
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '공지사항',
		    	    	action:'movePage',
		    	    	itemId: 'gonggi',
		    	    	flex: 1
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '서비스 도움말',
		    	    	action:'movePage',
		    	    	itemId: 'serviceHelp',
		    	    	flex: 1
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '프로그램 정보',
		    	    	action:'movePage',
		    	    	itemId: 'programInform',
		    	    	flex: 1
		    	    }
		    	]
		    }
		
});