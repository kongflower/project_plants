Ext.define('plants.model.recentSearchModel', {
   extend: 'Ext.data.Model',
   
   config: {
       fields: [
           {name: 'thumbs',  type: 'string'},
           {name: 'firstName',  type: 'string'},
           {name: 'lastName',  type: 'string'},           
       ]
   }
});