import { Component, createElement } from "react";

import { HelloWorld } from "./components/HelloWorld";

export class GiftedChartsLineChart extends Component {
    render() {
        return <HelloWorld name={this.props.yourName} style={this.props.style} />;
    }
}
