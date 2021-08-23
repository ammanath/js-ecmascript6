// Async functions return a promise and the resolve value of the promise will be whatever you return from the function

const delay = seconds => new Promise(resolves => setTimeout(resolves, seconds * 1000));


delay(1).then(() => console.log(1));

const countTofive = async () => {
    console.log(0);
    await delay(1);
    console.log(1);
    await delay(2);
    console.log(2);
    await delay(3);
    console.log(3);
    await delay(4);
    console.log(4);
};

countTofive();
