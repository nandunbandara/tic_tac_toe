/**
 * Created by root on 7/12/17.
 */
angular.module('ttt.homeController',[])

.controller('homeController',['$firebaseAuth','User','$location', function($firebaseAuth,User,$location){
    const app = this;
    var auth = $firebaseAuth();

    app.login = function(){
        app.error_msg = null;
        //sign in with facebook
        auth.$signInWithPopup("facebook").then(function(user){
            console.log("Signed in as: ", user);
            User.setUser(user);
            app.succes_msg = "Redirecting...";
        //    redirect
            $location.path('/game');
        }).catch(function(error){
            app.error_msg = "Authentication failed!";
        })
    }
}])