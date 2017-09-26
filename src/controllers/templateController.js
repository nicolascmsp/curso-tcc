class TemplateController {
    activeMenu(menu) {
        var MENU = ['painelGeral', 'usuarios', 'clientes'];
        var hasMenu = MENU.filter(function(item) {
            return item === menu;
        });
        if (!hasMenu.length) return;

        MENU.map(function(item) {
            if (document.getElementById(item))
                return document.getElementById(item).classList.remove('active');
        });
        document.getElementById(menu).classList.add('active');
    }
}

angular.module('app').controller('templateController', TemplateController);
