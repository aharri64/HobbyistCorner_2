const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const User = require('../../models/User');

//* route:  Get api/users
//? desc:   Test Route
//! access: Public
router.post('/',
    // register requirements
    check('name', 'Name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        // if there are errors, return 400
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // if none these match. it will send this back
        }
        
//# See if user exists
        
        const { name, email, password } = req.body; // deconstruct
        
        try {
            let user = await User.findOne({ email }); //search User DB by email
            
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            } // error if the user exists
            
//# Get users gravatar
            const avatar = normalize(
                gravatar.url(email, {
                    s: '200', //$ size
                    r: 'pg', //$ rating pg
                    d: 'mm' //$ gives a default image
                }),
                { forceHttps: true }
                );
                
                user = new User({
                    name,
                    email,
                    avatar,
                    password
                }); //$ creates a new instance of user.. will not save yet 
                
//# Encrypt password using bcrypt
                const salt = await bcrypt.genSalt(10);
                
                user.password = await bcrypt.hash(password, salt);
                
                await user.save(); // this will save the user in the db with the encoded password
                
//# return jsonwebtoken 
                const payload = {
                    user: {
                        id: user.id //? with mongoose we don't have to use _id
                    }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: '360000' },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;