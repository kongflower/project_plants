Ext.define('plants.view.MyPage01', {
    extend: 'Ext.Panel',
    xtype: 'mypage01',
    cls: 'myPageBG',
    layout: {
        align: 'center',
        type: 'vbox'
    },
    
    requires: ['Ext.SegmentedButton'],

    config: {     	
        
        items: [
            {
                xtype: 'panel',
                layout: {
                    align: 'center',
                    type: 'vbox'
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
            		align: 'center',
            		type: 'vbox',
            	},
            	items: [
					{
						xtype: 'button',
						//style: 'text-align:center',
						cls: 'buttonTest btnOrange',
						
						//style: 'width: 132px, height: 32px',
						id : 'buttonboardInput',
						//text: '새글쓰기',
						itemId 	: 'boardInput',
						action: 'movePage'
					}
            	]
            }
        ]
    }

});