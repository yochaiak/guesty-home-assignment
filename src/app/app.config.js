/**
 * Created by yocha on 4/1/2017.
 */


export default {
    states: [
        {
            name: 'listings',
            component: 'main',
            url: '/listings'
        },
        {
            name: 'details',
            component: 'listingDetails',
            url: '/listings/:id',
            resolve: {
                listing: ['$stateParams', 'AirbnbService', ($stateParams, AirbnbService) => {
                   return AirbnbService.getListingById($stateParams.id);
                }],
                reviews: ['AirbnbService', '$stateParams', '$q', (AirbnbService, $stateParams, $q) => {
                    let deferred = $q.defer();

                    AirbnbService.getReviews($stateParams.id).then(
                        (response) => deferred.resolve(response.data.reviews),
                        (error) => deferred.reject(error)
                    )

                    return deferred.promise;
                }]
            }
        }
    ]
}