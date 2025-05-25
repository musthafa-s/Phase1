// src/L12T2/writeFile.js
export function writeToFile() {
    const blob = new Blob(["Hello, Node.js!"], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.download = "output.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    return "File written successfully: output.txt";
  }
  