const Expense = require('../models/expense');

exports.getExpenses = (req, res, next) => {
    Expense.findAll()
      .then(expenses => {
        res.render('expenses/index', { expenses, pageTitle: 'All Expenses', path: '/expenses' });
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  };
  

exports.GetaddExpense = (req, res, next) => {
    res.render('expenses/add-expense', { pageTitle: 'Add Expense', path: '/add-expense' });
  };
  
  exports.addExpense = (req, res, next) => {
    const { description, amount } = req.body;
  
    Expense.create({ description, amount })
      .then(() => {
        res.redirect('/expenses');
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  };
  
  exports.editExpense = (req, res, next) => {
    const expenseId = req.params.id;
  
    Expense.findByPk(expenseId)
      .then(expense => {
        res.render('expenses/edit', { expense, pageTitle: 'Edit Expense', path: '/expenses' });
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  };


exports.updateExpense = (req, res, next) => {
    const expenseId = req.params.id;
    const { description, amount } = req.body;
  
    Expense.updateExpenseById(expenseId , description, amount )
      .then(() => {
        res.redirect('/expenses');
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  };
  

exports.deleteExpense = (req, res, next) => {
    const expenseId = req.params.id;
    console.log(expenseId , "rtyuio");
    Expense.deleteExpensebyId(expenseId)
      .then(() => {
        res.redirect('/expenses');
      })
      .catch(error => {
        res.status(500).send('Internal Server Error');
      });
  };


  