/**
 * Created by yocha on 3/27/2017.
 */

import MainComponent from './main/main.component';
import ListingItemComponent from './listing-item/listing-item.component'
import ListingDetailsComponent from './listing-details/listing-details.component';

export default angular.module('components', [])
        .component('main', MainComponent)
        .component('listingItem', ListingItemComponent)
        .component('listingDetails', ListingDetailsComponent);