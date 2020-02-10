const http = require('http');
const dotenv = require("dotenv/config");
const express = require('express')
const app = express() 
const port = process.env.PORT || 3000; 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
});

app.get('/users', (req, res) => {	
  
  res.send(`
    <div>
        <form action="/user" method="post">
            <div>
                <label for="name">Name:</label>
                <input type="text" name="name">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" name="email">
            </div>
            <div>
                <label for="age">Age:</label>
                <input type="number" name="age">
            </div>
            <div>
                <label for="address">Address:</label>
                <input type="text" name="address">
            </div>
            <button>SEND</button>
        </form>
    </div>
	`);
});

app.post('/users', (req, res) => {
	const { name, email, age, address } = req.body;

  res.send(`
      <div>
          <h1>USER INFO:</h1>
          <p>
              Name: ${name}
          </p>
          <p>
              Email: ${email}
          </p>
          <p>
              Age: ${age}
          </p>
          <p>
              Address: ${address}
          </p>
          <p>
              Is Admin: ${!!res.locals.isAdmin}
          </p>
      </div>
  `);
});
 
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});