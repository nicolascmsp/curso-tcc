class ClienteController {
    constructor() {
        this.usuarios = [
            { nome: 'Robson', cpf: '123.123.123-12' },
            { nome: 'Nick', cpf: '222.333.444-12', dataNasc: '21/07/1994' }
        ];
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(angular.copy(usuario));
        usuario.nome = '';
        usuario.idade = '';
    }

    remover(index) {
        this.usuarios.splice(index, 1);
    }
}

angular.module('app').controller('clienteController', ClienteController);
