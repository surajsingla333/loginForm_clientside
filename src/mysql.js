
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "node"
});

var DB = con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // var adr = 'singla';
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  var sql= "INSERT INTO tags VALUES ?" ;
  var values = [
    ['1', 'ETCC123'],
    ['2', 'ETME444'],
    ['3', 'ETCE345'],
    ['4', 'ETIT111'],
    ['5', 'ETCE345'],
    ['4', 'ETME444'],
    ['7', 'ETCE345'],
    ['2', 'ETIT111'],
  ];
  con.query(sql,[values], queryResponse)
  console.log('aftercall')
  con.query
});

queryResponse = function(err, result){
    if (err) throw err;
   // setTimeout(function(){console.log('wait')},5000)
    console.log('aftercall 1')
    // console.log("the table is CREATED")
    console.log(result)
}

