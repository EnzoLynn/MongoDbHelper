var uri = "mongodb://192.168.91.101:27017/test";

var MongoClient = require('mongodb').MongoClient;
var dbControl = {};

var dbMessage = function(success, data, msg, code) {
    var obj = {
        success: success,
        data: data,
        msg: msg,
        code: code
    };
    return obj;
};
//查询
dbControl.select = function(collectionName, fillter, callback) {

    MongoClient.connect(uri, function(err, db) {
        if (err) {
            callback(dbMessage(false, [], err, 502));
            return false;
        }
        db.collection(collectionName).find(fillter).toArray(function(err, result) {
            db.close();
            if (err) {
                callback(dbMessage(false, [], err, 502));
                return false;
            }
            if (callback) {
                callback(dbMessage(true, result, err, 200));                 
            };
            return result;
        });
    });
};
//添加
dbControl.insert = function(collectionName, objectArr, callback) {
    MongoClient.connect(uri, function(err, db) {
        if (err) {
            callback(dbMessage(false, [], err, 502));
             return false;
        }
        db.collection(collectionName).insertMany(objectArr, function(err, result) {
            db.close();
            if (err) {
                callback(dbMessage(false, [], err, 502));
                 return false;
            }
            if (callback) {               
                callback(dbMessage(true, result, err, 200));
            };
            return result;
        });
    });
};
//修改
dbControl.update = function(collectionName, query, update, callback) {
    var options = {
        multi: true, // multi
        upsert: false, // optional Update operation is an upsert. 
        w: null, //number | string  null  optional The write concern.
        wtimeout: null, //number  null  optional .The write concern timeout.
        j: false //  optional Specify a journal write concern.
    };
    MongoClient.connect(uri, function(err, db) {
        if (err) {
            callback(dbMessage(false, [], err, 502));
             return false;
        }
        db.collection(collectionName).updateMany(query, update, options, function(err, result) {
            db.close();
            if (err) {
                callback(dbMessage(false, [], err, 502));
                 return false;
            }
            if (callback) {
                callback(dbMessage(true, result, err, 200));
            };
            return result;
        });
    });

};
//删除
dbControl.delete = function(collectionName, fillter, callback) {
    var options = {
        w: null, //number | string  null  optional The write concern.
        wtimeout: null, //number  null  optional .The write concern timeout.
        j: false //  optional Specify a journal write concern.
    };
    MongoClient.connect(uri, function(err, db) {
        if (err) {
            callback(dbMessage(false, [], err, 502));
             return false;
        }
        db.collection(collectionName).deleteMany(fillter, options, function(err, result) {
            db.close();
            if (err) {
                callback(dbMessage(false, [], err, 502));
                 return false;
            }
            if (callback) {
               callback(dbMessage(true, result, err, 200));
            };
            return result;
        });
    });

};



module.exports = dbControl;
