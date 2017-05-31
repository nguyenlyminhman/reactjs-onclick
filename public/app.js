var CompoButton = React.createClass({
    render: function () {
        return (
            <button> Click me </button>
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
        <CompoButton />
    </div>,
    document.getElementById("root")
);