$(document).ready(function() {
  var contentIndex = 0;
  var contents = [
    "text.txt",
    "text.html"
  ];

  // Function to update the content
  function updateContent() {
    $('.content00').html(contents[contentIndex]);
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