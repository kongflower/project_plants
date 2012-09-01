Ext.define('plants.view.favo', {
    extend: 'Ext.Panel',
    xtype: 'favo',
    cls: 'myPageBG',
    
    requires: ['Ext.SegmentedButton'],

    config: {
    	style: 'text-align:center',
    	type: 'vbox',
        items: [
            {
                xtype: 'panel',
				xtype :'plantsTitlebar',
				title : '식물찾기',
				width : '100%',
				height: 50,
			},	
            {
                xtype: 'segmentedbutton',
                layout: {
                    //align: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        cls: 'btnMyNews'
                    },
                    {
                        xtype: 'button',
                        cls: 'btnBookmark'
                    },
                    {
                        xtype: 'button',
                        cls: 'btnRecent'
                    }
                ]
            },
            
            {
            	xtype: 'panel',
            	layout: {
            		type: 'vbox',
            	},
            	items: [
					{
						xtype: 'button',
						//style: 'text-align:center',
						cls: 'btnMyNews'
						
						//style: 'width: 132px, height: 32px',
//						id : 'buttonboardInput',
//						text: '새글쓰기',
//						itemId 	: 'boardInput',
//						action: 'movePage'
					},
					{
						xtype: 'button',
						cls: 'btnMyNews'						
					},
					{
						xtype: 'button',
						cls: 'btnMyNews'						
					}
					//{
					//	xtype: 'button',
					//	text: 'Test',
					//	cls: 'buttonTest btnOrange'
					//}
            	]
            }
        ]
    }

});