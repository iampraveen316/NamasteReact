/*
<div id="Parent">
 <div id="Child">
 <h1 id="abc">i am a h1 tag</h1>
 <h2 id="abc">i am a h2 tag</h1>
 </div>
 <div id="Child1">
 <h1 id="abc">i am a h11 tag</h1>
 <h2 id="abc">i am a h12 tag</h1>
 </div>
</div>

*/


const element = React.createElement("div",{id:"parent"},

    [React.createElement("div",{id:"child"},[React.createElement("h1",{},"i am a h1 tag"),React.createElement("h2",{id:"tag2"},"i am a h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{id:"a2"},"i am a h11 tag"),React.createElement("h2",{id:"dd"},"i am a h12 tag")])]
);
console.log(element);
const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(element);