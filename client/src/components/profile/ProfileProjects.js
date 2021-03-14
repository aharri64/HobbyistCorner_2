import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileProjects = ({
    project: { projectName, genre, skillLevel, current, to, from, description }
}) => (
    <div>
        <h3 className="text-dark">{projectName}</h3>
        <p>
            {formatDate(from)} - {to ? formatDate(to) : 'Now'}
        </p>
        <p>
            <strong>Genre: </strong> {genre}
        </p>
        <p>
            <strong>Skill Level: </strong> {skillLevel}
        </p>
        <p>
            <strong>Description: </strong> {description}
        </p>
    </div>
);

ProfileProjects.propTypes = {
    projects: PropTypes.object.isRequired
};

export default ProfileProjects;