import template from "./main.html";
import _ from 'lodash';

require('./main.scss');

class MainController {
    constructor(AirbnbService) {
        this.list = null;
        this.airBnbService = AirbnbService;

        this.location = 'Paris';
        this.onLocationChanged();
    }

    onLocationChanged() {
        this.airBnbService.getListingByLocation({
            location: this.location
        }).then((list) => {
            this.list = list;
        });
    }
}

export default {
    template: template,
    bindings: {},
    controllerAs: "mainCtrl",
    controller: MainController
}