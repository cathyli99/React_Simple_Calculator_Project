import React from 'react';

export default class Buttons extends React.Component{
    render(){
        return (<div className="Buttons">{this.props.children}</div>);
    }
}
