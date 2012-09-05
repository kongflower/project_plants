var data = {
	names: [
		{ 
			thumbs : './resources/images/btnFlowers.jpg',
			firstName  : 'first01',
			lastName  : 'last01'
		},
		{ 
			thumbs : './resources/images/btnFlowers.jpg',
			firstName  : 'first02',
			lastName  : 'last02'
		},
		{ 
			thumbs : './resources/images/btnFlowers.jpg',
			firstName  : 'first03',
			lastName  : 'last03'
		},
		{ 
			thumbs : './resources/images/btnFlowers.jpg',
			firstName  : 'first04',
			lastName  : 'last04'
		},
		{ 
			thumbs : './resources/images/btnFlowers.jpg',
			firstName  : 'first05',
			lastName  : 'last01'
		},
		{ 
			thumbs : './resources/images/btnFlowers.jpg',
			firstName  : 'first06',
			lastName  : 'last06'
		},
		{ 
			thumbs : './resources/images/btnFlowers.jpg',
			firstName  : 'first07',
			lastName  : 'last07'
		}						
	]
};


Ext.define('plants.store.recentSearchData', {
    extend: 'Ext.data.Store',

    config: {
    	autoLoad: true,
    	storeId : 'recentSearchData',
    	model: 'plants.model.recentSearchModel',
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