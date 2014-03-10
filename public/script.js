var UPrintSearchApp = angular.module('App', []);
var whereAgain2 = function(loc){
			if(loc == 'Hallway'){
				loc = " in the hallway";
			}else{
				loc = " in room "+loc;
			}
		return loc;
}
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

/*NEEDS WORK*/
UPrintSearchApp.filter('patmatch', function(){
	return function(items, searchText){
		if(typeof(searchText) == "undefined"){ searchText=""; }
		var found =[];
		searchText = String(searchText);
		var queries = searchText.split(" ");
		var re = new RegExp('(?=.*\\b'+queries.join('\\b)(?=.*\\b')+'\\b)', 'i');
		angular.forEach(items, function(item){
			var tital = item.tit.toLowerCase();
				if(re.test(tital)) {
				found.push(item);
				}
		});
		return found;
	};
});