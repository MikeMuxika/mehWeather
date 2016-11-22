import React from 'react';

export default class ErrorModal extends React.Component {
    constructor(props) {
        super(props);
    }
    getDefaultProps() {
        return {
            title: 'Error',
            message: 'City not found'
        }
    }
    propTypes: {
        title:    React.PropTypes.string,
        message:  React.PropTypes.string.isRequired
    }
    componentDidMount() {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    };
    render() {
        var {title, message} = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">ok</button>
                </p>
            </div>
        );
    }
}
