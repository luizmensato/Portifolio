import React from 'react';

export default class InformationInfo extends React.Component {
    render() {
        return (
            <>
                <div className='vantagens-info'>
                    <img src={'./img/' + this.props.image} alt={this.props.alt} />
                    <em>{this.props.texto}</em>
                </div>
            </>



        );
    }

}

