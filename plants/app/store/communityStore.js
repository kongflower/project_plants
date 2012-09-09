Ext.define('plants.store.communityStore', {
	extend: 'Ext.data.Store',
	
	requires: ['plants.model.communityModel'],
	
	config: {
        autoLoad: true,
        model: 'plants.model.communityModel',
        storeId: 'communityStore',
        proxy: {
            type: 'jsonp',
            url: 'http://14.63.218.122/gallery.json.php',
            
            reader: {
                type: 'json'
            }
        }
    }
});