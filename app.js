const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const errorController = require('./controllers/error');
const expenseRoutes = require('./routes/expenseRoutes');
const path = require('path');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(expenseRoutes);

app.use(errorController.get404);

sequelize.sync()
  .then(result => {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });