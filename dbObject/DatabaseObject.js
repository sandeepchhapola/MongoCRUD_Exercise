var mongoose = require('mongoose');
var databaseObject=function (){
    var urlstring = "mongodb://localhost/HelloMongoose";
    console.log("node js server started");
    mongoose.connect(urlstring, function (err) {
        if (err)
            throw err;
        else
            return true;
    });

    this.userModel = function (dbName) {
        var igDatabase = new mongoose.Schema({
            name: String,
            age: Number,
            gender: String,
            mobile:String,
            address: {type: Object},
            dep_name: String,
            salary: Number
        });
        return mongoose.model(dbName, igDatabase);
    };

    this.createNewUser = function (uName, uAge, uGender, uMobile, uAddress, uDep_name, uSalary,createUserDatabase) {
        if (arguments.length !== 8) {
            throw new Error();
        }
        var newUser=new createUserDatabase({
            name: uName,
            age: uAge,
            gender: uGender,
            mobile: uMobile,
            address: uAddress,
            dep_name: uDep_name,
            salary: uSalary
        });
        saveUser(newUser);

    };

    var saveUser = function (createNewUser) {
        createNewUser.save(function (err) {
            if (err)
                throw new err;
            else
                console.log("********a new user is saved**************");
        });
    };

    this.selectAllRecords = function (userModel) {
        userModel.find({}).exec(function (err, result) {
            if (err)
                throw new err;
            else{
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                console.log(result);
            }
        });
    };

    this.removeRecord=function(condition,userModel) {
        userModel.remove(condition, function (err) {
            if (err)
                throw new err;
            else
                console.log("************************record is removed successfully****************************");
        });
    }

    this.updateRecord=function(condition,updateValue,userModel) {
        userModel.update(condition,updateValue,{multi:true}, function (err) {
            if (err)
                throw new err;
            else
                console.log("*************************record is updated successfully******************************");
        });
    }

};
module.exports=databaseObject;