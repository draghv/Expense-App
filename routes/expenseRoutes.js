const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/expenses', expenseController.getExpenses);
router.get('/add-expense', expenseController.GetaddExpense);
router.post('/add-expense', expenseController.addExpense);
router.get('/edit-expense/:id', expenseController.editExpense);
router.post('/update-expense/:id', expenseController.updateExpense);
router.get('/delete-expense/:id', expenseController.deleteExpense);

module.exports = router;