var async = require("async");
var DatabaseObject = require('./dbObject/DatabaseObject');

var db = new DatabaseObject();
var model = db.userModel("Intelligrape");
var address = function (uHouseNo, uSector, uCity, uState, uPin) {
    return{
        houseNo: uHouseNo,
        sector: uSector,
        city: uCity,
        state: uState,
        pin: uPin
    };
};

var condition = function (uValue) {
    return{
        name: uValue
    };
};

var update = function (uValue) {
    return{
        mobile: uValue
    };
};

async.series([function (callback) {
        db.createNewUser("sandeep kumar", 25, 'male', '9555082881', address('g138', 22, 'noida', 'UP', 201301), 'Ninja', 10000, model);
        callback();
        },
        function (callback) {
            db.selectAllRecords(model);
            callback();
        },
        function (callback) {
            db.updateRecord(condition('sandeep kumar'), update('9632587412'), model);
            callback();
        },
        function (callback) {
            db.selectAllRecords(model);
            callback();
        },
        function (callback) {
            db.removeRecord(condition('sandeep kumar'), model);
            callback();
        },
        function (callback) {
            db.selectAllRecords(model);
            callback();
        }
    ],
    function (err, results) {
        // results is now equal to: {one: 1, two: 2}
    }
);


/*
db.createNewUser("sandeep kumar", 25, 'male', '9555082881', address('g138', 22, 'noida', 'UP', 201301), 'Ninja', 10000, model);
db.updateRecord(condition('sandeep kumar'), update('9632587412'), model)
db.removeRecord(condition('sandeep kumar'), model);
db.selectAllRecords(model);
*/

