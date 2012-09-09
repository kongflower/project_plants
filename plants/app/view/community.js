Ext.define('plants.view.community',{
	extend : 'Ext.Panel',
	xtype: 'community',
	
//	requires: [
//		'plants.view.post.show',
//		'plants.view.post.write'
//	],
    requires: [
               'Ext.dataview.List',
               'Ext.data.proxy.JsonP',
               'Ext.data.Store'
           ],
           
    config: {
        title: 'community',
        layout: 'fit',
        items: [
			{
				xtype :'plantsTitlebar',
				title : '커뮤니티',
				width : '100%',
				height: 50,
				items : [
					{
						 xtype 	 : 'button',
						 action  : 'actionBack',
						 iconCls : 'arrow_left',
						 iconMask: 'true',
						 ui      : 'plain',
					}
				]
			},
            {
                xtype: 'list',
                itemTpl: [
                          '<div class="headshot" style="background-image:url(http://14.63.218.122/{file_name1});"></div>',
                          '<div class="name">{name}<span>{subject}</span></div>',
                ],
                store: 'communityStore'
            }
        ]
    }
});