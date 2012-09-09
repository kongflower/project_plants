var data = {
	names: [
		{ 
			url : './resources/images/lee01.jpeg',
			name  : 'first01'	
		},
		{ 
			url : './resources/images/lee01.jpeg',
			name  : 'first02'		
		},
		{ 
			url : './resources/images/lee01.jpeg',
			name  : 'first03'
		},
		{ 
			url : './resources/images/lee01.jpeg',
			name  : 'first04'
		},
		{ 
			url : './resources/images/lee01.jpeg',
			name  : 'first05'
		},
		{ 
			url : './resources/images/lee01.jpeg',
			name  : 'first06'
		},
		{ 
			url : './resources/images/lee01.jpeg',
			name  : 'first07'
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