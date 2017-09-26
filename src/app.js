var app = angular.module('app', ['ui.router']);

function RouteConfig($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/inicio');

    $stateProvider.state('inicio', {
        url: '/inicio',
        templateUrl: 'src/views/inicio.html',
        controller: 'usuarioController as vm'
    });

    $stateProvider.state('clientes', {
        url: '/cliente',
        templateUrl: 'src/views/clientes.html',
        controller: 'clienteController as vm'
    });

    // Usuarios
    $stateProvider.state('usuarios', {
        url: '/usuarios',
        templateUrl: 'src/views/usuarios.html',
        controller: 'usuariosController as vm'
    });
    $stateProvider.state('usuario-edit', {
        url: '/usuario/:obj',
        templateUrl: 'src/views/usuario.html',
        controller: 'usuarioController as vm'
    });
    $stateProvider.state('usuario-cad', {
        url: '/usuario',
        templateUrl: 'src/views/usuario.html',
        controller: 'usuarioController as vm'
    });
}

app.config(RouteConfig);
