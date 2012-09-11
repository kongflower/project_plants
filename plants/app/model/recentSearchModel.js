//Ext.define('plants.model.recentSearchModel', {
//   extend: 'Ext.data.Model',
//   
//   config: {
//       fields: [
//           {name: 'url',  type: 'string'},
//           {name: 'name',  type: 'string'},
//           //{name: 'lastName',  type: 'string'},
//           //{name: 'content',  type: 'string'},
//       ]
//   }
//});

Ext.define('plants.model.recentSearchModel', {
    extend: 'Ext.data.Model',
    config: {
    	fields: [
           {name: 'url',  type: 'string'},
           {name: 'name',  type: 'string'},
           {name: 'date',  type: 'Number'},
           //{name: 'lastName',  type: 'string'},
           //{name: 'content',  type: 'string'},
       ],
        proxy: {
            type: 'localstorage',
            id  : 'recentSearchData'
        }
    }
});