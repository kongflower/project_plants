Ext.define('plants.model.bookmarkModel', {
   extend: 'Ext.data.Model',
   
   config: {
       fields: [
           {name: 'thumbs',  type: 'string'},
           {name: 'firstName',  type: 'string'},
           {name: 'lastName',  type: 'string'}, 
           {name: 'content',  type: 'string'},
       ]
   }
});