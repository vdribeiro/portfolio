angular.module('app')

.config([
  '$routeProvider',
  function(
    $routeProvider
  ) {

    $routeProvider
    .when("/", {
        templateUrl : "/views/profile.html",
        controller: 'RootController',
    })
    .when("/research", {
        templateUrl : "/views/research.html",
        controller: 'RootController',
    })
    .when("/projects", {
        templateUrl : "/views/projects.html",
        controller: 'RootController',
    })
    .when("/music", {
        templateUrl : "/views/music.html",
        controller: 'RootController',
    })
    .otherwise({
      redirectTo: '/'
    })
  }
])
