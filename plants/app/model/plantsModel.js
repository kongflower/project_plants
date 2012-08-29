Ext.define('plants.model.plantsModel', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'name',  type: 'string'},
            {name: 'leaf',  type: 'string'},
            {name: 'family', type: 'string'},
            {name: 'home', type: 'string'},
            {name: 'body', type: 'string'},
            {name: 'url', type: 'string'},            
        ]
    }
});