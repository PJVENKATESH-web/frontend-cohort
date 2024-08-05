// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     "Welcome to React!"
// );
// 
// parent with 1 child and 2 sub-children
// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement("h1",{},"I'm 1st Child"),
//          React.createElement("h2",{},"I'm 2nd Child")
//         ]
//     )
// );
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I'm 1st Child "),
        React.createElement("h2", {}, "I'm 1st Child")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I'm 2nd Child"),
        React.createElement("h2", {}, "I'm 2nd Child")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
