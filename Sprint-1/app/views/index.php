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
	  	<button id = "search_button" type = "button" onclick="window.location.href='/wordcloud/'+document.getElementById('search_bar').value">Search! </button>
	  </div>

	  <div class = "history">
	  	<label for = "search_history"> Search History: </label>
	  	<select>
	  	  <option value = "default">Select a searched keyword </option>
	  	</select>
	  </div>
	</center>
  </body>

</html>