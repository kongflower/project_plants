var data = {
	names: [
		{ 
			thumbs : './resources/images/btnFruits.jpg',
			firstName  : 'first01',
			lastName  : 'last01'
		},
		{ 
			thumbs : './resources/images/btnFruits.jpg',
			firstName  : 'first02',
			lastName  : 'last02'
		},
		{ 
			thumbs : './resources/images/btnFruits.jpg',
			firstName  : 'first03',
			lastName  : 'last03'
		},
		{ 
			thumbs : './resources/images/btnFruits.jpg',
			firstName  : 'first04',
			lastName  : 'last04'
		},
		{ 
			thumbs : './resources/images/btnFruits.jpg',
			firstName  : 'first05',
			lastName  : 'last01'
		},
		{ 
			thumbs : './resources/images/btnFruits.jpg',
			firstName  : 'first06',
			lastName  : 'last06'
		},
		{ 
			thumbs : './resources/images/btnFruits.jpg',
			firstName  : 'first07',
			lastName  : 'last07'
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