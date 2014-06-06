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