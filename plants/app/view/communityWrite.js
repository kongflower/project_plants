Ext.define('plants.view.communityWrite',{
	extend : 'Ext.Panel',
	xtype: 'communityWrite',
	
	config : {
		title: 'communityWrite',
		layout: 'fit',
		
//		scrollable:true,
//		styleHtmlContent:true,
		
		items: [
		    {
				xtype :'plantsTitlebar',
				title : '커뮤니티',
				width : '100%',
				height: 50,
		    },
//		    {
//		    	id: 'content',
//                tpl: [
//                    '<div>',
//                        '<div style="">{subject}</div>',
//                        '<div>{name} {writetime}</div>',
//                    '</div>'
//                ].join('')
//		    }
		]
	}
});