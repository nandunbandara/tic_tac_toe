/**
 * Created by root on 6/28/17.
 */
angular.module('ttt',[
    //firebase
    'firebase',
    'ttt.routes',
    //controllers
    'ttt.homeController',
    'ttt.gameController'
    //services
])

    //firebase configuration
.config([function(){
    var config = {
        apiKey: "AIzaSyBBSEgC5EGzXTOTJMY1wZZguiYCPiQapKg",
        authDomain: "tic-tac-toe-142a6.firebaseapp.com",
        databaseURL: "https://tic-tac-toe-142a6.firebaseio.com",
        projectId: "tic-tac-toe-142a6",
        storageBucket: "tic-tac-toe-142a6.appspot.com",
        messagingSenderId: "249878909577"
    };
    firebase.initializeApp(config);
}])
