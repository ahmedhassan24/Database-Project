// Import packages
const express = require('express')
const jwt = require('jsonwebtoken');
var expressjwt = require('express-jwt');
// const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
// App
const app = express()
var nodemailer = require('nodemailer');
const bcrypt = require('bcrypt')

var d = new Date();
console.log(d);
// Morgan
// app.use(morgan('tiny'))
// First route
const saltRounds = 10
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "192.168.64.2",
    user: 'root',
    password: 'ahmeds',
    database:'Otlob',
  });

let result

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
  
con.connect(function(err) {
  if (err) 
    console.log(err);
  else 
    console.log("Connected!");
});



app.post("/sendmail" , (req,res) => {
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'notlobbb@gmail.com',
           pass: 'csce2501'
       }
   });

   const mailOptions = {
    from: 'Admin@otlob.com', // sender address
    to: req.body.email, // list of receivers
    subject: 'invitation', // Subject line
    html: '<p>you are invited to Otlob use Password: 123123 to sign in </p>'// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
})

//// bs
app.post("/signup" , (req,res) => {
    var SIGNUP_REQUEST = `INSERT INTO User (Firstname,Lastname,AcctType,Email,PhoneNo,
      Birthdate,Username,Passwrd, Address) VALUES (?,?,?,?,?,?,?,?,?)`;
    bcrypt.hash(req.body.Passwrd, saltRounds,  (err,hash) => {
    var query = mysql.format(SIGNUP_REQUEST,[req.body.Firstname,req.body.Lastname,req.body.AcctType,
      req.body.Email,req.body.PhoneNo
      ,req.body.Birthdate,req.body.Username, hash, req.body.Address]);
      con.query(query,(err) => {
        if(err) {
          console.log(err);
          res.send(err)
        }
        else {
          console.log('SUCCESSFUL')
          res.send("SUCCESS")
        }
      })
    })
})
//bs
app.post("/signin",(req, res) => {
  console.log(req,"BODY")
  const SIGNIN_REQUEST = `SELECT UserId, Username, Passwrd, AcctType FROM User WHERE Username = ?;`;
  var query_in = mysql.format(SIGNIN_REQUEST,[req.body.Username])
  con.query(query_in,(err,user)=>{
    //console.log(JSON.parse(JSON.stringify(user)));
      if (err)
      { 
       // console.log(err); 
        return  res.status(500).json({success: false, message: err});
      }
      console.log(user.length,"HEEERREEE")
      if(user.length == 1) 
      {
        bcrypt.compare(req.body.Password, user[0].Passwrd,  function (err, result) {
        console.log(result,"PPPP", err);
        if (result == true) {
          
          const token = jwt.sign(JSON.parse(JSON.stringify(user))[0], "secret");
          console.log(token,"TOKEN")
          return res.status(200).json({success: true, token,user:JSON.parse(JSON.stringify(user))[0].AcctType});
        } 
        if(err){
         res.send('Incorrect password'); }
        })
        //  return res.status(200).json({success: true, user: result[0]});
      }
      else 
        return res.status(500).json({success: false, message: "wrong password or username"});
  });
})


///////to get a list of all restaurants////////////

///// LIST BY AREA OR CUISINE ////////////

/////// neeeds testing/////////////

app.get("/restaurants",expressjwt({secret:"secret"}), (req, res) => {
  // const {address} = req.body;
  console.log(req,req.user,"LLLLLLLLLLLLLLL")
  const get_restaurants = "SELECT Otlob.Restaurant.* FROM Otlob.Restaurant"
  con.query(get_restaurants,(err,result) => {
    if (err) { 
      console.log(err); 
      return  res.status(300).json({success: false, message: err});
    }
    if(result.length>=1) 
    { 
      console.log(result);
      return res.status(200).json({success: true, rests: result});
    }
    else
    {
      console.log("not found");
      return res.status(404).json({success: false, message: `Not found`});
    }
});
});

app.get("/loggg",expressjwt({secret:"secret"}), (req, res) => {
  const get_restaurants = "SELECT * FROM Otlob.Log"
  con.query(get_restaurants,(err,result) => {
    if (err) { 
      console.log(err); 
      return  res.status(300).json({success: false, message: err});
    }
    if(result.length>=1) 
    { 
      console.log(result);
      return res.status(200).json({success: true, logs: result});
    }
    else
    {
      console.log("not found");
      return res.status(404).json({success: false, message: `Not found`});
    }
});
});



app.get("/userinfo",expressjwt({secret:"secret"}), (req,res) =>{
  // const {UserId} = req.body;
  console.log(req.user,"USER")
  const UserId = req.user.UserId;
  const get_info = "SELECT Firstname, Lastname, Address from User where UserId = ?"
  con.query(get_info,[UserId], (err, result) => {
    if (err) { 
      console.log(err); 
      return  res.status(300).json({success: false, message: err});
    }
    if(result.length>=1) 
    { 
      console.log(result);
      return res.status(200).json({success: true, user: result});
    }
    else
    {
      console.log("not found");
      return res.status(404).json({success: false, message: `Not found`});
    }
  })
})

app.get("/prevorders", expressjwt({secret:"secret"}),(req,res) => {
  const UserId = req.user.UserId;
  console.log(UserId)
  const getPrevOrder= "SELECT Otlob.Restaurant.Rname, Otlob.Order.* from Otlob.Restaurant,Otlob.Order WHERE Otlob.Order.RestId = Otlob.Restaurant.RestId AND Otlob.Order.Status = 'D' AND Otlob.Order.UserId = ?;"
  con.query(getPrevOrder, [UserId], (err, result) =>{
    if (err) { 
      console.log(err); 
      return  res.status(300).json({success: false, message: err});
    }
    if(result.length>=1) 
    { 
      console.log(result);
      return res.status(200).json({success: true, orders: result});
    }
    else
    {
      console.log("not found");
      return res.status(404).json({success: false, message: `Not found`});
    }
  })
})
  app.get("/restaurantaddr",expressjwt({secret:"secret"}), (req, res) => {
      const {address} = req.body;
      const get_restaurants = "SELECT Otlob.Restaurant.* FROM Otlob.Restaurant, Otlob.Branch WHERE Otlob.Restaurant.RestId = Otlob.Branch.RID AND Otlob.Branch.ADDRESS = ?"
      con.query(get_restaurants,[address],(err,result) => {
        if (err) { 
          console.log(err); 
          return  res.status(300).json({success: false, message: err});
        }
        if(result.length>=1) 
        { 
          console.log(result);
          return res.status(200).json({success: true, rests: result});
        }
        else
        {
          console.log("not found");
          return res.status(404).json({success: false, message: `Not found`});
        }
    });
});

/////to add restaurant/////////
app.post("/addrest", expressjwt({secret:"secret"}),(req,res)=> {
    const {Rname, Hotline,start_at, end_at,Cuisine} = req.body;
    const add_rest = "INSERT INTO Restaurant(Rname, Hotline,start_at, end_at,Cuisine) VALUES (?,?,?,?,?)"
    con.query(add_rest,[Rname, Hotline,start_at, end_at,Cuisine], (err,result)=>{
    if (err) 
    {
      console.log(err);
      return  res.status(300).json({success: false});
    }
    return res.status(200).json({success: true, message: `${Rname}`});
    })
})

app.put("/updaterest", expressjwt({secret:"secret"}),(req,res)=> {
    const {Hotline,start_at, end_at,Cuisine,Rname} = req.body;
    const UPDATE_rest = "UPDATE Restaurant SET Hotline = ?,start_at = ?, end_at = ?,Cuisine = ? WHERE Rname = ?"
    con.query(UPDATE_rest,[Hotline,start_at, end_at,Cuisine, Rname], (err,result)=>{
    if (err) 
    {
      console.log(err);
      return  res.status(300).json({success: false});
    }
    return res.status(200).json({success: true, message: `${Rname}`});
    })
})


//get either all staff users or all admins
app.get("/users/:type", expressjwt({secret:"secret"}),(req,res)=>{
    const AcctType = req.params.type;
    const List_Users = "SELECT UserId,Firstname,Lastname,Email,PhoneNo,Birthdate,Username,Address FROM User where AcctType = ?"
    con.query(List_Users,[AcctType], (err,result)=>{
      if (err) { 
        console.log(err); 
        return  res.status(300).json({success: false, message: err});
      }
      if(result.length>=1) 
      { 
        console.log(result);
        return res.status(200).json({success: true, users: result});
      }
      else
      {
        return res.status(404).json({success: false, message: `Not found`});
      }
    })
})


app.put("/deleteuser",expressjwt({secret:"secret"}),(req,res) =>{
  const {UserId} = req.body;
  const delete_user = `DELETE FROM User WHERE UserId = ?`;
  const log = `INSERT INTO Log (userChanged, action, userAffected) VALUES (?,"Deleted user", ?)`
  con.query(delete_user,[UserId],  (err,result)=>{
    if (err) 
    {
      console.log(err);
      return  res.status(300).json({success: false});
    }
    console.log("delete");
    con.query(log,[req.user.Username,UserId],  (err,result)=>{
      if (err) 
      {
        console.log(err);
        return  res.status(300).json({success: false});
      }
      console.log("delete");
      
      // return res.status(200).json({success: true, message: `${UserId}`});    
    })
    return res.status(200).json({success: true, message: `${UserId}`});    
  })

})

// const log = `INSERT INTO Log (userChanged, action, userAffected) VALUES (?,"Deleted user", ?)`
// con.query(log,[req.user.UserId,UserId],  (err,result)=>{
//   if (err) 
//   {
//     console.log(err);
//     return  res.status(300).json({success: false});
//   }
//   console.log("delete");
  
//   return res.status(200).json({success: true, message: `${UserId}`});    
// })

app.put("/edituser",expressjwt({secret:"secret"}),(req,res)=>{
    const {Password, Username} = req.body;
    const update_user = "UPDATE User SET Passwrd = ? where Username = ?"
    const log = `INSERT INTO Log (userChanged, action, userAffected) VALUES (?,"changed password of", ?)`
    console.log(Username, "uSERNAME");
    console.log(req.user.Username, "req.user.Username");
    console.log(Password);
    bcrypt.hash(Password, 10, (err,hash) =>{
    if(err)
      console.log(err);
    con.query(update_user,[hash, Username],  (error,result)=>{
      if (error) 
      {
        console.log(error);
        return  res.status(300).json({success: false});
      }
      con.query(log,[req.user.Username,Username],  (err,result)=>{
      if (err) 
      {
        console.log(err);
        return  res.status(300).json({success: false});
      }
      // return res.status(200).json({success: true});    
      })
      return res.status(200).json({success: true, message: `${Username}`});    
    })
  })
})
app.put("/editusers",(req,res)=>{
  const {Password, Username} = req.body;
  const update_user = "UPDATE User SET Passwrd = ? where Username = ?"
  const log = `INSERT INTO Log (userChanged, action, userAffected) VALUES (?,"changed password of", ?)`
  console.log(Username, "uSERNAME");
  console.log(Password);
  bcrypt.hash(Password, 10, (err,hash) =>{
  if(err)
    console.log(err);
  con.query(update_user,[hash, Username],  (error,result)=>{
    if (error) 
    {
      console.log(error);
      return  res.status(300).json({success: false});
    }
    /*con.query(log,[req.user.Username,Username],  (err,result)=>{
    if (err) 
    {
      console.log(err);
      return  res.status(300).json({success: false});
    }
    // return res.status(200).json({success: true});    
    })*/
    return res.status(200).json({success: true, message: `${Username}`});    
  })
})
})

app.put("/modify",expressjwt({secret:"secret"}), (req,res)=>{
  const{Firstname,Lastname,Birthdate,PhoneNo,Address, UserId} = req.body;
  const modify_user = "UPDATE User Set Firstname = ?,Lastname = ?,Birthdate = ?,PhoneNo = ?,Address = ? WHERE UserId = ?";
  con.query(modify_user,[Firstname,Lastname,Birthdate,PhoneNo,Address, UserId], (err,result) =>{
    if (err) 
      {
        console.log(err);
        return  res.status(300).json({success: false});
      }
      return res.status(200).json({success: true, message: "modification succesful"});    
  })
})

app.get("/orderStatus",expressjwt({secret:"secret"}), (req,res)=>{
  const {UserId} = req.body;
  const orderStatus = `SELECT Status from Order Where UserId = ?`
  con.query(orderStatus,[UserId], (err,result) =>{
    if (err) 
      {
        console.log(err);
        return  res.status(300).json({success: false});
      }
      return res.status(200).json({success: true, message: "orderStatus"});
  })

})
app.post("/createdisc",expressjwt({secret:"secret"}), (req,res)=>{
    const{Promo, StartDate, EndDate, DiscountCost, Rname} = req.body;
    const get_rid = "SELECT RestId FROM Restaurant WHERE Rname = ?"
    const create_discount = 'INSERT INTO Discount (Promo, StartDate, EndDate, DiscountCost, RestId) VALUES (?,?,?,?,?)'
    con.query(get_rid,[Rname], (err,result)=>{
      if (err) 
      {
        console.log(err);
        return  res.status(300).json({success: false});
      }
      var restaurant_id = result[0].RestId;
      console.log(restaurant_id);
      // return res.status(200).json({success: true, message: result[0].RestId});
      con.query(create_discount,[Promo, StartDate, EndDate, DiscountCost, restaurant_id], (err,resulting)=>{
        if (err) 
        {
          console.log(err);
          return  res.status(300).json({success: false});
        }
        console.log(restaurant_id);
        return res.status(200).json({success: true, message: `${Rname}`});
        })
    })
})

app.put("/editDiscount", expressjwt({secret:"secret"}),(req,res)=>{
  const {StartDate, EndDate} = req.body;
  const editDiscount = `UPDATE Discount SET StartDate = ? and EndDate = ?`
  con.query(editDiscount, [StartDate, EndDate], (err, result) => {
  if (err) 
      {
        console.log(err);
        return  res.status(300).json({success: false});
      }
      console.log(restaurant_id);
      return res.status(200).json({success: true, message: `${Rname}`});
      })
})

app.put("/editItem", expressjwt({secret:"secret"}),(req,res)=>{
  const {Type, ItemName, Price} = req.body;
  const editDiscount = `UPDATE Item SET Type = ? and ItemName = ? and Price = ?`
  con.query(editDiscount, [Type, ItemName, Price], (err, result) => {
  if (err) 
      {
        console.log(err);
        return  res.status(300).json({success: false});
      }
      console.log(restaurant_id);
      return res.status(200).json({success: true, message: `${Rname}`});
      })
})


app.get("/getDiscounts",expressjwt({secret:"secret"}), (req, res) => {
  const {Promo} = req.body;
  const get_order = "SELECT Otlob.Restaurant.Rname,Otlob.Discount.* FROM Otlob.Discount, Otlob.Restaurant WHERE Otlob.Restaurant.RestId = Otlob.Discount.RestId and Otlob.Discount.Promo = ?;"
  con.query(get_order,[Promo],(err,result) => {
    if (err) { 
      console.log(err); 
      return  res.status(300).json({success: false, message: err});
    }
    if(result.length>=1) 
    { 
      console.log(result);
      return res.status(200).json({success: true, discounts: result});
    }
    else
    {
      return res.status(404).json({success: false, message: `Not found`});
    }
});
});

////gets all orders /////////
// app.get("/orders", (req, res) => {
//     const get_order = "SELECT Otlob.Branch.ADDRESS,Otlob.Restaurant.Rname,Otlob.Order.* FROM Otlob.Order, Otlob.Restaurant,Otlob.Branch WHERE Otlob.Restaurant.RestId = Otlob.Order.RestId AND Otlob.Branch.BranchId = Otlob.Order.BranchId;"
//     con.query(get_order,(err,result) => {
//       if (err) { 
//         console.log(err); 
//         return  res.status(300).json({success: false, message: err});
//       }
//       if(result.length>=1) 
//       { 
//         console.log(result);
//         return res.status(200).json({success: true, restaurants: result});
//       }
//       else
//       {
//         return res.status(404).json({success: false, message: `Not found`});
//       }
//   });
// });
app.get("/orders", expressjwt({secret:"secret"}), (req, res) => {
    const get_order = "SELECT Otlob.Restaurant.Rname,Otlob.Order.* FROM Otlob.Order, Otlob.Restaurant,Otlob.Branch WHERE Otlob.Restaurant.RestId = Otlob.Order.RestId AND Otlob.Branch.BranchId = Otlob.Order.BranchId AND Otlob.Order.Status = 'R';"
    con.query(get_order,(err,result) => {
      console.log(result,"RESULT")
      if (err) { 
        console.log(err); 
        return  res.status(300).json({success: false, message: err});
      }
      if(result.length>=1) 
      { 
        console.log(result);
        return res.status(200).json({success: true, restaurants: result});
      }
      else
      {
        return res.status(404).json({success: false, message: `Not found`});
      }
  });
});


app.delete("/deleteorder", expressjwt({secret:"secret"}), (req,res)=>{
  const {OrderId} = req.body;
  const delete_order = "DELETE FROM Otlob.Order WHERE Otlob.Order.OrderId = ?"
  console.log(req.body)
  con.query(delete_order,[OrderId],  (err,result)=>{
    console.log(result,"RESSS")
    if (err) 
    {
      console.log(err);
      return  res.status(300).json({success: false});
    }
    return res.status(200).json({success: true, message: `${OrderId}`});    
  })
})

// UPDATE Item SET Type = ? and ItemName = ? and Price = ?
app.put("/update_order",expressjwt({secret:"secret"}),  (req,res)=>{
  const {Status, OrderId} = req.body;
  console.log(JSON.stringify(OrderId));
  const update_order = `UPDATE Otlob.Order SET Otlob.Order.Status = ? WHERE Otlob.Order.OrderId = ?`
  con.query(update_order,[Status,OrderId], (err,result) =>{
    if (err) 
      {
        console.log(err);
        return  res.status(300).json({success: false});
      }
      return res.status(200).json({success: true, message: `${Status}`}); 
  })

})
app.post("/insertOrder",expressjwt({secret:"secret"}), (req,res)=>{
  const{RestId} = req.body;
  const UserId = req.user.UserId;
  const address = "SELECT Otlob.User.Address from Otlob.User, Otlob.Restaurant, Otlob.Branch where UserId = ?"
  const insert_Order = "INSERT INTO Otlob.Order (RestId,Address,BranchId,Status,UserId) VALUES (?,?,10,'R',?)"
  con.query(address,[UserId], (err,result) =>{
    if (err) 
      {
        console.log(err);
        return  res.status(300).json({success: false});
      }
      console.log(result[0].Address);
      var Address = result[0].Address;
      console.log(Address);
      con.query(insert_Order,[RestId,Address,UserId], (err,resulting)=>{
        if (err) 
        {
          console.log(err);
          return  res.status(500).json({success: false});
        }
        return res.status(200).json({success: true, message: resulting});
        })
    })
  })

app.get("/getMenu/:id",expressjwt({secret:"secret"}), (req,res)=>{
  console.log(req.params,"REQPARAMS")
  const RestId = req.params.id;
  console.log(RestId,"rest")
  const get_menu = "SELECT Otlob.Menu.* , Restaurant.Rname From Otlob.Menu, Otlob.Restaurant WHERE Otlob.Menu.RestId = ? AND Otlob.Menu.RestId = Otlob.Restaurant.RestId"
  con.query(get_menu,[RestId], (err,result) => { 
    if(err)
    {
      console.log(err);
      return res.status(500).json({success: false});
    }
    console.log(result,"result")
    console.log(result[0].MenuId)
    const get_item = `SELECT * FROM Item where MenuId = ?`
    con.query(get_item,result[0].MenuId,(err,resulting)=>{
      if(err)
      {
        console.log(err);
        return res.status(500).json({success: false})
      }
      console.log("SUCCESSFUL GETTING ITEMS IN MENU")
      return res.status(200).json({item: resulting})
    })
   // return res.status(200).json({success: true, result, message: result})

    ///// get items from menu 
  })
})

// app.get("/getMenu", (req,res)=>{
//   const get_menu = "SELECT Otlob.Menu.* , Restaurant.Rname From Otlob.Menu, Otlob.Restaurant WHERE Otlob.Menu.RestId = Otlob.Restaurant.RestId"
//   con.query(get_menu, (err,result)=>{
//     if(err)
//     {
//       console.log(err);
//       return res.status(500).json({success: false});
//     }
//     return res.status(200).json({success: true, message: result})
//   })
// })

app.post("/orderItem",expressjwt({secret:"secret"}),(req,res)=>{
  const {ItemId, MenuId, Cmmnt,Quantity} = req.body;
  console.log(req.body);
  const insert_menu = `INSERT INTO OrderItem(ItemId, MenuId, Cmmnt,Quantity) VALUES (?,?,?,?)`
  con.query(insert_menu,[ItemId, MenuId, Cmmnt, Quantity], (err,result)=>{
    if(err)
    {
      console.log(err);
      return res.status(500).json({success: false})
    }
    console.log("INSERT MENU SUCCESFUL")
    return res.status(200).json({success: true})
  })
})

app.post("/insertMenu",expressjwt({secret:"secret"}),(req,res)=>{
  const {Type, BranchId, RestId, Start_at, End_at} = req.body;
  const insert_menu = `INSERT INTO Menu(Type, BranchId,RestId,Start_at, End_at) VALUES (?,?,?,?,?)`
  con.query(insert_menu,[Type, BranchId, RestId, Start_at, End_at], (err,result)=>{
    if(err)
    {
      console.log(err);
      return res.status(500).json({success: false})
    }
    console.log("INSERT MENU SUCCESFUL")
    return res.status(200).json({success: true})
  })

})

app.put("/modifyMenu",expressjwt({secret:"secret"}),(req,res)=>{
  const {Type, BranchId, RestId, Start_at, End_at, MenuId} = req.body;
  const insert_menu = `Update Menu SET Type = ?, BranchId = ?,RestId = ?,Start_at = ?, End_at = ?) where MenuId = ?`
  con.query(insert_menu,[Type, BranchId, RestId, Start_at, End_at, MenuId], (err,result)=>{
    if(err)
    {
      console.log(err);
      return res.status(500).json({success: false})
    }
    console.log("INSERT MENU SUCCESFUL")
    return res.status(200).json({success: true})
  })

})


app.post("/insertitem",expressjwt({secret:"secret"}),(req,res)=>{
  const{MenuId,ItemName,Type,Price} = req.body;
  const insert_item = `INSERT INTO Item(MenuId,ItemName,Type,Price) VALUES (?,?,?,?)`
  con.query(insert_item, [MenuId,ItemName,Type,Price], (err,result)=>{
    if(err)
    {
      console.log(err);
      return res.status(500).json({success:false})
    }
    console.log("SUCCESSFUL INSERT ITEM")
    return res.status(200).json({success:true})
  })
})

app.delete("/deleteres", expressjwt({secret:"secret"}),(req,res)=>{
  const{RestId} = req.body;
  const delete_rest = `DELETE FROM Restaurant WHERE RestId = ?`
  con.query(delete_rest, [RestId], (err,result)=>{
  if(err)
    {
      console.log(err);
      return res.status(500).json({success:false})
    }
    console.log("SUCCESSFUL deletion")
    return res.status(200).json({success:true})
})
})

app.put("/reset", expressjwt({secret:"secret"}),(req, res) => {
  const {newPass} = req.body;
  const SIGNIN_REQUEST = `SELECT Username, Passwrd, AcctType FROM User WHERE Username = ?;`;
  var query_in = mysql.format(SIGNIN_REQUEST,[req.body.Username])
  con.query(query_in,(err,user)=>{

  console.log(user);
    if (err)
      {
      console.log(err, "res",result); 
      return  res.status(500).json({success: false, message: err});
    }
    if(user.length == 1) 
    { console.log("HERREE")
      console.log(req.body.Password, user[0].Passwrd);
      bcrypt.compare(req.body.Password, user[0].Passwrd,  function (err, resul) {
        console.log("QQQQ",resul);
        console.log(err,"xxx");
      if (resul == true) {
        const reset = "UPDATE User SET Passwrd = ? where Username = ? "
        bcrypt.hash(newPass, saltRounds,  (err,hash) => {
        con.query(reset, [newPass,req.body.Username], (err, news)=>{
          if(err)
          {
            console.log(err)
            return res.status(500).json({success: false, message:"update error"});
          }
          return res.status(200).json({success: true, message: "password changed", user:JSON.parse(JSON.stringify(user))[0].AcctType});
        })
      })
    }
      else
      {
      return res.status(500).json({success: false, message:"compare wrongg"});
      }
    })
  }
    else 
      return res.status(500).json({success: false, message: "wrong password or username"});
})
});

// Starting server
app.listen(3000, () => {
    console.log("Server running on port 3000");
   });