Ext.define('plants.store.noticeStore', {
	extend: 'Ext.data.Store',
	requires: ['plants.model.noticeModel'],
	
	config: {
        autoLoad: true,
        clearOnPageLoad: true,
        
        model: 'plants.model.noticeModel',
        storeId: 'noticeStore',

        sorters: [{
            property: 'number',
            direction: 'DESC'
        }],
        
        proxy: {
            type: 'jsonp',
            url: 'http://14.63.218.122/notice.json.php',
            
//            pageParam: 'page',
//            limitParam: 'rpp',
            
//            extraParams: {
//                q: 'sencha'
//            },
            
            reader: {
                type: 'json',
            }
        }
    }
});