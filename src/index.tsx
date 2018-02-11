import * as React from "react";
import "./style.css";
const logo = require('./images/react-logo.svg');

interface IProps {
    //Component props
}

interface IState {
    //Component state
}

export default class MyComponent extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        return(
            <div className="my-component">
                <img src={logo} />
                This is my awesome React component. 123
            </div>
        );
    }
}