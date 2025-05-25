export default function Task3() {
  const num1 = 10;
  const num2 = 5;

  const sum = num1 + num2;
  const diff = num1 - num2;
  const product = num1 * num2;
  const quotient = num1 / num2;
  const remainder = num1 % num2;
  const num3 = num1 ** num2;

  console.log("Sum:", sum);
  console.log("Difference:", diff);
  console.log("Product:", product);
  console.log("Quotient:", quotient);
  console.log("Remainder:", remainder);
  console.log("Exponentiation:", num3);

  return <div>Check the console for arithmetic results.</div>;
}
