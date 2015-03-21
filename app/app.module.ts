	/// <reference path="../typings/angularjs/angular.d.ts" />
    /// <reference path="../typings/angularjs/angular-route.d.ts" />
/**
 * @ngdoc groups angular module
 * @name Groups_ui
 * @description
 * The main module file for the groups ui. 
 */

module  ngApp {
    export module groups {
         "use strict";

         export var app = angular.module("groupsApp", [
             'ngRoute',
             'ngResource',
             'groupsService',
	     'firebase'
         ]);
    }
}