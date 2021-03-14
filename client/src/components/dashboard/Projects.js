import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProjects } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Projects = ({ project, deleteProjects }) => {
    const projects = project.map((proj) => (
        <tr key={proj._id}>
            <td>{proj.projectName}</td>
            <td className="hide-sm">{proj.genre}</td>
            <td>
                {formatDate(proj.from)} - {proj.to ? formatDate(proj.to) : 'Now'}
            </td>
            <td>
                <button
                    onClick={() => deleteProjects(proj._id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Projects</h2>
            <table className="table">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th className="hide-sm">Genre</th>
                            <th className="hide-sm">Time</th>
                            <th />
                        </tr>
                    </thead>
                <tbody>{projects}</tbody>
            </table>
        </Fragment>
    );
};

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
    deleteProjects: PropTypes.func.isRequired
};

export default connect(null, { deleteProjects })(Projects);
