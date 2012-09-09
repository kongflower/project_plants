var data = {
	names: [
		{ 
			url : './resources/images/lee01.jpeg',
			name  : '개망초'	
		},
		{ 
			url : './resources/images/lee01.jpeg',
			name  : '민들레'		
		},
		{ 
			url : './resources/images/lee01.jpeg',
			name  : '도라지'
		}					
	]
};


Ext.define('plants.store.bookmarkData', {
    extend: 'Ext.data.Store',

    config: {
    	autoLoad: true,
    	storeId : 'bookmarkData',
    	model: 'plants.model.bookmarkModel',
    	data : data.names,
		   
		proxy: {
			type: 'memory',
			reader: {
				 type: 'json',
				 root: 'names',
			}
		},
    }
});