Ext.define('plants.store.List', {
    extend: 'Ext.data.Store',
    requires: [ ],

    config: {
    	autoLoad: true,
		   fields: ['title','author','content','link'],
		   
		   proxy: {
			   type: 'jsonp',
			   url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
            
			   reader: {
				   type: 'json',
				   rootProperty: 'responseData.feed.entries'
			   }
		  }
    }
});