import _ from 'lodash';

export default class AirbnbService {
    constructor($http, $httpParamSerializer, $sce, $q) {
        this.$http = $http;
        this.$sce = $sce;
        this.$httpParamSerializer = $httpParamSerializer;
        this.$q = $q;
        this._cacheById = null;
    }

    getListingById(id) {
        return this._cacheById[id] // no api for getting specific listing by id, so i'm caching every search, will throw error if accessing directly to the url;
    }

    getListingByLocation(params) {
        let apiUrl = 'https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty'
        let queryString = this.$httpParamSerializer(params);
        let secureUrl = this.$sce.trustAsResourceUrl(apiUrl + '&' + queryString);
        let defer = this.$q.defer();

        this.$http.get(secureUrl).then((response) => {
            this._cacheById = _(response.data.search_results)
                .map((result) => result.listing)
                .groupBy('id')
                .mapValues((result) => result[0])
                .value()

            defer.resolve(response.data.search_results);
        }, (err) => defer.reject(err));

        return defer.promise;
    }

    getReviews(listingId) {
        let apiUrl = 'https://api.airbnb.com/v2/reviews?client_id=3092nxybyb0otqw18e8nh5nty';
        let queryString = this.$httpParamSerializer({
            listing_id: listingId,
            role: 'all'
        });

        let secureUrl = this.$sce.trustAsResourceUrl(apiUrl + '&' + queryString);

        return this.$http.get(secureUrl);
    }
}

AirbnbService.$inject = ['$http', '$httpParamSerializer', '$sce', '$q'];