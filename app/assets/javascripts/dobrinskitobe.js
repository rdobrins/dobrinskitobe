angular.module('dobrinskiToBe', ['ui.router', 'templates'])

.config([
  '$qProvider',
  '$stateProvider',
  '$urlRouterProvider',
  function ($qProvider, $stateProvider, $urlRouterProvider) {

    $qProvider.errorOnUnhandledRejections(false)

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_index.html',
        controller: 'HomeCtrl',
      })

      .state('events', {
        url: '/events',
        templateUrl: 'home/_events.html',
        controller: 'HomeCtrl',
      })

      .state('photos', {
        url: '/photos',
        templateUrl: 'home/_photos.html',
        controller: 'HomeCtrl',
      })

      .state('registry', {
        url: '/registry',
        templateUrl: 'home/_registry.html',
        controller: 'HomeCtrl',
      })

      .state('travel', {
        url: '/travel',
        templateUrl: 'home/_travel.html',
        controller: 'HomeCtrl',
      })

    $urlRouterProvider.otherwise('home');
  }
])
