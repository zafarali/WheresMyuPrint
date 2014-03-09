var UPrintSearchApp = angular.module('App', []);

UPrintSearchApp.controller('UPCtrl', function($scope, $http){
	$http.get('/api/printers').success(function(data){
		$scope.printers = data;
	}).error(function(data, status, headers, config){
		console.log("Something broke: "+status);
	});
});