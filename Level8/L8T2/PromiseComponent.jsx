const getUserData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const playerData = true; 
  
        if (playerData) {
          resolve([
            { id: 1, name: "Rohit Sharma" },
            { id: 2, name: "MS Dhoni" },
            { id: 3, name: "Virat Kohli" },
          ]);
        } else {
          reject("Failed to fetch user data");
        }
      }, 2000);
    });
  };
  
  getUserData()
    .then((data) => {
      console.log("Received Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  const PromiseComponent = () => {
    return null; 
  };
  
  export default PromiseComponent;
  