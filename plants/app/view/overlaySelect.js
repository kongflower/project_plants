Ext.define('plants.view.overlaySelect',{
	extend: 'Ext.Panel',
	xtype: 'overlay',
	
	config : {
		modal : true ,
		centered : true ,
		hidden :true ,
		hideOnMaskTap :true ,
		width : 260 , height : 130 ,
		items :{
			xtype : 'titlebar',
			docked : 'top',
			title : "Overlay"
		} ,
		html : 'shows this Component next to another Cornponen',
		scrollable : true ,
	}
});