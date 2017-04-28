<!DOCTYPE html>
<html lang = "en">
  <meta charset="utf-8">
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <style>
    .search {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .history {
        padding-top: 40px;
        padding-bottom: 40px;
    }
    #progress_bar {
        width: 600px;
    }  
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
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
      <div id = "progress_bar" class="progress progress-striped active">
            <div class="progress-bar"></div>
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

        const EASE = 50;
        var currValue = 0;
        function makeProgress(){
            currValue += (100 - currValue) / EASE;
            $(".progress-bar").css("width", Math.floor(currValue) + "%").text(Math.floor(currValue) + " %");
            setTimeout(makeProgress, 100);
        }

        window.onbeforeunload = function() {
            makeProgress();
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
  </body>
</html>