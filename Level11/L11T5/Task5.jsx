export default function Task5() {
    const age = 70;
    if (age >= 65) {
      console.log("You are a senior citizen");
    } else if (age >= 18) {
      console.log("You are an adult");
    } else {
      console.log("You are a minor");
    }
  
    return <div>Check the console for age classification.</div>;
  }