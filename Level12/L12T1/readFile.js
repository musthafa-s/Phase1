export default function readFile() {
    const filePath = 'sample.txt'; // keep it simple for front-end testing
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        console.log('File content:', data);
      })
      .catch(error => {
        console.error('Error reading file:', error);
      });
  }
  