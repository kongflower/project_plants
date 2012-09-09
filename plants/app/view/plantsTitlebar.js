Ext.define("plants.view.plantsTitlebar", {
	extend: 'Ext.TitleBar',
	xtype : 'plantsTitlebar',

    config: {
    	id 		: 'plantsTitlebar',
    	title 	: 'main',
    	docked  : 'top',
    	style 	: "background-image:url('./resources/images/action_bar_v2.png');background-size:100% 100%;border:0;" +
				  "-moz-border-top-left-radius:7px;-webkit-border-top-left-radius:7px;border-top-left-radius:7px;" +
				  "-moz-border-top-right-radius:7px;-webkit-border-top-right-radius:7px;border-top-right-radius:7px;",
        items 	: [
             {
            	 xtype 	: 'button',
	   			 action : 'actionBack',
            	 iconCls : 'arrow_left',
            	 iconMask: 'true',
            	 ui      : 'plain',
//	   			 width 	: '60px',
//	   			 height : '26px',
//	   			 style 	: "background-image:url('./resources/images/btn_back.png');" +
//	   			    	  'border:0;' +
//	   			    	  'background-color:transparent;' + 
//	   			    	  'background-repeat:no-repeat;' + 
//	   			    	  'background-size:100% 100%;',
//	   			 margin : '0 0 0 5',
             }             
        ]
    },
});