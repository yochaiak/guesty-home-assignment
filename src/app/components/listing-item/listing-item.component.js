import template from "./listing-item.html";
import _ from 'lodash';

require('./listing-item.scss');

export default {
    template: template,
    bindings: {
        listing: '<',
        showMoreInfo: '<'
    },
    controllerAs: "listingItemCtrl"
}