<!DOCTYPE html>
<html>
  <head>
	<style>
	.search {
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.history {
		padding-top: 40px;
		padding-bottom: 40px;
	}	
	</style>

  </head>

  <body>
	<center>
	  <h1>Word Cloud</h1>
	  <div class = "search">
	  	<input id = "search_bar" type="text" id="search_input" class = "search"> 
	  	<button id = "search_button" type = "button" onclick= makeSearch()>Search! </button>
	  </div>

	  <div class = "history">
	  	<label for = "search_history"> Search History: </label>
	  	<select id = 'dropdown' onchange = change(this)>
	  	  <option value = "" disabled selected>Select a searched keyword </option>
	  	</select>
	  </div>
	</center>

	<script>
		function makeSearch(event) {
			var input = document.getElementById('search_bar').value;
			var cachedHistory;
			if (localStorage.getItem('searchHistory') == undefined) {
				cachedHistory = [];
			}
			else {
				cachedHistory = JSON.parse(localStorage.getItem('searchHistory'));

			}
			cachedHistory.push(input);
			localStorage.setItem('searchHistory', JSON.stringify(cachedHistory));
			window.location.href = '/wordcloud/'+input;
		}

		function change(event) {
  			var elem = event.value;
 			window.location.href = '/wordcloud/'+elem;
		}

		window.onload = function() {
		    var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
		    var dropdown = document.getElementById('dropdown');
		    for (var i = 0; i < searchHistory.length; ++i) {
		        var option = document.createElement('option');
		        option.text = searchHistory[i];
		        option.value = searchHistory[i];
		        dropdown.add(option);
		    }
		}
	</script>

<button onClick="makeSearch">
  </body>

</html>