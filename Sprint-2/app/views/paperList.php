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
        <?php $paperArray = explode(",", $_GET['papers']); ?>
            <li> <a href="<?php echo "/paper/".$_GET['artist']."/".$paperArray[$x]."/".$_GET['word']; ?>"> <?php echo $paperArray[$x] ?> </a></li>
        </ol>

        <button id="backtoCloud" onclick="window.location.href='/wordcloud/<?php echo $_GET['keyword'] ?>'"">Back to Cloud</button>
</body>
</html>