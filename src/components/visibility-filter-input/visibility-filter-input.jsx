import React from 'react';
import { connect } from 'react-redux';

import { Form } from 'react-bootstrap';

import { setFilter } from '../../actions/actions';
import { func } from 'prop-types';

function VisibilityFilterInput(props) {
    return <Form.Control
        onChange={e => props.setFilter(e.target.value)}
        value={props.visibilityFilter}
        placeholder="filter"
    />;
}

// const mapDispatchToProps = dispatch => {
//     return { setFilter: () => dispatch(setFilter()) }
// }

export default connect(
    null,
    { setFilter }
)(VisibilityFilterInput);