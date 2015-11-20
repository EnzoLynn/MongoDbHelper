var uri = "mongodb://192.168.91.101:27017/test";

var MongoClient = require('mongodb').MongoClient;
var dbControl = {};


//查询
dbControl.select = function(collectionName, fillter, callback) {
    MongoClient.connect(uri, function(err, db) {
        db.collection(collectionName).find(fillter).toArray(function(err, result) {
            db.close();
            if (err) throw err;
            if (callback) {
                callback(err, result)
            };
            return result;
        });
    });
};
//添加
dbControl.insert = function(collectionName, objectArr, callback) {
    MongoClient.connect(uri, function(err, db) {
        db.collection(collectionName).insertMany(objectArr, function(err, result) {
            db.close();
            if (err) throw err;
            if (callback) {
                callback(err, result)
            };
            return result;
        });
    });
};
//修改
dbControl.update = function(collectionName, query, update, callback) {
    var options = {
        multi: true,  // multi
        upsert: false, // optional Update operation is an upsert. 
        w: null, //number | string  null  optional The write concern.
        wtimeout:null,     //number  null  optional .The write concern timeout.
        j: false //  optional Specify a journal write concern.
    };
    MongoClient.connect(uri, function(err, db) {
        db.collection(collectionName).updateMany(query, update, options, function(err, result) {
            db.close();
            if (err) throw err;
            if (callback) {
                callback(err, result)
            };
            return result;
        });
    });

};
//删除
dbControl.delete = function(collectionName, fillter, callback) {
     var options = { 
        w: null, //number | string  null  optional The write concern.
        wtimeout:null ,    //number  null  optional .The write concern timeout.
        j: false //  optional Specify a journal write concern.
    };
    MongoClient.connect(uri, function(err, db) {
        db.collection(collectionName).deleteMany(fillter,options, function(err, result) {
            db.close();
            if (err) throw err;
            if (callback) {
                callback(err, result)
            };
            return result;
        });
    });

};



module.exports = dbControl;
