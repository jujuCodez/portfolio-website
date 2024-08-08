const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8010;

app.use(express.static(path.join(__dirname)));  // Serve static files
app.use(bodyParser.urlencoded({ extended: true }));

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/users'); // Save user photos in this directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Save file with a unique name
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1 * 1024 * 1024 }, // Limit file size to 1MB
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only images are allowed'));
        }
    }
}).single('photo');

// Handle signup POST request
app.post('/signup', (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).send('File size exceeds 1MB limit.');
        } else if (err) {
            return res.status(400).send(err.message);
        }

        const { username, email, password } = req.body;
        let photo = req.file ? `${req.file.filename}` : 'placeholder.png'; // Include full path

        const newUser = {
            username: username,
            email: email,
            password: password, // Password stored in plaintext
            photo: photo
        };

        // Read existing users data
        const usersFilePath = path.join(__dirname, 'data', 'users.json');
        fs.readFile(usersFilePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).send('Error reading users data');
            }

            const users = JSON.parse(data);

            // Check for duplicate username or email
            const userExists = users.find(user => user.username === username || user.email === email);
            if (userExists) {
                return res.status(400).send(`
                    <script>
                        alert('Username or Email already exists!');
                        window.location.href = 'signup.html';
                    </script>
                `);
            }

            // Add new user to the users array
            users.push(newUser);

            // Write updated users data back to the file
            fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    return res.status(500).send('Error saving user data');
                }

                // Send a script that alerts the user and redirects to index.html
                res.send(`
                    <script>
                        alert('New User Created!');
                        window.location.href = '/';
                    </script>
                `);
            });
        });
    });
});

// Default route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
