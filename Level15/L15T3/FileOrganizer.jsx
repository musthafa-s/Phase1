

export const organizeFiles = () => {
  console.log("🔧 organizeFiles called (this is just a simulation in React)");

  const fakeFiles = ["photo.jpg", "resume.pdf", "video.mp4"];
  const result = fakeFiles.map(file => {
    const ext = file.split('.').pop();
    let category;

    if (["jpg", "jpeg", "png"].includes(ext)) category = "Images";
    else if (["pdf", "docx", "txt"].includes(ext)) category = "Documents";
    else if (["mp4", "avi", "mov"].includes(ext)) category = "Videos";
    else category = "Others";

    return { file, movedTo: category };
  });

  console.table(result);
};
