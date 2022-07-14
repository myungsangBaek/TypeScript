function logMessage(value: any) {
  console.log(value);
}

logMessage("hello");
logMessage(100);

function logMessage1(value: string | number) {
  console.log(value);
}
logMessage("hello");
logMessage(100);
