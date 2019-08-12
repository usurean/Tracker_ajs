(function () {
    var myApp = angular.module("TrackerApp");
    myApp.controller("TrackerCtrl", TrackerCtrl);


    function TrackerCtrl(AssociateDataSvc) {
        console.log("Inside Tracker controller") ;
        this.showCourse = 0;
        this.editMode = 0;
        var self = this;
        AssociateDataSvc.getAssociates()
        .then(function(data) {
            self.associates = data
        } );
        
        console.log("show Course flag :" + this.showCourse) ;
        console.log("edit course flag :" + this.editMode) ;


        this.selectAssociate = function (index) {
            this.showCourse = 1;
            this.selectedAssociate = this.associates[index];
            this.associateCourses = this.selectedAssociate.courses;
            console.log("Selected Associate " + index +" " + this.showCourse );
            this.successMessage = "";

        };

        this.editCourse = function () {
            console.log("Before edit course " + this.editMode);
            this.editMode = 1;
            console.log("After edit course " + this.editMode);
        };


        this.saveCourse = function () {
            console.log("Before save course " + this.editMode);
            this.editMode = 0;
            console.log("After save course " + this.editMode);
           // this.selectedAssociate.courses = this.associateCourses ; 
            var userData = this.selectedAssociate;
            AssociateDataSvc.saveUser(userData)
            .then(function() {
                self.successMessage = "Update successful";
            }) ;

        }


    }
})();