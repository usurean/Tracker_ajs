(function () {
    var myApp = angular.module("TrackerApp");
    myApp.service("AssociateDataSvc", function ($http) {
        var self = this;

        self.getAssociates = function () { 

        var promise1 = $http.get('http://localhost:3000/associates') ;
        var promise2 =  promise1.then(function(response) {
            return response.data;
        } );
        return promise2;

        }
        self.saveUser = function (userData) {

            return $http.put("http://localhost:3000/associates/" + userData.id, userData)
            .then(function(response) {
                console.log(response);

            });
        }

    }

    );
})();


