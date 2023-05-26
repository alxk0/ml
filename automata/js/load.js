$(document).ready(function() {
  var contentIndex = 0;
  var contents = [
    "txt/000.txt",
    "txt/001.txt",
    "txt/002.txt",
    "txt/003.txt",
    "txt/004.txt",
    "txt/005.txt",
    "txt/006.txt",
    "txt/007.txt",
    "txt/008.txt",
    "txt/009.txt",
    "txt/010.txt",
    "txt/011.txt",
    "txt/012.txt",
    "txt/013.txt",
    "txt/014.txt",
    "txt/015.txt",
    "txt/016.txt",
    "txt/017.txt",
    "txt/018.txt",
    "txt/019.txt",
    "txt/020.txt",
    "txt/021.txt",
    "txt/022.txt",
    "txt/023.txt",
    "txt/024.txt",
    "txt/025.txt"
  ];

  // Function to update the content
  function updateContent() {
    var fileName = contents[contentIndex];
    $.ajax({
      url: fileName,
      dataType: "text",
      success: function(data) {
        $('.content00').html(data);
      },
      error: function() {
        $('.content00').html("<p>Error loading content.</p>");
      }
    });
  }

  // Initial content update
  updateContent();

  // "NEXT" link click event handler
  $('#link1').click(function(e) {
    e.preventDefault();
    contentIndex++;
    if (contentIndex >= contents.length) {
      contentIndex = 0;
    }
    updateContent();
  });
});
