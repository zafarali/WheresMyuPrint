var UPrintSearchApp = angular.module('App', []);

UPrintSearchApp.controller('UPCtrl', function($scope, $http){
	$http.get('/api/printers').success(function(data){
		for(var row in data){
		data[row].tit = data[row].building+" building floor "+data[row].floor+" floor "+whereAgain2(data[row].location);
		}
		data.pop();
		$scope.printers = data;
		$scope.whereAgain = function(loc){
			if(loc == 'Hallway'){
				loc = " in the hallway";
			}else{
				loc = " in room "+loc;
			}
		return loc;
		}
		$scope.colorMe = function(booval){
			if(booval){
				return "green";
			}else{
				return "red";
			}
		}
	}).error(function(data, status, headers, config){
		console.log("Something broke: "+status);
	});
});

