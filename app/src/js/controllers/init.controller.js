(function() {
    'use strict';

    angular
        .module('ppcModule')
        .controller('initController', Controller);

    /* @ngInject */
    function Controller() {
        var vm = this;
        vm.msg = 'Estrutura angularjs simples.';
    }
})();