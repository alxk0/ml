$(document).ready(function() {
  var contentIndex = 0;
  var contents = [
    "text.txt",
    "text.html"
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
