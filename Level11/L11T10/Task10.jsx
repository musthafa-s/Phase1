const Task10 = () => {
    const firstName = "John";
    const lastName = "Doe";
    const age = 25;
  
    const sentence = `My name is ${firstName} ${lastName} and I am ${age} years old.`;
    const multiLine = `Name: ${firstName}\nAge next year: ${age + 1}`;
    const ageMessage = `${age >= 18 ? "Adult" : "Minor"}`;
  
    return (
      <div>
        <pre>{sentence}</pre>
        <pre>{multiLine}</pre>
        <pre>{ageMessage}</pre>
      </div>
    );
  };
  
  export default Task10;