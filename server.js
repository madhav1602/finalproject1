const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'finalproject',
});

// const db = mysql.createConnection({
//   host: 'bfd2jtxjwr2tlwyhrcir-mysql.services.clever-cloud.com',
//   user: 'udngt2m98aqbmwjy',
//   password: 'KJnHTrUKY8PyRZVIwDJO',
//   database: 'bfd2jtxjwr2tlwyhrcir',
// });


db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});
app.get('/', (req, res) => {
    res.render('index');
});

  app.use(bodyParser.json());  

app.post('/login', (req, res) => {
  const { email, pass } = req.body;
  const query = 'SELECT * FROM user WHERE email = ? AND pass = ?';
  
  db.query(query, [email, pass], (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (result.length > 0) {
      
      res.status(200).json({ success: true, message: 'Login successful' });
    } else { 
      
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

app.post('/register', (req, res) => {
  const { name, email, phonenumber, password, dob, gender } = req.body;

  const query = 'INSERT INTO user (name, email, phonenumber, pass, dob, gender) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, email, phonenumber, password, dob, gender], (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }

    
    res.status(200).json({ success: true, message: 'User registered successfully' });
  });
});


app.post('/submit-contact', (req, res) => {
  const { name, email, subject, query } = req.body;

  
  const insertQuery = 'INSERT INTO ContactUs (name, email, subject, query, date) VALUES (?, ?, ?, ?, NOW())';
  db.query(insertQuery, [name, email, subject, query], (err, result) => {
    if (err) {
      console.error('Error inserting data into ContactUs table:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      console.log('Form data inserted successfully');
      res.json({ success: true, message: 'Form submitted successfully' });
    }
  });
});

app.use(bodyParser.json());


app.post('/create-author', (req, res) => {
  const { aname, email, password, dob, dor, phonenumber, gender, photourl } = req.body;

 
  const query = 'INSERT INTO author (aname, email, password, dob, dor, phonenumber, gender, photourl) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [aname, email, password, dob, dor, phonenumber, gender, photourl], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }

    return res.status(200).json({ success: true, message: 'Author created successfully' });
  });
});

app.get('/api/contents', (req, res) => { 
  const query = 'SELECT * FROM content';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.status(200).json(results);
  });
});


app.post('/api/contents', (req, res) => {
  const { title, description } = req.body;

  const query = 'INSERT INTO content (title, description) VALUES (?, ?)';
  db.query(query, [title, description], (error, result) => {
    if (error) {
      console.error('Error adding story:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const newStoryId = result.insertId;
      res.status(201).json({
        contentid: newStoryId,
        title,
        description,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
