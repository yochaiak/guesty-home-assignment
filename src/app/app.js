import angular from 'angular';
import services from './services/services.module.js';
import components from './components/components.module';

import uiRouter from 'angular-ui-router';
import appConfig from './app.config';


require("../public/css/reset.css");

const dependencies = [
    services.name,
    components.name,
    uiRouter
];

angular.module('AirbnbSearchListing', dependencies)
    .config(($stateProvider) => {
        appConfig.states.forEach((state) => $stateProvider.state(state));
    })
    .config(($urlRouterProvider) => {
        $urlRouterProvider.otherwise('/listings');
    })