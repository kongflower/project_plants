Ext.define('plants.store.searchData', {
    extend: 'Ext.data.Store',
    
    requires: ["Ext.data.proxy.JsonP"],

    config: {
    	autoLoad: true,
    	storeId : 'searchData',
		fields 	: ['name','leaf','family','home','body'],
		   
		proxy: {
			type: 'jsonp',
			url: 'data/phonelist.jsp',
			callbackKey:"serverKey",
			reader: {
				 type:"json",
				 rootProperty:"data"
			}
		},
    }
});