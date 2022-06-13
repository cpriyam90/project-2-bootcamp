const router = require('express').Router();
const userRoutes = require('./user-routes');
const expenseRoutes = require('./expenseRoutes');
const transactionRoutes = require('./transactionRoutes');
const budgetRoutes = require('./budgetRoute');

router.use('/users', userRoutes);
router.use('/expenses', expenseRoutes);

module.exports = router;