Ext.define('plants.view.communityWrite',{
	extend : 'Ext.Panel',
	xtype: 'communityWrite',
	
	config : {
		title: 'communityWrite',
		layout: 'vbox',
		
//		scrollable:true,
//		styleHtmlContent:true,
		
		items: [
		    {
				xtype :'plantsTitlebar',
				title : 'community',
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
		],
		
		html : [ '<h2>communityWrite</h2>' ].join("")
	}
});