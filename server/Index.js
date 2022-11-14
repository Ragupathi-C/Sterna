const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


var studentDetails = [];

app.post("/details",(request,response)=>{
    let name = request.body.name;
    let rollNo = request.body.roll;
    let dob = request.body.date;
    let address = request.body.address;
    let phone = request.body.phone;

    let Details = {
        "name" : name,
        "rollno" : rollNo,
        "dob" : dob,
        "address" : address,
        "phone" : phone
    }

   var ExecutedResult =  studentDetails.push(Details);
   response.send(ExecutedResult);

});

app.listen(3001);