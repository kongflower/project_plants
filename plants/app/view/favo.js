Ext.define('plants.view.favo', {
    extend: 'Ext.Panel',
    xtype: 'favo',
    cls: 'myPageBG',
    layout: {
        align: 'center',
        type: 'vbox'
    },
    
    requires: [
       'Ext.form.FieldSet',
       'Ext.field.Text',
       'Ext.Img'
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
            	layout: {
            		//align: 'center',
            		type: 'vbox',
            	},
            	items: [
					{
						xtype: 'fieldset',
						title: '최근찾기',
						items: [
						    {
						    	//xtype: 'tmpList',
						    },
						    {
						    	
						    }
						]
					},
					{
						xtype: 'fieldset',
						title: '즐겨찾기',
						items: [
						    {
						    	xtype: 'img',
						    },
						    {
						    	
						    }
						]
					}
            	]
            }
        ]
    }

});