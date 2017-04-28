<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset="utf-8">
    <title>Academic Papers</title>
    <link href="/styles.css" / rel="stylesheet">
</head>

<body>
  <div id="listArea">
    <div id="wordpage">
        <h1 id="theWord"><?php echo $_GET['word'] ?></h1>
        <ol id="paperList">
        <?php
          $paperArray = explode(",", $_GET['titles']);
          $urlArray = explode(",", $_GET['urls']);
          $pdfArray = explode(",", $_GET['pdfs']);
          for ($x = 0; $x<count($paperArray); $x++) {
          ?>
            <li> <a href="<?php echo "/abstractpage/".$_GET['word']."/".$_GET['keyword']."/".urlencode($urlArray[$x]); ?>"> <?php echo $paperArray[$x]?> </a> <br> <button onclick="window.location.href='http://dl.acm.org/<?php echo $pdfArray[$x] ?>'"> PDF </button> <button> BibTex </button>  </li>  
          <?php  
          }
          ?>
        </ol>

        <button id="backtoCloud" onclick="window.location.href='/wordcloud/<?php echo $_GET['keyword'] ?>'">Back to Cloud</button>
        <button id="pdfButton" onclick="window.location.href='/paperpdf/<?php echo $_GET['word']?>' " >PDF</button>
        <button id="txtButton" onclick="window.location.href='/papertxt/<?php echo $_GET['word']?>' " >Text</button>
  </div>
</body>
</html>