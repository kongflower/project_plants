Ext.define('plants.model.bookmarkModel', {
   extend: 'Ext.data.Model',
   
   config: {
       fields: [
           {name: 'firstName',  type: 'string'},
           {name: 'lastName',  type: 'string'},           
       ]
   }
});