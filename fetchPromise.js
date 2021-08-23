console.log("In Fetch");
let getSpacePeople = () => fetch("http://api.open-notify.org/astros.json").then(data => data.json());


let spaceNames = () => getSpacePeople().then(json => json.people).then(people => people.map(p => p.name))
.then(names=>names.join(", "));

spaceNames().then(console.log);
