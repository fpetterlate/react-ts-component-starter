import * as React from "react";
import "./style.css";
const logo = require("./images/react-logo.svg");

// Component props
interface IProps { }

// Component state
interface IState { }

export default class MyComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return(
            <div className="my-component">
                <img className="react-logo" src={logo} />
                This is my awesome React component.
            </div>
        );
    }
}
