/**
 * Created by root on 7/12/17.
 */
angular.module('ttt.homeController',[])

.controller('homeController',['$firebaseAuth',function($firebaseAuth){
    const app = this;
    const auth = $firebaseAuth();

    this.login = function(){
        this.error_msg = null;
        //sign in with facebook
        auth.signInWithPopup("facebook").then(function(user){
            console.log("Signed in as: ", user.uid);
            this.succes_msg = "Redirecting...";
        }).catch(function(error){
            this.error_msg = "Authentication failed!";
        })
    }
}])