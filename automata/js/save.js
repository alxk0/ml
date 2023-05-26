// Select the save and download buttons
const saveButton = document.getElementById('save-button');
const downloadButton = document.getElementById('download-button');

// Add event listeners to the buttons
saveButton.addEventListener('click', saveHighlightedText);
downloadButton.addEventListener('click', downloadHighlightedText);

function saveHighlightedText() {
  // Get all the user-highlighted elements
  const highlightedElements = document.querySelectorAll('.user-highlight');
  
  // Create an array to store the highlighted text
  const highlightedTextArray = [];
  
  // Loop through each highlighted element and add its text content to the array
  highlightedElements.forEach(element => {
    highlightedTextArray.push(element.textContent);
  });
  
  // Save the array of highlighted text to local storage
  localStorage.setItem('highlightedText', JSON.stringify(highlightedTextArray));
  
  // Display a success message
  console.log('Highlighted text saved to local storage.');
}

// Call the function to retrieve and apply the highlighted text on page load
retrieveAndApplyHighlightedText();

function retrieveAndApplyHighlightedText() {
  // Retrieve the stored highlighted text from local storage
  const storedText = localStorage.getItem('highlightedText');
  
  if (storedText) {
    // Parse the stored text back into an array
    const highlightedTextArray = JSON.parse(storedText);
    
    // Get the corresponding user-highlighted elements
    const highlightedElements = document.querySelectorAll('.user-highlight');
    
    // Loop through each highlighted element and reapply the stored text content
    highlightedElements.forEach((element, index) => {
      element.textContent = highlightedTextArray[index];
    });
  }
}




function downloadHighlightedText() {
  // Get all the user-highlighted elements
  const highlightedElements = document.querySelectorAll('.user-highlight');
  
  // Create a variable to store the highlighted text
  let highlightedText = '';
  
  // Loop through each highlighted element and add its text content to the variable
  highlightedElements.forEach(element => {
    highlightedText += element.textContent + '\n';
  });
  
  // Create a new blob with the highlighted text
  const blob = new Blob([highlightedText], {type: 'text/plain'});
  
  // Create a new URL object and set it to the URL of the blob
  const url = URL.createObjectURL(blob);
  
  // Create a new anchor element and set its download and href attributes
  const a = document.createElement('a');
  a.download = 'highlighted-text.txt';
  a.href = url;
  
  // Programmatically click the anchor element to download the file
  a.click();
  
  // Clean up the URL object
  URL.revokeObjectURL(url);
}
