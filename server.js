// Set up the server
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files like css, js, images
app.use(express.static(path.join(__dirname)));

// Set up route for my website pages(index, about, contact)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Handle form submissions
app.post('/submit-contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    
    //I am not using database so
    // For now, I just display the submitted data
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Message Sent - Aiya</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background-color: #f8f9fa;
                    margin: 0;
                    padding: 0;
                }
                
                .success-container {
                    max-width: 700px;
                    margin: 50px auto;
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    padding: 40px;
                    text-align: center;
                }
                
                .success-icon {
                    width: 80px;
                    height: 80px;
                    background-color: #4CAF50;
                    border-radius: 50%;
                    margin: 0 auto 20px;
                    position: relative;
                }
                
                .success-icon::before, .success-icon::after {
                    content: '';
                    position: absolute;
                    background-color: white;
                }
                
                .success-icon::before {
                    width: 25px;
                    height: 8px;
                    transform: rotate(45deg);
                    left: 17px;
                    top: 46px;
                }
                
                .success-icon::after {
                    width: 40px;
                    height: 8px;
                    transform: rotate(-45deg);
                    left: 27px;
                    top: 41px;
                }
                
                h1 {
                    color: #4CAF50;
                    margin-bottom: 30px;
                }
                
                .message-details {
                    background-color: #f5f5f5;
                    border-radius: 8px;
                    padding: 20px;
                    margin: 20px 0;
                    text-align: left;
                }
                
                .message-details p {
                    margin: 10px 0;
                    border-bottom: 1px solid #e1e1e1;
                    padding-bottom: 10px;
                }
                
                .message-details p:last-child {
                    border-bottom: none;
                }
                
                .btn {
                    display: inline-block;
                    padding: 12px 25px;
                    background-color: #007bff;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: background-color 0.3s ease;
                    margin-top: 15px;
                    font-weight: bold;
                }
                
                .btn:hover {
                    background-color: #0056b3;
                }
                
                .header-nav {
                    background-color: #f4f4f4;
                    padding: 1rem 0;
                    text-align: center;
                }
                
                .header-nav ul {
                    display: flex;
                    justify-content: center;
                    list-style: none;
                    padding: 0;
                }
                
                .header-nav ul li {
                    margin: 0 15px;
                }
                
                .header-nav ul li a {
                    text-decoration: none;
                    color: #333;
                    font-weight: bold;
                    transition: color 0.3s ease;
                }
                
                .header-nav ul li a:hover {
                    color: #007bff;
                }
                
                footer {
                    text-align: center;
                    padding: 1rem;
                    background-color: #f4f4f4;
                    margin-top: 40px;
                }
            </style>
        </head>
        <body>
            <div class="header-nav">
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
            
            <div class="success-container">
                <div class="success-icon"></div>
                <h1>Message Sent Successfully!</h1>
                <p>Thank you for reaching out, ${name}. I've received your message and will get back to you as soon as possible.</p>
                
                <div class="message-details">
                    <h3>Message Details:</h3>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong> ${message}</p>
                </div>
                
                <a href="index.html" class="btn">Return to Homepage</a>
                <a href="contact.html" class="btn" style="background-color: #6c757d;">Send Another Message</a>
            </div>
            
            <footer>
                <p>&copy; 2025 Aiya Bakhitzhanova. All rights reserved.</p>
            </footer>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});