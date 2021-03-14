import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteHobbies } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Hobbies = ({ hobbies, deleteHobbies }) => {
    const hobbies = hobbies.map((exp) => (
        <tr key={exp._id}>
            <td>{exp.skillLevel}</td>
            <td className="hide-sm">{exp.hobbyName}</td>
            <td>
                {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
            </td>
            <td>
                <button
                    onClick={() => deleteHobbies(exp._id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Hobbies</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Skill Level</th>
                        <th className="hide-sm">Hobby Name</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{hobbies}</tbody>
            </table>
        </Fragment>
    );
};

Hobbies.propTypes = {
    hobbies: PropTypes.array.isRequired,
    deleteHobbies: PropTypes.func.isRequired
};

export default connect(null, { deleteHobbies })(Hobbies);