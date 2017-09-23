class TemplateController {
    constructor() {
        this.titulo = 'Party Token';

        this.usuarios = [
            { nome: 'Robson', idade: 21 },
            { nome: 'Nick', idade: 23 }
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

angular.module('app').controller('templateController', TemplateController);
