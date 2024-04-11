const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define('Expense', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});



Expense.updateExpenseById = (id , description, amount) => {
  return Expense.findByPk(id)
    .then(expense => {
      if (!expense) {
        throw new Error('expense not found');
      }

      expense.description = description;
      expense.amount = amount;

      return expense.save();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};



Expense.deleteExpensebyId = (id) => {
  return Expense.findByPk(id)
    .then(expense => {
      console.log("expense" , expense);
      return expense.destroy();
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};

module.exports = Expense;