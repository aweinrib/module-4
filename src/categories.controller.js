(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['categories'];

    function CategoryController(categories) {

        var categoryList = this;
        categoryList.items = categories;
		
		/*
		for (var i=0; i<categoryList.items.length; i++) {
			console.log(categoryList.items[i]);
		};
		*/
    }
})();

