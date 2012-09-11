Ext.define('plants.view.set',{
	extend: 'Ext.Panel',
	xtype: 'set',
	
	config : {
		
				title   : '설정',
		    	xtype   : 'panel',
		    	layout  : {type: 'vbox'},
		    	style 	: "background-color:#000000",
		    	items: [
		    	    {
		    	    	xtype : 'plantsTitlebar',
		    	    	title : '식물찾기',
		    	    	width : '100%',
		    	    	height: 50,
		    	    },
//		    	    {
//		    	    	xtype: 'button',
//		    	    	text: '<font color="#ffffff" size="5em">아이디 설정</font>',
//		    	    	action:'movePage',
//		    	    	itemId:'setId',
//		    	    	flex: 1,
//		    	    	style 	: "background-image:url('./resources/images/bg_intro_small_02.png');" +
//								  'border:1;' +
//								  'background-color:transparent;' + 
//								  'background-repeat:no-repeat;' + 
//								  'background-size:100% 100%;',
//		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '<font color="#ffffff" size="5em">공지사항</font>',
		    	    	action:'movePage',
		    	    	itemId: 'notice',
		    	    	border: '0',
		    	    	flex: 1,
		    	    	style 	: "background:url(resources/images/bg_intro_02.png);background-size:100% 100%;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;"
		    	    },
		    	    {
		    	    	xtype: 'button',
		    	    	text: '<font color="#ffffff" size="5em">프로그램 정보</font>',
		    	    	action:'movePage',
		    	    	itemId: 'setInfo',
		    	    	border: '0',
		    	    	flex: 1,
		    	    	style 	: "background:url(resources/images/bg_intro_01.png);background-size:100% 100%;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;"
		    	    }
		    	]
		    }
		
});