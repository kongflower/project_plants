Ext.define("plants.view.test", {
    extend: 'Ext.Panel',
    xtype:'test',
    
    requires: [
        
    ],
    
    config: {
    	title: 'test',
    	
        items: [
            {
            	xtype    : 'video',
            	x        : 600,
            	y        : 300,
            	width    : 175,
            	height   : 98,
            	url      : "http://192.168.0.192:9090/plants/resources/images/space.mp4",
            }
        ],
//        html: '<iframe title="YouTube video player" width="480" height="390" src="http://192.168.0.192:9090/plants/resources/images/space.mp4" frameborder="0" allowfullscreen></iframe>'

    }
});