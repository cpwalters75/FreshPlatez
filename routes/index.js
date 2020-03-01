const router = require('express').Router();
const mailRoutes = require('./mail-routes')

router.use('/api/mail', mailRoutes)

module.exports = router;