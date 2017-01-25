var Item = {
    templateUrl: 'views/item.html',
    bindings: {
        id: '='
    },
    controller: function (PostService) {
        var ctrl = this;

        console.log(this.id);

        PostService
            .getPost(this.id)
            .then(function (res) {
                ctrl.data = res.data;
            })
    },
    controllerAs: 'item'
};

angular
    .module('app')
    .component('item', Item);