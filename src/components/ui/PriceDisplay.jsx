import React from 'react';
import PropTypes from 'prop-types';

class PriceDisplay extends React.Component {
    static propTypes = {
        fish: PropTypes.object.isRequired,
        professionMultiplier: PropTypes.number.isRequired,
    };

    render() {
        const { professionMultiplier, fish: {price} } = this.props;
        const { base, silver, gold } = price;

        return (
            <React.Fragment>
                <div>{Math.floor(base * professionMultiplier)}</div>
                <div style={{color: '#a2c8ef'}}>{Math.floor(silver * professionMultiplier)}</div>
                <div style={{color: '#f4ce50'}}>{Math.floor(gold * professionMultiplier)}</div>
            </React.Fragment>
        )
    }
}

export default PriceDisplay;