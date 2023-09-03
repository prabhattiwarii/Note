const jwt = require('jsonwebtoken');
const JWT_SECRET = 'gfg_jwt_secret_key';

const fetchUser = (req, res, next) => {
    // Get the token from the header
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }

    try {
        // Verify and decode the token
        const data = jwt.verify(token, JWT_SECRET);

        // Attach user data to the request object
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ error: "Invalid token" });
    }
};

module.exports = fetchUser;
