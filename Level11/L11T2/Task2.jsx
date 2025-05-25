import React, { useEffect } from "react";

export default function Task2() {
  useEffect(() => {
    const str = "Hello";
    const num = 42;
    const bool = true;
    const nul = null;
    let undef;
    const obj = { key: "value" };

    console.log("String:", str, "Type:", typeof str);
    console.log("Number:", num, "Type:", typeof num);
    console.log("Boolean:", bool, "Type:", typeof bool);
    console.log("Null:", nul, "Type:", typeof nul); // returns 'object'
    console.log("Undefined:", undef, "Type:", typeof undef);
    console.log("Object:", obj, "Type:", typeof obj);

    const stringNum = "123";
    const converted = parseInt(stringNum);
    console.log(`Converted '${stringNum}' to number:`, converted);
  }, []);

  return <pre>Check the console for output.</pre>;
}
