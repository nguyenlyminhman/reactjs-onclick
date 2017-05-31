const compobutton = React.createClass({
    render: () => {
        return (
            <button type="submit" >Click me</button>
        );
    }
});

const Center = React.createClass({
    render: () => {
        return (
            <h1> Strainning List </h1>
        );
    }
});

ReactDOM.render(
    <div>
        <Center />
        <compobutton />
    </div>,
    document.getElementById("root")
);