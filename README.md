# PLP Bookstore MongoDB Project

## 📚 Project Description
This project demonstrates fundamental and advanced MongoDB operations for a bookstore database, including CRUD operations, aggregation pipelines, and indexing.

## 🛠️ Setup Instructions

### Prerequisites
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [MongoDB Shell (mongosh)](https://www.mongodb.com/try/download/shell)

### Installation Steps

1. **Install MongoDB Community Edition**
   - Download the appropriate version for your OS from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - Follow the installation wizard

2. **Start MongoDB Service**
   ```bash
   sudo systemctl start mongod
3. **Verify Service Status**
    ```bash
   sudo systemctl status mongod

4. **Database Initialization**
Connect to MongoDB
  bash
  mongosh

5. **Create Database and Collection**

javascript
use plp_bookstore
db.createCollection("books")
Data Population
Edit the insert script

Modify insert_books.js with your book data

Run the insertion script

bash
mongosh insert_books.js
📂 File Structure
text
project-root/
│
├── insert_books.js    # Script to populate books collection
├── queries.js        # Contains all MongoDB queries
└── README.md         # This documentation
🏗️ Running Queries
Interactive Mode

bash
mongosh
use plp_bookstore
// Paste your queries here
Script Mode

bash
mongosh queries.js
🔍 Verification
javascript
// Check document count
db.books.countDocuments()

// Test a sample query
db.books.find({ genre: "Fantasy" }).pretty()
⚙️ Index Implementation
javascript
// Single index on title
db.books.createIndex({ title: 1 })

// Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })
🚨 Troubleshooting
Issue	Solution
Connection refused	Ensure mongod service is running: sudo systemctl start mongod
Command not found	Verify mongosh is in your PATH
Script errors	Check JavaScript syntax in your .js files
