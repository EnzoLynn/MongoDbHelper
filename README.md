#MongoDb - Helper
 MongoDb - Helper  <br>
### Example
 ```javascript
 //删除集合
  db.removeCollection('storeCollection', function(result) {
        if (!result.success) {
            console.log(result.msg);
        };
        if (result.success) {

         
        }
    });
//插入
 db.insert('storeCollection', [{
        version: '44',
        segment: 'myname'
    }], function(result) {

        if (!result.success) {
            console.log(result.msg);

        };
        if (result.success) {
            //result.data.result.ok   成功1 bool
            // result.data.result.n   受影响行数
            // result.data.ops  插入的数据 [{},{}]
            // result.data.insertedCount    插入数量
            // result.data.insertedIds 插入的Id ["",""]
            
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
    }, function( result) {

        if (!result.success) {
            console.log(result.msg);

        };
        if (result.success) {
            //result.data.result.ok   成功1 bool
            // result.data.n  受影响行数 
            // result.data.nModified   被修改数量
           
            console.log("update====" + result);

        };


    });
 //删除
 db.delete('storeCollection', {
        version: '44',
        segment: 'myname'
    }, function( result) {

        if (!result.success) {
            console.log(result.msg);

        };
        if (result.success) {
            //result.data.result.ok   成功1 bool
            // result.data.n  受影响行数 
            console.log("delete====" + result);
        };


    });
//查询
 db.select('storeCollection', {}, function(result) { 
        if (!result.success) {
            res.end(JSON.stringify({
                msg: result.msg,
                msg1: result.msg
            }));
        };
        if (result.success) {

            //result 结果集合 [{},{}]
            console.log("select====" + result);
            result.data.forEach(function(item) {
                console.log("foreach====" + item);
            });
            res.end(JSON.stringify({
                msg: result.data,
                msg1: result.data[0].segment
            }));
        }


    })
