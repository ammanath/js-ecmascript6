var topic = "Javascript1";

if (topic) {
    let topic = "ECMASCript"; // Using var here will actually update the global variable value as well
    console.log("block", topic);
}
console.log("global", topic);
