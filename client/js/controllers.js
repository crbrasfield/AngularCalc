
var controllers = angular.module('myApp.controllers', []);
controllers.controller('WelcomeController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $scope.op1 = null;
    $scope.op2 = null;
    $scope.answer = null;
    $scope.alert = null;

    $scope.add = function() {
        if ($scope.op1 === null) {
            $scope.alert = 'INPUT MISSING';
        } else if ($scope.op2 === null) {
            $scope.alert = 'INPUT MISSING';
        } else {
            $scope.answer = $scope.op1 + ' + ' + $scope.op2 + ' = ' + ($scope.op1 + $scope.op2)
            $scope.op1 = null;
            $scope.op2 = null;
            $scope.alert = null;
        }
    };

    $scope.subtract = function() {
        if ($scope.op1 === null) {
            $scope.alert = 'INPUT MISSING';
        } else if ($scope.op2 === null) {
            $scope.alert = 'INPUT MISSING';
        } else {
            $scope.answer = $scope.op1 + ' - ' + $scope.op2 + ' = ' +  ($scope.op1 - $scope.op2)
            $scope.op1 = null;
            $scope.op2 = null;
            $scope.alert = null;
        }
    };

    $scope.multiply = function() {
        if ($scope.op1 === null) {
            $scope.alert = 'INPUT MISSING';
        } else if ($scope.op2 === null) {
            $scope.alert = 'INPUT MISSING';
        } else {
            $scope.answer = $scope.op1 + ' * ' + $scope.op2 + ' = ' + ($scope.op1 * $scope.op2)
            $scope.op1 = null;
            $scope.op2 = null;
            $scope.alert = null;
        }
    };

    $scope.divide = function() {
        if ($scope.op1 === null) {
            $scope.alert = 'INPUT MISSING';
        } else if ($scope.op2 === null) {
            $scope.alert = 'INPUT MISSING';
        } else if ($scope.op1 === 0) {
            $scope.alert = 'CAN NOT DIVIDE BY ZERO';
        } else {
            $scope.answer = $scope.op1 + ' / ' + $scope.op2 + ' = ' + ($scope.op1 / $scope.op2)
            $scope.op1 = null;
            $scope.op2 = null;
            $scope.alert = null;
        }
    };



}]);
