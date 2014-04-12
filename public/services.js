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

var whereAgain2 = function(loc){
			if(loc == 'Hallway'){
				loc = " in the hallway";
			}else{
				loc = " in room "+loc;
			}
		return loc;
}