const fetchData = (callback) => {
    setTimeout(() => {
      const playerData = [
        { id: 1, name: "Rohit Sharma" },
        { id: 2, name: "MS Dhoni" },
        { id: 3, name: "Virat Kohli" },
      ];
  
      callback(playerData); 
    }, 2000);
  };
  
  const handleData = (data) => {
    console.log("Received Data:", data);
  };
  
  fetchData(handleData); 
  
  const Fetched = () => {
    return null; 
  };
  
  export default Fetched;
  