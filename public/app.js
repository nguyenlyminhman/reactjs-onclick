var CompoButton = React.createClass({
    clickAddNum() {
        this.state.num = parseInt(this.state.num) + 1
        return this.setState(this.state);
    },
    getInitialState() {
        return { num: 0 };
    },
    render: function () {
        return (
            <button onClick={this.clickAddNum}> Click {this.state.num} </button>
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