import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addHobbies } from '../../actions/profile';

const AddHobbies = ({ addHobbies, history }) => {
    const [formData, setFormData] = useState({
        hobbyName: '',
        skillLevel: '',
        genre: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const {
        hobbyName,
        skillLevel,
        genre,
        from,
        to,
        description,
        current
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <h1 className="large text-primary">Add Your Hobbies</h1>
            <p className="lead">
                <i className="fas fa-code-branch" /> Add all of your hobbies here
            </p>
            <small>* = required field</small>
            <form
                className="form"
                onSubmit={e => {
                e.preventDefault();
                addHobbies(formData, history);
                }}
            >
                <div className="form-group">
                <input
                    type="text"
                    placeholder="* Hobby Name"
                    name="hobbyName"
                    value={hobbyName}
                    onChange={onChange}
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="* Skill Level"
                    name="skillLevel"
                    value={skillLevel}
                    onChange={onChange}
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Genre"
                    name="genre"
                    value={genre}
                    onChange={onChange}
                />
                </div>
                <div className="form-group">
                <h4>From Date</h4>
                <input type="date" name="from" value={from} onChange={onChange} />
                </div>
                <div className="form-group">
                <p>
                    <input
                    type="checkbox"
                    name="current"
                    checked={current}
                    value={current}
                    onChange={() => setFormData({ ...formData, current: !current })}
                    />{' '}
                    Current School
                </p>
                </div>
                <div className="form-group">
                <h4>To Date</h4>
                <input
                    type="date"
                    name="to"
                    value={to}
                    onChange={onChange}
                    disabled={current}
                />
                </div>
                <div className="form-group">
                <textarea
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Hobby Description"
                    value={description}
                    onChange={onChange}
                />
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">
                    Go Back
                </Link>
            </form>
        </Fragment>
    );
};

AddHobbies.propTypes = {
    addHobbies: PropTypes.func.isRequired
};

export default connect(null, { addHobbies })(AddHobbies);
