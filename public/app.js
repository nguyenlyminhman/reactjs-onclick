const Title = React.createClass({
    render: () => {
        return (
            <h1> Click Event </h1>
        );
    }
});

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
            <div>
                <Title />
                <button onClick={this.clickAddNum}> Click {this.state.num} </button>
            </div>
        );
    }
});



ReactDOM.render(
    <div>
        <CompoButton />
    </div>,
    document.getElementById("root")
);