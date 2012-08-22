Ext.define('plants.view.testPage',{
	extend : 'Ext.Panel',
	xtype: 'testPage',
	
	config : {
		title : 'testPage',
		
		scrollable:true,
		styleHtmlContent:true,
		
		items: [
			{
			    xtype: 'image',
			    src: '../resources/images/img1.jpeg',
			    width: '100%',
			    height: '100%'
			    //flex: 1
			},
			{
				xtype: 'button',
	        	id : 'buttonShoot',
	        	text: 'Shoot!!',
	        	//value: {xtype: 'galleryBoard'},
	        	//action: 'movePage'
			}
		],
		
		html : [ '<h2>테스트 페이지 입니다.</h2>' ].join("")
	}
});