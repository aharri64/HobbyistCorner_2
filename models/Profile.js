const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    currentProject: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String
    },
    projects: [
        {
            projectName: {
                type: String,
                required: true
            },
            genre: {
                type: String,
                required: true
            },
            skillLevel: {
                type: String
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            },
            image: {
                type: String
            }
        }
    ],
    hobbies: [
        {
            hobbyName: {
                type: String,
                required: true
            },
            skillLevel: {
                type: String,
                required: true
            },
            genre: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
    });

const Profile = mongoose.model('profile', ProfileSchema);
module.exports = Profile;