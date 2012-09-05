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
       'Ext.data.Store',
       'Ext.Label'
    ],

    config: {     	
        
        items: [
            {
				xtype :'plantsTitlebar',
				title : '식물찾기',
				cls: 'tabBG',
				width : '100%',
				height: 50,
			},	
            {
                xtype: 'panel',
                flex: 1,
                layout: {
                    align: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        cls: 'btnMyNews',
                        //width:30,                        
                    },
                    {
                        xtype: 'button',
                        cls: 'btnBookmark',
                        //width:30,                        
                    },
                    {
                        xtype: 'button',
                        cls: 'btnRecent',
                        //width:30,                        
                    }
                ]
            },
            
            {            	
                //xtype: 'fieldset',
                //cls: 'myPageBG',
            	xtype: 'panel',  
            	flex: 1,
            	layout: {
            		type: 'vbox',
            		align: 'center'
            	},
            	items: [
            	    {
            	    	xtype: 'label',
            	        html: '즐겨찾기'
            	    	
            	    },
            	    {
            	    	xtype: 'favoBookmarkList',
            	    	width: '400px',
            	    	height: '255px',
            	    },
            	    {
            	    	xtype: 'label',
            	        html: '최근찾기'
            	    	
            	    },
            	    {
            	    	xtype: 'recentSearchList',
            	    	width: '400px',
            	    	height: '255px',
            	    }
//					{
//						xtype: 'button',
//						cls: 'btnTest btnOrange',
//						text: '테스트 페이지',
//						style: 'width: 132px, height: 32px',
//						id : 'btnTestPage',						
//						itemId 	: 'favoBookmarkList',
//						action: 'movePage'
//					}
            	]
            }
        ]
    }
});