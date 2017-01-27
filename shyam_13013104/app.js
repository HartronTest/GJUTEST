'use strict';

import 'angular/angular-csp.css';
import 'angular-ui-select/select.min.css';
import 'angular-material/angular-material.min.css';

import jQuery from 'jquery';
import 'angular';
import 'angular-ui-select/select';
import 'angular-mocks';
import 'angular-cookies';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-jwt';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';

window.$ = jQuery;

angular.element(document).ready(function () {
  // Fixing facebook bug with redirect
  if (window.location.hash === '#_=_') {
    window.location.hash = '#!';
  }

  // Then init the app
  angular.bootstrap(document, ['mean']);
});

function processModules (modules) {
  var packageModules = ['ngCookies', 'ngResource', 'ui.router', 'ui.select', 'ngSanitize', 'ngMaterial'];
  var m;
  var mn;
  for (var index in modules) {
    m = modules[index];
    mn = 'mean.' + m.name;
    angular.module(mn, m.angularDependencies || []);
    packageModules.push(mn);
  }