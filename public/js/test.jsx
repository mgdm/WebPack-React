import React from 'react';

export default class Test extends React.Component
{
    render = () => {
        return (<div>{this.props.message} people</div>);
    };
}