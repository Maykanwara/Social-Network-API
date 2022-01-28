const router = require('express').Router();
const apiRouters = require('./api');

router.use('/api', apiRouter);

router.use((req, res) => res.send('Wrong route!!!!'));

module.exports = router;