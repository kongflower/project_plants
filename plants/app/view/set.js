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
		    	    	itemId:'setId',
		    	    	flex: 1
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '알림설정',
		    	    	action:'movePage',
		    	    	itemId:'setAlram',
		    	    	flex: 1
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '공지사항',
		    	    	action:'movePage',
		    	    	itemId: 'setNotice',
		    	    	flex: 1
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '서비스 도움말',
		    	    	action:'movePage',
		    	    	itemId: 'setHelp',
		    	    	flex: 1
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '프로그램 정보',
		    	    	action:'movePage',
		    	    	itemId: 'setInfo',
		    	    	flex: 1
		    	    }
		    	]
		    }
		
});