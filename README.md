#MongoDb - Helper
 MongoDb - Helper  <br>
### Example
 ```javascript
//插入
 db.insert('storeCollection', [{
        version: '44',
        segment: 'myname'
    }], function(err, result) {

        if (err) {
            console.log(err);

        };
        if (result) {
            //result.result.ok   成功1 bool
            // result.result.n   受影响行数
            // result.ops  插入的数据 [{},{}]
            // result.insertedCount    插入数量
            // result.insertedIds 插入的Id ["",""]
            if (result.result.ok) {

            };
            console.log("insert====" + JSON.stringify(result));
        };



    });
 //更新
 db.update('storeCollection', {
        version: '44+' 
    }, {
        $set: {
            segment: 'updatename',
            version: '44+'
        }
    }, function(err, result) {

        if (err) {
            console.log(err);

        };
        if (result) {
            //result.result.ok   成功1 bool
            // result.n  受影响行数 
            // result.nModified   被修改数量
            if (result.ok) {

            };
            console.log("update====" + result);

        };


    });
 //删除
db.delete('storeCollection', {
        version: '44',
        segment: 'myname'
    }, function(err, result) {

        if (err) {
            console.log(err);

        };
        if (result) {
            //result.result.ok   成功1 bool
            // result.n  受影响行数
            if (result.ok) {

            };
            console.log("delete====" + result);
        };


    });
//查询
 db.select('storeCollection', {}, function(err, result) {

        if (err) {
            res.end(JSON.stringify({
                msg: err,
                msg1: err
            }));
        };
        if (result) {
            //result 结果集合 [{},{}]
            console.log("select====" + result);
            result.forEach(function(item) {
                console.log("foreach====" + item);
            });
            res.end(JSON.stringify({
                msg: result,
                msg1: result[0].segment
            }));
        }


    })
