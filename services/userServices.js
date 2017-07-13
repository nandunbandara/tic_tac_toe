/**
 * Created by root on 7/13/17.
 */
angular.module('ttt.userServices',[])

.factory('User',['$window',function($window){
    var fac = {};
    var user;

    fac.setUser = function(data){
        if(data) {
            $window.localStorage.setItem('user',data);
            $window.localStorage.setItem('uid',data.user.uid);
            $window.localStorage.setItem('displayName',data.user.displayName);
            $window.localStorage.setItem('photoURL',data.user.photoURL);
        }else{
            $window.localStorage.removeItem('uid');
        }
    }

    fac.getUser = function(){
        console.log($window.localStorage.getItem('user')[0]);
        return $window.localStorage.getItem('user');
    }

    fac.getDisplayName = function(){
        return $window.localStorage.getItem('displayName');
    }

    fac.getPhotoURL = function(){
        return $window.localStorage.getItem('photoURL');
    }

    fac.getUserId = function(){
        return $window.localStorage.getItem('uid');
    }

    //check authentication
    fac.isAuthenticated = function(){
        if($window.localStorage.getItem('uid'))
            return true;
        else return false;
    }

    return fac;
}])