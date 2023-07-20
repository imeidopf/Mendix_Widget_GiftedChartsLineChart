import { Component, createElement } from "react";
import { View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

const defaultStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    }
};

const data=[ {value:50}, {value:80}, {value:90}, {value:70} ];

export class HelloWorld extends Component {
    styles = mergeNativeStyles(defaultStyle, this.props.style);

    render() {
        return (
            <View style={this.styles.container}>
                <LineChart data = {data} />
            </View>
        );
    }
}
