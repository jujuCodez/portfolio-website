const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8010;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Use body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // For parsing JSON data

// Multer setup for user photo uploads
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
        let photo = req.file ? `${req.file.filename}` : 'placeholder.png';

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

// Multer setup for job order/engagement form uploads
const pdfStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname, 'uploads', 'pdfs');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir); // Save PDFs in this directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Save file with a unique name
    }
});

const pdfUpload = multer({ storage: pdfStorage }).single('quotationFile');

// Handle job order form submission and save to JSON
app.post('/upload-quotation', (req, res) => {
    pdfUpload(req, res, function (err) {
        if (err) {
            return res.status(400).send('Error uploading PDF file');
        }

        const { clientName, projectDescription, budget, deadline } = req.body;
        const pdfPath = req.file ? `uploads/pdfs/${req.file.filename}` : '';

        const newJob = {
            clientName,
            projectDescription,
            budget,
            deadline,
            pdfPath
        };

        const jobsFilePath = path.join(__dirname, 'data', 'client_jobs.json');
        fs.readFile(jobsFilePath, 'utf8', (err, data) => {
            let jobs = [];
            if (!err) {
                jobs = JSON.parse(data);
            }

            jobs.push(newJob);

            fs.writeFile(jobsFilePath, JSON.stringify(jobs, null, 2), (err) => {
                if (err) {
                    return res.status(500).send('Error saving job data');
                }

                res.send(`
                    <script>
                        alert('Job Order Submitted Successfully!');
                        window.location.href = '/job.html';
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
