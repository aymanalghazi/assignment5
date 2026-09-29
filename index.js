// Create REST API endpoints to perform CRUD operations for the Products table

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>create a product<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();
// app.post("/createproduct", async (req, res) => {
//   const connection = db;
//   const { ProductName, Price, StockQuantity, SupplierID } = req.body;
//   const query =
//     "INSERT INTO products(ProductName,Price,StockQuantity,SupplierID) VALUES (?,?,?,?)";
//   try {
//     const [results] = await connection.execute(query, [
//       ProductName,
//       Price,
//       StockQuantity,
//       SupplierID,
//     ]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error insert product", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Retrieve all products.<<<<<<<<<<<<<<<<<<<<<<<<<<<//

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());
// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();
// app.get("/getproduct", async (req, res) => {
//   const connection = db;
//   const query = "SELECT * FROM Products";
//   try {
//     const [results] = await connection.execute(query);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error get products", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Retrieve a product by ID..<<<<<<<<<<<<<<<<<<<<<<<<//

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.get("/getproduct/:id", async (req, res) => {
//   const connection = db;
//   const { id } = req.params;
//   const query =
//     "SELECT ProductName, Price, StockQuantity, SupplierID  FROM Products where ProductID =?";
//   try {
//     const [results] = await connection.execute(query, [id]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error get product", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Update a product.<<<<<<<<<<<<<<<<<<<<<<<<//

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.patch("/updateproduct/:id", async (req, res) => {
//   const connection = db;
//   const { id } = req.params;
//   const { ProductName, Price, StockQuantity } = req.body;
//   const query =
//     "UPDATE Products SET ProductName=?, Price=?, StockQuantity=? WHERE ProductID=? ";
//   try {
//     const [results] = await connection.execute(query, [
//       ProductName,
//       Price,
//       StockQuantity,
//       id,
//     ]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error update product", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Delete a product.<<<<<<<<<<<<<<<<<<<<<<<<//

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.delete("/deleteproduct/:id", async (req, res) => {
//   const connection = db;
//   const { id } = req.params;
//   const query = "DELETE FROM products WHERE  ProductID=? ";
//   try {
//     const [results] = await connection.execute(query, [id]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error delete product", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// Create REST API endpoints to perform CRUD operations for the Suppliers table
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Create a supplier.<<<<<<<<<<<<<<<<<<<<<<<<//

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3400;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.post("/createsupplier", async (req, res) => {
//   const connection = db;
//   const { SupplierName, ContactNumber } = req.body;
//   const query =
//     "INSERT INTO Suppliers(SupplierName,ContactNumber) VALUES (?,?)";
//   try {
//     const [results] = await connection.execute(query, [
//       SupplierName,
//       ContactNumber,
//     ]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error insert supplier", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Retrieve all suppliers.<<<<<<<<<<<<<<<<<<<<<<<<//
// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3400;
// app.use(express.json());
// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();
// app.get("/getsupplier", async (req, res) => {
//   const connection = db;
//   const query = "SELECT * FROM suppliers";
//   try {
//     const [results] = await connection.execute(query);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error get supplier", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Update supplier information..<<<<<<<<<<<<<<<<<<<<<<<<//

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3400;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();
// app.patch("/updatesupplier/:id",async (req, res) => {
//     const connection = db
//   const {id} = req.params
//   const {SupplierName,ContactNumber} = req.body
//     const query = "UPDATE suppliers SET SupplierName=?, ContactNumber=? WHERE SupplierID=?"
// try {
//      const [results]=await connection.execute(
//     query,[SupplierName,ContactNumber,id]);
//       return res.status(200).json({ message: "done", results });
// } catch (err) {
//         return res
//           .status(500)
//           .json({ message: "error update supplier", error: err.message });
// }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Delete a supplier...<<<<<<<<<<<<<<<<<<<<<<<<//
// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3400;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.delete("/deletesupplier/:id", async (req, res) => {
//   const connection = db;
//   const { id } = req.params;
//   const query = "DELETE FROM Suppliers WHERE SupplierID=? ";
//   try {
//     const [results] = await connection.execute(query, [id]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error delete supplier", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// Create REST API endpoints to manage Sales
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Record a sale.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3500;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.post("/recordsaled",async (req, res) => {
//     const connection =db
//   const {ProductID,QuantitySold,SaleDate} = req.body
//     const query = "INSERT INTO Sales(ProductID,QuantitySold,SaleDate) VALUES(?,?,?) "
// try {
//       const [results]=await connection.execute(
//     query,[ProductID,QuantitySold,SaleDate]);
//       return res.status(200).json({ message: "done", results });
// } catch (err) {
//       return res
//           .status(500)
//           .json({ message: "error insert seles", error: err.message });
// }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Retrieve all sales.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3500;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.get("/retrievesaled",async (req, res) => {
//   try {
//     const connection = db;
//     const query = "SELECT * FROM Sales";
//     const [results] = await connection.execute(query);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//       return res
//     .status(500)
//     .json({ message: "error get seles", error: err.message });
//   }

// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Retrieve sales for a specific product.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3500;
// app.use(express.json());

// let db =undefined;
// async function connectionDB() {
//   try {
//     if(db) return db
//    db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.get("/retrievesaled/:id", async (req, res) => {
//   try {
//     const connection = db
//     const { id } = req.params;
//     const query =
//       "SELECT ProductID, QuantitySold , SaleDate   FROM Sales WHERE SaleID=? ";
//     const [results] = await connection.execute(query, [id]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//    return res.status(500).json({ message: "error get seles", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// >>>>>>>>>>Create API endpoints to perform the following database modifications:>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>Add a Category column to the Products table.<<<<<<<<<<<<<<<<<<<<

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db =undefined;
// async function connectionDB() {
//   try {
//     if(db) return db
//    db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.post("/AddCategory", async (req, res) => {
//   try {
//     const connection = db
//     const query ="ALTER TABLE Products ADD COLUMN Category VARCHAR(200)"

//     const [results] = await connection.execute(query);

//     return res.status(200).json({ message: "Add successfully", results });
//   } catch (err) {
//    return res.status(500).json({ message: "Error Adding", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// >>>>>>>>>>>>>>>>>>>>>>>>>>Remove the Category column.<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db =undefined;
// async function connectionDB() {
//   try {
//     if(db) return db
//    db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.post("/RemoveCategory", async (req, res) => {
//   try {
//     const connection = db
//     const query ="ALTER TABLE Products DROP COLUMN Category "

//     const [results] = await connection.execute(query);

//     return res.status(200).json({ message: "remove successfully", results });
//   } catch (err) {
//    return res.status(500).json({ message: "Error removing", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// >>>>>>>>>>>>>>>>>>>>>>>>>>>Change ContactNumber to VARCHAR(15).<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db =undefined;
// async function connectionDB() {
//   try {
//     if(db) return db
//    db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.post("/Changecolumn", async (req, res) => {
//   try {
//     const connection = db
//     const query ="ALTER TABLE Suppliers MODIFY ContactNumber VARCHAR(15) "

//     const [results] = await connection.execute(query);

//     return res.status(200).json({ message: "change successfully", results });
//   } catch (err) {
//    return res.status(500).json({ message: "Error changing", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Add a NOT NULL constraint to ProductName.<<<<<<<<<<<<<<<<<<<<<
// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db =undefined;
// async function connectionDB() {
//   try {
//     if(db) return db
//    db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.post("/NotNull", async (req, res) => {
//   try {
//     const connection = db
//     const query ="ALTER TABLE Products MODIFY ProductName VARCHAR(255) NOT NULL  "

//     const [results] = await connection.execute(query);

//     return res.status(200).json({ message: "Modify successfully", results });
//   } catch (err) {
//    return res.status(500).json({ message: "Error Modify", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// Create an API endpoint or initialization script to insert the following data
// >>>>>>>>Add a supplier with the name 'FreshFoods' and contact number '01001234567'.<<<<<<<<<

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.post("/AddSupplier", async (req, res) => {
//   const connection = db;
//   const { SupplierName, ContactNumber } = req.body;
//   const query =
//     "INSERT INTO Suppliers(SupplierName,ContactNumber) VALUES (?,?)";
//   try {
//     const [results] = await connection.execute(query, [
//       SupplierName,
//       ContactNumber,
//     ]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error insert supplier", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// i. 'Milk' with a price of 15.00 and stock quantity of 50.

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();
// app.post("/createproduct1", async (req, res) => {
//   const connection = db;
//   const { ProductName, Price, StockQuantity, SupplierID } = req.body;
//   const query =
//     "INSERT INTO products(ProductName,Price,StockQuantity,SupplierID) VALUES (?,?,?,?)";
//   try {
//     const [results] = await connection.execute(query, [
//       ProductName,
//       Price,
//       StockQuantity,
//       SupplierID,
//     ]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error insert product", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// ii. 'Bread' with a price of 10.00 and stock quantity of 30.

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();
// app.post("/createproduct2", async (req, res) => {
//   const connection = db;
//   const { ProductName, Price, StockQuantity, SupplierID } = req.body;
//   const query =
//     "INSERT INTO products(ProductName,Price,StockQuantity,SupplierID) VALUES (?,?,?,?)";
//   try {
//     const [results] = await connection.execute(query, [
//       ProductName,
//       Price,
//       StockQuantity,
//       SupplierID,
//     ]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error insert product", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// iii. 'Eggs' with a price of 20.00 and stock quantity of 40.

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();
// app.post("/createproduct3", async (req, res) => {
//   const connection = db;
//   const { ProductName, Price, StockQuantity, SupplierID } = req.body;
//   const query =
//     "INSERT INTO products(ProductName,Price,StockQuantity,SupplierID) VALUES (?,?,?,?)";
//   try {
//     const [results] = await connection.execute(query, [
//       ProductName,
//       Price,
//       StockQuantity,
//       SupplierID,
//     ]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error insert product", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// >>>>Add a record for the sale of 2 units of 'Milk' made on '2025-05-20'.<<<

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.post("/recordsaled",async (req, res) => {
//     const connection =db
//   const {ProductID,QuantitySold,SaleDate} = req.body
//     const query = "INSERT INTO Sales(ProductID,QuantitySold,SaleDate) VALUES(?,?,?) "
// try {
//       const [results]=await connection.execute(
//     query,[ProductID,QuantitySold,SaleDate]);
//       return res.status(200).json({ message: "done", results });
// } catch (err) {
//       return res
//           .status(500)
//           .json({ message: "error insert seles", error: err.message });
// }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//>>>>>>>> Create an API endpoint to update the price of 'Bread' to 25.00<<<<<<<<<

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.patch("/updateBread/:id", async (req, res) => {
//   const connection = db;
//   const { id } = req.params;
//   const {Price} = req.body;
//   const query = "UPDATE Products SET  Price=?  WHERE ProductID=? ";
//   try {
//     const [results] = await connection.execute(query, [Price,id]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error update Brerad", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Delete a Eggs.<<<<<<<<<<<<<<<<<<<<<<<<//

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.delete("/deleteEggs/:id", async (req, res) => {
//   const connection = db;
//   const { id } = req.params;
//   const query = "DELETE FROM products WHERE  ProductID=? ";
//   try {
//     const [results] = await connection.execute(query, [id]);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error delete eggs", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// Create a reporting endpoint to retrieve the total quantity sold for each product using SQL aggregate functions.

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.get("/totalSales/", async (req, res) => {
//   const connection = db;
//   const query = "SELECT ProductID, SUM(QuantitySold) FROM Sales GROUP BY ProductID  ";
//   try {
//     const [results] = await connection.execute(query);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error totalSales", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

// Create a reporting endpoint to retrieve the product with the highest stock quantity.

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.get("/highestStockQuantity", async (req, res) => {
//   const connection = db;
//   const query = "SELECT MAX(StockQuantity) FROM Products  ";
//   try {
//     const [results] = await connection.execute(query);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error highestStockQuantity", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

//Create a reporting endpoint to retrieve suppliers whose names start with 'F'.

// const express = require("express");
// const mysql = require("mysql2/promise");
// const app = express();
// const port = 3000;
// app.use(express.json());

// let db = undefined;
// async function connectionDB() {
//   try {
//     if (db) return db;
//     db = await mysql.createConnection({
//       host: "localhost",
//       user: "Ayman",
//       password: "12345",
//       port: 3306,
//       database: "store",
//     });
//     console.log("Database is connected");
//   } catch (err) {
//     console.log("Database is not connected ");
//   }
// }
// connectionDB();

// app.get("/suppliers", async (req, res) => {
//   const connection = db;
//   const query = "SELECT * FROM suppliers WHERE SupplierName LIKE 'F%' ";
//   try {
//     const [results] = await connection.execute(query);

//     return res.status(200).json({ message: "done", results });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "error totalSales", error: err.message });
//   }
// });

// app.use("/*hello", (resq, res) => {
//   res.status(404).json({ message: "Url is not found" });
// });
// app.listen(port, () => {
//   console.log(`message server is running on port ${port}`);
// });

