const LeanCloud = require('../service/leanCloud')

//获取列表
exports.list = (ctx, next) => {
	var limit = 10;
	var pageIndex = ctx.query.pageIndex || 1;
	var skip = limit * (pageIndex - 1);
	return LeanCloud.list('Liyuntao_message', limit, skip).then(function(data){
		ctx.response.body = {
			code: 200,
			data,
			limit,
			skip
		};
	}, function(err){
		ctx.response.body = err;
	});
}

exports.detail = (ctx, next) => {
	var objectId = ctx.params.objectId;
	return LeanCloud.detail('Liyuntao_message', objectId).then(function(data){
		ctx.response.body = {
			code: 200,
			data
		}
	}, function(err){
		ctx.response.body = err;
	});

}

exports.save = (ctx, next) => {
	return LeanCloud.save('Liyuntao_message', {
		email: '772091958@qq.com',
		name: 'Node Js',
		cip: '192.168.1.1',
		cname: '北京市',
		message: 'hello, world!'
	}).then(function(data){
		ctx.response.body = data;
	}, function(err){
		ctx.response.body = err;
	});
}