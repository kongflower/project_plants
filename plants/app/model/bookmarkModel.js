Ext.define('plants.model.bookmarkModel', {
   extend: 'Ext.data.Model',
   
   config: {
       fields: [
           {name: 'url',  type: 'string'},
           {name: 'name',  type: 'string'},
       ]
   }
});