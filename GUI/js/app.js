﻿define(['angularAMD', 'angularMaterial', 'angularRoute'], function (angularAMD) {

    var app = angular.module('sett-site', ['ngMaterial', 'ngRoute']);

    app.controller('side-nav', function ($scope, $mdSidenav) {
        $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
        };
    });

    app.config(function ($routeProvider, $locationProvider, $mdThemingProvider) {

        $routeProvider.when("/", angularAMD.route({
            templateUrl: 'templates/controllers/home.html',
            controller: 'home',
            controllerUrl: 'controllers/home'
        }))
        .when("/blog", angularAMD.route({
            templateUrl: 'templates/controllers/blog.html',
            controller: 'blog',
            controllerUrl: 'controllers/blog'
        }))
        .when("/article/:slug", angularAMD.route({
            templateUrl: 'templates/controllers/article.html',
            controller: 'article',
            controllerUrl: 'controllers/article'
        }));


        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange');

        $locationProvider.html5Mode(true);
    });

    var bootstrappedApp = angularAMD.bootstrap(app);
    bootstrappedApp.apiUrl = 'http://api.getsett.net';

    return bootstrappedApp;
});