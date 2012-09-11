Ext.define('plants.view.set',{
	extend: 'Ext.Panel',
	xtype: 'set',
	
	config : {
		
				title : '설정',
		    	xtype: 'panel',
		    	layout: {type: 'vbox'},
		    	style 	: "background-color:#000000",
		    	items: [
		    	    {
		    	    	xtype :'plantsTitlebar',
		    	    	title : '식물찾기',
		    	    	width : '100%',
		    	    	height: 50,
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '<font color="#ffffff" size="5em">아이디 설정</font>',
		    	    	action:'movePage',
		    	    	itemId:'setId',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/bg_intro_small_02.png');" +
								  'border:1;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '<font color="#ffffff" size="5em">공지사항</font>',
		    	    	action:'movePage',
		    	    	itemId: 'setNotice',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/bg_intro_small_01.png');" +
								  'border:1;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '<font color="#ffffff" size="5em">프로그램 정보</font>',
		    	    	action:'movePage',
		    	    	itemId: 'setInfo',
		    	    	flex: 1,
		    	    	style 	: "background-image:url('./resources/images/bg_intro_small_02.png');" +
								  'border:1;' +
								  'background-color:transparent;' + 
								  'background-repeat:no-repeat;' + 
								  'background-size:100% 100%;',
		    	    }
		    	]
		    }
		
});