Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'plants',
    	
    views: [
         //kongflower
         'Main',
         'plantsMain',
         'searchPlants',
         'detailResult',
         'resultInfo',
         'overlaySelect',
         'plantsTitlebar',
         'selectLeafPart',
         'selectFlowerPart',
         'selectFruitPart',
         //wooram
         'community',
         'communityShow',
         'communityWrite',
         //sungphil
         'favo',
         'favoBookmarkList',
         'favoBookmarkInfo',
         'recentSearchList',
         'recentSearchInfo',
         //myungsung
         'set',
         'setId',
         'setAlram',
         'setHelp',
         'setNotice',
         'setNoticeItem',
         'setInfo'
         /*etc
         'etcMs',
         'etcMyPage',
         'etcTestPage',
         'etcBoardInput'*/
    ],
    
    models:['plantsModel', 'bookmarkModel', 'recentSearchModel', 'communityModel'],
    stores: ['searchData', 'bookmarkData', 'recentSearchData', 'communityStore'],
    controllers: ['searchController', 'myPageController', 'communityController'],

    launch: function() {
    	Ext.fly('appLoadingIndicator').destroy();
        Ext.create('plants.view.Main', {fullscreen: true});
    }

});
