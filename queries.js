//TASK 2

//Find books in a specific genre
db.books.find({ genre: "Fiction"})

//Find books published after a certain year
db.books.find({ published_year: { $gt: 1900 } })

//Find books by a specific author
db.books.find({ author: "Jane Austen" })

//Update the price of a specific book
db.books.updateOne(
  { title: "Brave New World" },
  { $set: { price: 12.50 } }
)

//Delete a book by its title
db.books.deleteOne(
    { title:"1984"}
)

//TASK 3

//A query to find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})

//Use projection to return only the title, author, and price fields in your queries
db.books.find(
  { in_stock: true },
  { title: 1, author: 1, price: 1, _id: 0 }
)

// Implement sorting to display books by price(ascending order)
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: 1 })

// Implement sorting to display books by price(descending order)
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ price: -1 })

//  Use the `limit` and `skip` methods to implement pagination (5 books per page)
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ title: 1 }).skip(0).limit(5) // The first page
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).sort({ title: 1 }).skip(5).limit(5) // The second page

//TASK 4

//Create an aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avg_price: { $avg: "$price" }}}
])

//Create an aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
  { $group: { _id: "$author", book_count: { $sum: 1 }}},
  { $sort: { book_count: -1 }},
  { $limit: 1 }
])

// Implement a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  { $group: { _id: { $floor: { $divide: ["$published_year", 10] } }, book_count: { $sum: 1 }}},
  {$project: {decade: { $multiply: ["$_id", 10] },book_count: 1, _id: 0 }},
  { $sort: { decade: 1 } }
])

// TASK 5

// Create an index on the `title` field for faster searches
db.books.createIndex({ title: 1 })

// Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: 1 })

// Use the `explain()` method to demonstrate the performance improvement with your indexes
db.books.find({ title: "The Lord of the Rings" }).explain("executionStats")