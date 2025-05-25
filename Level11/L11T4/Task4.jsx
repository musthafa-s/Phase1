export default function Task4() {
    const fullName = "John Doe";
    const hometown = "New York";
    const upper = fullName.toUpperCase();
    const length = fullName.length;
    const firstName = fullName.split(" ")[0];
    const combined = fullName + " from " + hometown;
  
    console.log("Uppercase:", upper);
    console.log("Length:", length);
    console.log("First Name:", firstName);
    console.log("Combined:", combined);
  
    return <div>Check the console for string manipulations.</div>;
  }