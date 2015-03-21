/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angular-ui/angular-ui-router.d.ts" />
/// <reference path="app.module.ts" />
/**
 * @ngdoc groups angular module
 * @name Groups_ui
 * @description
 * The main Router file for the groups ui. 
 */

interface Router {
    name?: string;
    template?: any;
    templateUrl?: any;
    templateProvider?: any;
    controller?: any;
    controllerAs?: string;
    controllerProvider?: any;
    resolve?: {};
    url?: string;
    params?: any;
    views?: {};
    abstract?: boolean;
    onEnter?: any;
    onExit?: any;
    data?: any;
    reloadOnSearch?: boolean;
}


interface RouteProvider extends Router {
    when(whenPath: string, handler: Object): RouteProvider;
    otherwise(path: Object): RouteProvider;
}

import app = ngApp.groups.app;

((): void => {

   'use strict';

   app .config(['$routeProvider',
       function($routeProvider: RouteProvider) {
            $routeProvider
            .when('/', {
                templateUrl: '/groups/components/pageOne/dashView.html',
                controller: 'DashController'
            })
            .otherwise({
                redirectTo: '/'
            });
   }]);
})();

