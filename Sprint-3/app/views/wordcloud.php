<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset="utf-8">
    <title>Word Cloud</title>
    <link href="/styles.css" rel="stylesheet">
    <script src=/wordcloud2.js> </script>
    <script src=/wordcloudpage.js> </script>
    <script>window.list = [<?php $array = explode(",", $_GET['list']); echo "['".$array[0]."',9],"; for ($x = 1; $x < count($array)/4; $x++){ echo "['".$array[$x]."',5],";} for ($x = count($array)/4; $x < count($array)/2; $x++){ echo "['".$array[$x]."',4],";} for ($x = count($array)/2; $x < 3*count($array)/2; $x++){ echo "['".$array[$x]."',3],";} for ($x = 3*count($array)/2; $x < count($array); $x++){ echo "['".$array[$x]."',2],";} ?>] </script>

</head>

<body>

    <div id="wordcloudImage">
      <h1> <?php echo $_GET['keyword'] ?> </h1>
      <div class="span12" id="canvas-container">
        <canvas id="canvas" class="canvas" width="2340" height="1520" style="width: 1170px; height: 760px"></canvas>
        <div id='box' hidden /></div>
      </div>
      <div class="cloudSearchArea">
        <input type="search" id="searchBar2" placeholder="Search Keyword or Author">
        <button id="searchButton2" onclick="window.location.href='/wordcloud/'+document.getElementById('searchBar2').value">Search</button>
        <button id="saveImage" onclick=save()>Save</button>
      </div>

    </div>

  <script>
    function save() {
      var canvas = document.getElementById("canvas");
      document.write("<img src='"+canvas.toDataURL("image/png")+"' alt='from canvas'/>");
    }
  </script>
</body>



</html>