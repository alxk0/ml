$(document).ready(function() {
  var contentIndex = 0;
  var contents = [
    "- gpt2_gentext_20230509_012814.txt -<p>The United States has seen a steady flow of high-tech investment...</p>",
    '"- next_content_1 -<p>This is the next content 1.</p>"',
    "- next_content_2 -<p>This is the next content 2.</p>",
    "- next_content_3 -<p>This is the next content 3.</p>"
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