(function () {
  'use strict';

  //Fetch the categories from the restaurant api
  angular.module('MenuApp')
    .service('MenuDataService', MenuDataService)
    .constant('CategoriesPath', "https://davids-restaurant.herokuapp.com/categories.json")
    .constant('ItemPath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");

  MenuDataService.$inject = ['$http', 'CategoriesPath', 'ItemPath'];

  function MenuDataService($http, CategoriesPath, ItemPath) {
    var service = this;

    service.getAllCategories = function () {
      // store the categories returned in this object
      var categories = [];

      return $http({
        method: 'GET',
        url: CategoriesPath
      })
        .then(function success(response) {
          angular.forEach(response.data, function (category) {
            this.push(category);
          }, categories);

          return categories;
        });
    };

    service.getItemsForCategory = function (categoryShortName) {
      //store the items for clicked category in this object
      var categoryItems = [];
      var fullUrl = ItemPath + categoryShortName;
	  
	  // console.log("Searching category - ", categoryShortName, " at ", fullUrl);

      return $http({
        method: 'GET',
        url: fullUrl
      })
        .then(function success(response) {
          angular.forEach(response.data.menu_items, function (item) {
            this.push(item);
          }, categoryItems);
		  
		  /*
		  for (var i=0; i<categoryItems.length; i++) {
			console.log(categoryItems[i].name);			  
		  }
		  */
          
          return categoryItems;
        });
    };
  }

})();
