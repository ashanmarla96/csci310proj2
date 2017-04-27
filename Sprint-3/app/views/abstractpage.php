<!DOCTYPE html>
<html lang = "en">

<head>
	<meta charset="utf-8">
	<title> Abstract </title>
	<link href= "/abstract.css" rel="stylesheet">
</head>

<body>
	<h1> <?php echo $_GET['Title']; ?> </h1>
	<div id="container4">
		<p> <?php echo $_GET['abstract'];?> </p>
	</div>

<button id="backtoList" onclick="window.location.href='/wordsearch/<?php echo $_GET['word']."/".$_GET['artist'] ?>'"">Back to List</button>  
<button id="backtoCloud" onclick="window.location.href='/wordcloud/<?php echo $_GET['artist'] ?>'"">Back to Cloud</button>
</body>
