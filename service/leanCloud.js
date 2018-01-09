var APP_ID = 'xxxxx';
var APP_KEY = 'xxxxx';
var AV = require('leancloud-storage');

const P = require('bluebird')

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

//新建或更新
exports.save = (className, data, objectId) => {
	var testObject;
	if(objectId){
		testObject = AV.Object.createWithoutData(className, objectId);
	} else {
		testObject = new AV.Object(className);
	}
	testObject.set(data);

	return new P((resolve, reject) => {
		testObject.save().then(function(res){
			resolve(res);
		}, function(error){
			reject(error);
		});
	});
}

//获取列表
exports.list = (className, limit, skip) => {
	const query = new AV.Query(className);
	return new P((resolve, reject) => {
		query.limit(limit).skip(skip).find().then(function(results) {
		  resolve(results);
		}, function(error) {
		  reject(error);
		});
	});
}

//统计行数
exports.count = (className) => {
	const query = new AV.Query(className);
	return new P((resolve, reject) => {
		query.count().then(function(results) {
		  resolve(results);
		}, function(error) {
		  reject(error);
		})
	});
}

//根据id获取详情
exports.detail = (className, objectId) => {
	const query = new AV.Query(className);
	return new P((resolve, reject) => {
		query.get(objectId).then(function(results) {
		  resolve(results);
		}, function(error) {
		  reject(error);
		});
	});
}

//删除
exports.delete = (className, objectId) => {
  var todo = AV.Object.createWithoutData(className, objectId);
  return new P((resolve, reject) => {
	  todo.destroy().then(function (success) {
	    resolve(success)
	  }, function (error) {
	    reject(error)
	  });
  })
}