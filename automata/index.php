<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="description" content="AUTOMATA">
	<meta name="keywords" content="Automata, NLP, RNN, GPT-2, ML, AI">
	<meta name="author" content="Alex Kim">
	<title>AUTOMATA</title>
	<link rel="icon" type="image/x-icon" href="/img/favicon.ico">
	<link rel="stylesheet" href="css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script defer src="js/cursor.js"></script>
  <script defer src="js/column.js"></script>
  <script defer src="js/save.js"></script>
  <script defer src="js/load.js"></script>
</head>
<body>
  <div id="circularcursor"></div>
  <div class="a">
      <div class="a1">AUTOMATA</div>
      <div class="a2">PREV &nbsp | RNN &nbsp | &nbsp GPT-2 &nbsp | &nbsp <a href="#" id="link1">NEXT</a></div>
  </div>
  <hr>
  <div class="b">
      <div class="b1">
          <div>00.</div> 
          <div style="text-align: right">MACHINE OUTPUT</div>
      </div>
      <div class="content00" id="left-column">
        <?php
      $filename = 'test.txt';
      if (file_exists($filename)) {
        $content = file_get_contents($filename);
        echo $content;
      } else {
        echo "Failed to load content.";
      }
    ?>        
      </div>
  </div>
  <hr>
  <div class="b">
      <div class="b1">
          <div>01.</div> 
          <div style="text-align: right">HUMAN INTERPOLATION</div>
      </div>
      <div class="content01" id="right-column">
         <!-- human output -->
      </div>
  </div>
  <div class="buttons" style="text-align: right; padding: 20px">
    <button id="save-button" class="button-style">Save</button>
    <button id="download-button" class="button-style">Download</button>
  </div>
</body>
</html>