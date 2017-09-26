class UsuariosController {
    constructor($state) {
        this.$state = $state;
        this.usuarios = [
            { nome: 'Robson', idade: 21 },
            { nome: 'Nick', idade: 23 }
        ];
    }

    remover(index) {
        this.usuarios.splice(index, 1);
    }

    goToEdit(obj) {
        this.$state.go('usuario-edit', {
            obj: JSON.stringify(obj)
        });
    }
}

angular.module('app').controller('usuariosController', UsuariosController);
