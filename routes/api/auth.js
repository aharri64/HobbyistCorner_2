const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth'); //? auth middleware
const jwt = require('jsonwebtoken');
const config = require('config'); //? access to config
const { check, validationResult } = require('express-validator');

//* Database
const User = require('../../models/User');

//# route:  Get api/auth/test
//? desc:   Test Route
//! access: Public
router.get('/test', (req, res) => res.send('Auth route'))


//# route:  Get api/auth
//? desc:   Get user by token
//! access: Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');//? -password will leave off pasword in data
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//# route:  POST api/auth
//? desc:   Authenticate user & get token
//! access: Public
router.post('/',
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            if (!user) { //! if there is not a user we want to send an error
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

//# make sure the password matches the saved password through .compare()

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {//! if no pw match we want to send an error
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: '5 days' },
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