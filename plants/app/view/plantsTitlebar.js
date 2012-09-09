Ext.define("plants.view.plantsTitlebar", {
	extend: 'Ext.TitleBar',
	xtype : 'plantsTitlebar',

    config: {
    	title 	: 'main',
    	style 	: "background-image:url('./resources/images/action_bar.png');",
        items 	: [
             {
            	 xtype 	: 'button',
	   			 action : 'actionBack',
	   			 width 	: '60px',
	   			 height : '26px',
	   			 style 	: "background-image:url('./resources/images/btn_back.png');" +
	   			    	  'border:0;' +
	   			    	  'background-color:transparent;' + 
	   			    	  'background-repeat:no-repeat;' + 
	   			    	  'background-size:100% 100%;',
	   			 margin : '0 0 0 5',
             },
             
        ]
    },
});