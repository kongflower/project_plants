Ext.define('plants.view.communityShow',{
	extend : 'Ext.Panel',
	xtype: 'communityShow',
	
	config : {
		title: 'communityShow',
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
		
		html : [ '<h2>communityShow</h2>' ].join("")
	}
});