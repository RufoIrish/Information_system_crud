var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "irishdb"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE irishdb", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "CREATE TABLE people (id INT, fname VARCHAR(255),mname VARCHAR(255),lname VARCHAR(255))";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Table created");
  //   });
  // });
  // con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "INSERT INTO people (fname, mname, lname) VALUES ('Irish', 'solatorio','Rufo')";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //   });
  // });

  // con.connect(function(err) {
  //   if (err) throw err;
  //   var sql = "UPDATE PEOPLE  SET fname = 'irishrufo' WHERE id  = 1";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log(result.affectedRows + " record(s) updated");
  //   });
  // });

  // con.connect(function(err) {
  //   if (err) throw err;
  //   var sql = "DELETE FROM people WHERE id = 1";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Number of records deleted: " + result.affectedRows);
  //   });
  // });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM people", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });