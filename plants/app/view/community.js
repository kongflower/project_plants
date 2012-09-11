Ext.define('plants.view.community',{
	extend : 'Ext.Panel',
	xtype: 'community',
	
    requires: [
//               'Ext.plugin.ListPaging',
//               'Ext.plugin.PullRefresh',
               'Ext.dataview.List',
               'Ext.data.proxy.JsonP',
               'Ext.data.Store'
           ],
           
    config: {
        title: 'community',
        layout: 'fit',
        id: 'community',
        items: [
			{
				xtype : 'titlebar',
				title : '커뮤니티',
				width : '100%',
				height: 50,
		    	docked  : 'top',
				style 	: "background-image:url('./resources/images/action_bar_v2.png');background-size:100% 100%;border:0;",
				items 	: [
		             {
		            	 xtype 	 : 'button',
			   			 action  : 'actionBack',
		            	 iconCls : 'arrow_left',
		            	 iconMask: 'true',
		            	 ui      : 'plain',
		             },
//		             {
//		            	 xtype 	 : 'button',
//		            	 action  : 'posting',
//		            	 iconCls : 'compose',
//		            	 iconMask: 'true',
//		            	 ui      : 'plain',
//		            	 align   : 'right',
//		             },
		             {
		            	 xtype 	 : 'button',
		            	 action  : 'communityRefreshing',
		            	 iconCls : 'refresh',
		            	 iconMask: 'true',
		            	 ui      : 'plain',
		            	 align   : 'right',
		             }
		        ]
			},
            {	
                xtype: 'list',
                id: 'communityList',
                limit: 5,
                disableSelection: true,
                
//                plugins: [
//                    { xclass: 'Ext.plugin.ListPaging' },
//                    { xclass: 'Ext.plugin.PullRefresh' },
//                ],
                
//                emptyText: '<p class="no-searches">등록된 새글이 없습니다.</p>',
                emptyText: '등록된 새글이 없습니다.',    
                itemTpl: [
                   '<div class="headshot" style="background-image:url(http://14.63.218.122/{file_name1});"></div>',
                   '<div class="name">{subject}<span>{name} | {writetime2} | 조회 {count}</span></div>',
                ],
                store: 'communityStore'
            }
        ]
    }
});