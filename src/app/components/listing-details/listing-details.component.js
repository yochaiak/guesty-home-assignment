import template from "./listing-details.html";

require('./listing-details.scss');

class ListingDetailsController {
    constructor() {
        console.log(this)
    }

}

export default {
    template: template,
    bindings: {
        listing: '<',
        reviews: '<'
    },
    controllerAs: "listingDetailsCtrl",
    controller: ListingDetailsController
}
