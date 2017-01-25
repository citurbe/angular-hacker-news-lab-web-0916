function PostController(post) {
    let vm = this;
    vm.data = post.data;
}


angular
    .module('app')
    .controller('PostController', PostController);