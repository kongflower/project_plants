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
        layout:{
        	type:'vbox',
        },
        items: [
            {
				xtype :'plantsTitlebar',
				title : '식물찾기',
				cls: 'tabBG',
				width : '100%',
				height: 50,
			},	
<<<<<<< HEAD
//            {
//                xtype: 'panel',
//                flex: 1,
//                layout: {
//                    align: 'center',
//                    type: 'hbox'
//                },
//                items: [
//                    {
//                        xtype: 'button',
//                        cls: 'btnMyNews',
//                        //width:30,                        
//                    },
//                    {
//                        xtype: 'button',
//                        cls: 'btnBookmark',
//    		        	id  	: 'btnBookmarkList',
//    		        	itemId 	: 'favoBookmarkList',
//    		        	action 	: 'movePage',
//                        //width:30,                        
//                    },
//                    {
//                        xtype: 'button',
//                        cls: 'btnRecent',
//                        //width:30,                        
//                    }
//                ]
//            },
            
            {            	
                //xtype: 'fieldset',
                //cls: 'myPageBG',
            	xtype: 'panel',  
            	flex: 1,
            	layout: {
            		type: 'vbox',
            		align: 'center'
            	},
=======
            {
                xtype: 'panel',
                layout: {
                    align: 'center',
                    type: 'hbox',
                    
                },
                defaults:{flex:1},
                flex:4,
                items: [
                    {
                    	xtype:'spacer',
                    	flex:3.5,
                    },
                    {
                        xtype: 'button',
                        cls: 'btnMyNews',
                    },
                    {
                        xtype: 'button',
                        cls: 'btnBookmark'
                    },
                    {
                        xtype: 'button',
                        cls: 'btnRecent'
                    },
                    {
                    	xtype:'spacer',
                    	flex:3.5,
                    },
                ]
            },
            
            {
            	xtype: 'panel',
            	flex:4,
            	layout:{type:'vbox'},
>>>>>>> add select flower, fruit
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
<<<<<<< HEAD
            	    	xtype: 'favoBookmarkList',
            	    	
            	    	width: '80%',
            	    	height: '255px',
            	    	style:{border:1}
=======
            	    	xtype: 'tmpList',
            	    	//height: '150px',
            	    	flex: 1
>>>>>>> add select flower, fruit
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
            	    	width: '80%',
            	    	height: '255px',
            	    }
//					{
<<<<<<< HEAD
//						xtype: 'button',
//						cls: 'btnTest btnOrange',
//						text: '테스트 페이지',
//						style: 'width: 132px, height: 32px',
//						id : 'btnTestPage',						
//						itemId 	: 'favoBookmarkList',
//						action: 'movePage'
//					}
=======
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
						//style: 'width: 132px, height: 32px',
						flex:1,
						id : 'btnTestPage',						
						itemId 	: 'tmpList',
						action: 'movePage'
					}
>>>>>>> add select flower, fruit
            	]
            }
        ]
    }
});