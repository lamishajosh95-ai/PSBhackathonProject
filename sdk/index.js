//entry point in server
const express = require('express');
const app = express();
const loginRoutes = require('./routes/loginRoutes');
const registrationRoutes = require('./routes/registrationRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/register', registrationRoutes);
app.use('/pay', paymentRoutes);

app.listen(3000, () => {
  console.log('Bank backend running on port 3000');
});
