function TopStoriesController (posts) {

    let vm = this;
    vm.posts = posts.data.slice(0,30);


}

angular
    .module('app')
    .controller('TopStoriesController', TopStoriesController);