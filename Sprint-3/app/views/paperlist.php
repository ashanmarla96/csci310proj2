<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Academic Papers</title>
    <link href="/styles.css" / rel="stylesheet">
</head>

<body>
    <div id="wordpage">
        <h1 id="theWord"><?php echo $_GET['word'] ?></h1>
        <ol id="paperList">
        <?php
          $paperArray = explode(",", $_GET['titles']);
          for ($x = 0; $x<count($paperArray); $x++) {
          ?>
            <li> <?php echo $paperArray[$x]?> <br> <button> PDF </button> <button> BibTex </button> </li>
          <?php  
          }
          ?>
        </ol>

        <button id="backtoCloud" onclick="window.location.href='/wordcloud/<?php echo $_GET['keyword'] ?>'"">Back to Cloud</button>
</body>
</html>