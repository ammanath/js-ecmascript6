const id = Symbol();

const courseInfo = {
    title: "JavaScript",
    topics: [
        "strings", "arrays", "map"
    ],
    id: "js-course"
};

courseInfo[id] = 2342;

console.log(courseInfo);
