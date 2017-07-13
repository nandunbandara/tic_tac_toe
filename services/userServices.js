/**
 * Created by root on 7/13/17.
 */
angular.module('ttt.userServices',[])

.factory('User',[function(){
    var fac = {};
    var user;

    fac.setUser = function(data){
        user = data;
    }

    fac.getUser = function(){
        return user;
    }

    return fac;
}])