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
				title : '식물도감',
				width : '100%',
				height: 50,
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
					    xtype: 'spacer',
					    height: 20
					},
            	    {
            	    	xtype: 'label',
            	        html: '즐겨찾기'
            	    	
            	    },
            	    {
            	    	xtype: 'favoBookmarkList',
            	    	
            	    	width: '90%',
            	    	height: '160px',
            	    	style:{border:1}
            	    },
            	    {
                        xtype: 'spacer',
                        height: 20
                    },
            	    {
            	    	xtype: 'label',
            	        html: '최근찾기'
            	    	
            	    },
            	    {
            	    	xtype: 'recentSearchList',
            	    	width: '90%',
            	    	height: '160px',
            	    }

            	]
            }
        ]
    }
});