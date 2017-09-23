var app = angular.module('app', ['ui.router']);

function RouteConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/inicio');

    $stateProvider.state('inicio', {
        url: '/inicio',
        templateUrl: 'src/views/inicio.html',
        controller: 'templateController as vm'
    });

    $stateProvider.state('clientes', {
        url: '/cliente',
        templateUrl: 'src/views/clientes.html',
        controller: 'clienteController as vm'
    });
}

app.config(RouteConfig);
