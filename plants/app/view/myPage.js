Ext.define('plants.view.myPage',{
	extend : 'Ext.Panel',
	xtype: 'myPage',
	
	config : {
		title : 'myPage',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
			{
				xtype: 'button',
				id : 'buttonboardInput',
				itemId 	: 'boardInput',
				text: '새글쓰기',
				action: 'movePage'
			}
		],
		
		html : [ '<h2>myPage</h2>' ].join("")
	}
});