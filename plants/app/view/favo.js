Ext.define('plants.view.favo', {
    extend: 'Ext.Panel',
    xtype: 'favo',
    cls: 'myPageBG',
    
    requires: [
       'Ext.form.FieldSet',
       'Ext.field.Text',
       'Ext.Img',
       'Ext.dataview.List',
       'Ext.data.proxy.JsonP',
       'Ext.data.Store'
    ],

    config: {     	
        
        items: [
            {
                xtype: 'panel',
				xtype :'plantsTitlebar',
				title : '식물찾기',
				cls: 'tabBG',
				width : '100%',
				height: 50,
			},	
            {
                xtype: 'panel',
                layout: {
                    align: 'center',
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
            	
            	items: [
            	    {
            	    	xtype: 'tmpList',
            	    	width: '400px',
            	    	height: '150px',
            	    	//flex: 1
            	    },
//					{
//						xtype: 'fieldset',
//						title: '즐겨찾기',
//						
//						items: [
//						    {
//						    	xtype: 'img',
//						    },
//						    {
//						    	
//						    }
//						]
//					},
					{
						xtype: 'button',
						cls: 'btnTest btnOrange',
						text: '테스트 페이지',
						style: 'width: 132px, height: 32px',
						id : 'btnTestPage',						
						itemId 	: 'tmpList',
						action: 'movePage'
					}
            	]
            }
        ]
    }

});