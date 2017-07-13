/**
 * Created by root on 7/12/17.
 */
angular.module('ttt.gameController',[])

.controller('gameController',['User',function(User){
    const app = this;
    app.user = User.getUser().user;
    console.log(User.getUser());

    app.signout = function(){

    }
}])