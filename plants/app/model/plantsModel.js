Ext.define('plants.model.plantsModel', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'name',  type: 'string'},
            {name: 'leaf',  type: 'string'},
            {name: 'color',  type: 'string'},
            {name: 'time',  type: 'string'},            
            {name: 'fruit', type: 'string'},
            {name: 'body', type: 'string'},
            {name: 'url', type: 'string'},            
        ]
    }
});