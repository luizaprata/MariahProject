var vivoApp = angular.module('vivoApp', ['ngRoute', 'ngResource', 'ngCookies']);
vivoApp.run(['$rootScope', '$cookieStore', function ($rootScope, $cookieStore) {

  // $cookieStore.set
  // $cookieStore.get
  // $cookieStore.remove

}]);
vivoApp.config(['$httpProvider', '$routeProvider', '$locationProvider', function ($httpProvider, $routeProvider, $locationProvider) {

  // $locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider
  .when('/', {
    controller: 'HomeCtrl',
    templateUrl: '../assets/views/home.html'
  })
  .when('/language', {
    controller: 'LanguageCtrl',
    templateUrl: '../assets/views/language.html'
  })
  .when('/top-up', {
    controller: 'TopUpCtrl',
    templateUrl: '../assets/views/top-up.html'
  })
  .when('/vivo-tudo', {
    controller: 'VivoTudoCtrl',
    templateUrl: '../assets/views/vivo-tudo.html'
  })
  .when('/vivo-tudo/rules', {
    controller: 'VivoTudoRulesCtrl',
    templateUrl: '../assets/views/vivo-tudo-rules.html'
  })
  .when('/vivo-tudo/faq', {
    controller: 'VivoTudoFaqCtrl',
    templateUrl: '../assets/views/vivo-tudo-faq.html'
  })
  .when('/useful-informations', {
    controller: 'UsefulInformationCtrl',
    templateUrl: '../assets/views/useful-information.html'
  })
  .when('/about-vivo', {
    controller: 'AboutVivoCtrl',
    templateUrl: '../assets/views/about-vivo.html'
  })
  .when('/buy-success', {
    controller: 'BuySuccessCtrl',
    templateUrl: '../assets/views/buy-success.html'
  })
  .when('/buy-error', {
    controller: 'BuyErrorCtrl',
    templateUrl: '../assets/views/buy-error.html'
  });

}]);
vivoApp.controller('AboutVivoCtrl', ['$scope', '$rootScope', 'Faq', function ($scope, $rootScope, Faq) {

}]);
vivoApp.controller('BuyErrorCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

  $rootScope.title = "BuyErrorCtrl";

}]);
vivoApp.controller('BuySuccessCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

  $rootScope.title = "BuySuccessCtrl";

}]);
vivoApp.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

  $rootScope.title = "HomeCtrl";

}]);
vivoApp.controller('LanguageCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

  $rootScope.title = "LanguageCtrl";

}]);
vivoApp.controller('UsefulInformationCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

  $rootScope.title = "UsefulInformationCtrl";

}]);
vivoApp.controller('VivoTudoCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

  $rootScope.vivotudo = "VivoTudoCtrl";

  //

  $scope.vivotudo = "VIVO TUDO - Voz + Internet + SMS asdasdas asas dasdds";

}]);

