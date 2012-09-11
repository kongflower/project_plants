Ext.define('plants.view.setInfo',{
	extend : 'Ext.Panel',
	xtype: 'setInfo',
	
	config : {
		title : '프로그램정보',
		
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
				xtype 	:'container',
    	    	width 	:'100%',
    	    	height 	:'100%',
    	    	left    :0,
    	    	top     :0,
    	    	style 	: "background-image:url('./resources/images/app_info.png');" +
    			   		  'border:0;' +
    			          'background-color:transparent;' + 
    			          'background-repeat:no-repeat;' + 
    			          'background-size:100% 100%;' + 
    			          'align:center' + 
    			          'background-color:transparent;',
			}
		],
	}
});