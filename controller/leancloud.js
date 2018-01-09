const LeanCloud = require('../service/leanCloud')

//获取列表
exports.list = async(ctx, next) => {
	let classname = ctx.params.classname;
	let limit = ctx.query.limit || 10;
	let pageIndex = ctx.query.pageIndex || 1;
	pageIndex = parseInt(pageIndex);
	let skip = limit * (pageIndex - 1);
	var total = await LeanCloud.count(classname);
	return LeanCloud.list(classname, limit, skip).then(function(data){
		ctx.response.body = {
			code: 200,
			data,
			pageIndex,
			total
		};
	}, function(err){
		ctx.response.body = err;
	});
}

//根据ID查询详细信息
exports.detail = (ctx, next) => {
	let classname = ctx.params.classname;
	let objectId = ctx.params.objectId;
	return LeanCloud.detail(classname, objectId).then(function(data){
		ctx.response.body = {
			code: 200,
			data
		}
	}, function(err){
		ctx.response.body = err;
	});

}

//新增
exports.create = async (ctx, next) => {
	let classname = ctx.params.classname;
	const body = ctx.request.body;
	console.log('222222222222', body)
	return LeanCloud.save(classname, body).then(function(data){
		console.log('ssssssssssssssssssssssssssssssssssuccess')
		ctx.response.body = {
			code: 200,
			data
		};
	}, function(err){
		console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerror')
		ctx.response.body = err;
	});
}

//更新
exports.update = async(ctx, next) => {
	let classname = ctx.params.classname;
	let objectId = ctx.params.objectId;
	const body = ctx.request.body;
	return LeanCloud.save(classname, body, objectId).then(function(data){
		ctx.response.body = {
			code: 200,
			data
		};
	}, function(err){
		ctx.response.body = err;
	});
}

exports.delete = (ctx, next) => {
	let classname = ctx.params.classname;
	let objectId = ctx.params.objectId;
	return LeanCloud.delete(classname, objectId).then(function(data){
		ctx.response.body = {
			code: 200,
			data
		}
	}, function(err){
		ctx.response.body = err;
	})
}