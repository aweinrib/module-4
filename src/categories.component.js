(function () {
    'use strict';

    angular.module('MenuApp')
        .component('category', {
            url: 'templates/categories.template.template.html',
            bindings: {
                categories: '<'
            }
        })
})();
