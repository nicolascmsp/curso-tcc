class UsuarioController {
    constructor($state) {
        this.metodo = 'CADASTRAR';
        if ($state.params.obj) {
            this.metodo = 'ALTERAR';
            this.usuario = JSON.parse($state.params.obj);
        }
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(angular.copy(usuario));
        usuario.nome = '';
        usuario.idade = '';
    }
}

angular.module('app').controller('usuarioController', UsuarioController);
