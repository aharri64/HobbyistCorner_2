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



module.exports = router;