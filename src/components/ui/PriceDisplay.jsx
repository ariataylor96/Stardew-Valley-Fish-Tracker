import React from 'react';
import PropTypes from 'prop-types';

class PriceDisplay extends React.Component {
    static propTypes = {
        fish: PropTypes.object.isRequired,
        professionMultiplier: PropTypes.number.isRequired,
    };

    profMult = price => (Math.floor(price * this.props.professionMultiplier));
    
    render() {
        const { fish: {price} } = this.props;
        const { base, silver, gold } = price;
        const { profMult } = this;

        return (
            <React.Fragment>
                <div>{profMult(base)}</div>
                <div style={{color: '#a2c8ef'}}>{profMult(silver)}</div>
                <div style={{color: '#f4ce50'}}>{profMult(gold)}</div>
            </React.Fragment>
        )
    }
}

export default PriceDisplay;
