/**
 * Created by root on 7/12/17.
 */
angular.module('ttt.gameController',[])

.controller('gameController',['User',function(User){
    const app = this;
    //load user data
    app.uid = User.getUserId();
    app.displayName = User.getDisplayName();
    app.photoURL = User.getPhotoURL();

    app.signout = function(){

    }
}])