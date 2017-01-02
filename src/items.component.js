(function () {
    'use strict';

    angular.module('MenuApp')
        .component('item', {
            url: 'templates/items-details.template.html',
            bindings: {
                items: '<'
            }
        })
})();

