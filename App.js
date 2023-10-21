const heading=React.createElement("h1",{id:"heading", zyz:"abc"},"Hello world from React");
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const htag=React.createElement("h1",{},"I'm a h1 tag!");
const h2tag=React.createElement("h2",{},"I'm a h2 tag!");
const child=React.createElement("div",{id:"child"},[htag,h2tag]);
const parent=React.createElement("div",{id:"parent"},child);

console.log(parent);

root.render(parent);


