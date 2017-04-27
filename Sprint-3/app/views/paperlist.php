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
          $urlArray = explode(",", $_GET['urls']);
          for ($x = 0; $x<count($paperArray); $x++) {
          ?>
            <li> <a href="<?php echo "/abstractpage/".$_GET['word']."/".$GET_['keyword']."/".$urlArray[$x]; ?>"> <?php echo $paperArray[$x]?> <br> <button> PDF </button> <button> BibTex </button> </li>
          <?php  
          }
          ?>
        </ol>

        <button id="backtoCloud" onclick="window.location.href='/wordcloud/<?php echo $_GET['keyword'] ?>'"">Back to Cloud</button>
</body>
</html>