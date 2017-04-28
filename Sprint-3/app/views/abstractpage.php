<!DOCTYPE html>
<html lang = "en">

<head>
	<meta charset="utf-8">
	<title> Abstract </title>
	<link href= "/abstract.css" rel="stylesheet">
</head>

<body>
	<h1 id = "Title"><?php echo $_GET['title'] ?></h1>
	<h2> 
	<?php
		$authorArray = explode(",", $_GET['authors']);
		for ($x = 0; $x<count($authorArray); $x++) {
		?>
			<a href="<?php echo "/wordcloud/".$authorArray[$x]."/"; ?>"><?php echo $authorArray[$x];?></a>
			<?php
			if ($x != count($authorArray) - 1) {
				echo ', ';
			}
			?>
		<?php
		}
	?>
	</h2>
	<div id="container4">
		<p> <?php echo $_GET['abstract'];?> </p>
	</div>

<button id="backtoList" onclick="window.location.href='/paperlist/<?php echo $_GET['word']."/".$_GET['keyword'] ?>'"">Back to List</button>  
<button id="backtoCloud" onclick="window.location.href='/wordcloud/<?php echo $_GET['keyword'] ?>'"">Back to Cloud</button>
<button id="pdf" onclick="window.location.href='/pdf/<?php echo $_GET['word'] ?>'"">PDF</button>
</body>
