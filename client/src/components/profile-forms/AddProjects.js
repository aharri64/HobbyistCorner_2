import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProjects } from '../../actions/profile';

const AddProjects = ({ addProjects, history }) => {
    const [formData, setFormData] = useState({
        genre: '',
        projectName: '',
        skillLevel: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const { genre, projectName, skillLevel, from, to, current, description } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <h1 className="large text-primary">Add A Project</h1>
            <p className="lead">
                <i className="fas fa-code-branch" /> Add all of your favorite projects here
            </p>
            <small>* = required field</small>
            <form
                className="form"
                onSubmit={e => {
                    e.preventDefault();
                    addProjects(formData, history);
                }}
            >
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Project Name"
                        name="projectName"
                        value={projectName}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Genre"
                        name="genre"
                        value={genre}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Skill Level"
                        name="skillLevel"
                        value={skillLevel}
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
                            onChange={() => {
                                setFormData({ ...formData, current: !current });
                            }}
                        />{' '}
                        Current Job
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
                        placeholder="Job Description"
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

AddProjects.propTypes = {
    addProjects: PropTypes.func.isRequired
};

export default connect(null, { addProjects })(AddProjects);