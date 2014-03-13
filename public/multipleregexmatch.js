var matchAnyWord = function(searchText, items, matchThisProperty){
//string to match to the matchThisProerty in the items elements.
var found =[];
		searchText = String(searchText);
		var queries = searchText.split(" ");
		var re = new RegExp('(?=.*\\b'+queries.join('\\b)(?=.*\\b')+'\\b)', 'i');
		for(item in items){
			var title = item.[matchThisProperty].toLowerCase();
				if(re.test(title)) {
				found.push(item);
				}
		}
return found;
}