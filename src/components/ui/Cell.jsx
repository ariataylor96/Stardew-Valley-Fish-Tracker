import React from 'react';
import Proptypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';

const Cell = ({right, children, ...props}) => (
    <TableCell align={right ? 'right' : 'inherit'} {...props}>
        {children}
    </TableCell>
);

Cell.propTypes = {
    right: Proptypes.bool,
    children: Proptypes.node.isRequired,
};

Cell.defaultProps = {
    right: false,
};

export default Cell;
