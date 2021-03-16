import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileHobbies = ({
    hobbies: { hobbyName, skillLevel, genre, current, to, from, description }
}) => (
    <div>
        <h3 className="text-dark">{hobbyName}</h3>
        <p>
            {formatDate(from)} - {to ? formatDate(to) : 'Now'}
        </p>
        <p>
            <strong>Skill Level: </strong> {skillLevel}
        </p>
        <p>
            <strong>Genre: </strong> {genre}
        </p>
        <p>
            <strong>Description: </strong> {description}
        </p>
    </div>
);

ProfileHobbies.propTypes = {
    hobbies: PropTypes.object.isRequired
};

export default ProfileHobbies;