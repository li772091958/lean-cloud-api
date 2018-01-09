/**
 * 小金杂货店模拟接口
 */

//抽奖机会
exports.accessLottery = (ctx, next) => {
	ctx.body = {
		code: 0,
		data: {
			chance: 1
		}
	}
}
//用户中奖记录
exports.awardList = (ctx, next) => {
	ctx.body = {
		code: 0,
		data: [
			{_id: 1, type: 1, status: 1, awadName: "50元满减券"},
			{_id: 2, type: 1, status: 1, awadName: "3期免息券"},
			{_id: 3, type: 1, status: 1, awadName: "6期免息券"},
			{_id: 4, type: 1, status: 1, awadName: "12期免息券"},
			{_id: 5, type: 2, status: 0, awadName: "一刻千金定制棉布袋"},
			{_id: 6, type: 3, status: 1, awadName: "一刻千金定制马克杯"},
			{_id: 7, type: 2, status: 0, awadName: "iPhone X"}
		]
	}
}
//用户中奖记录
exports.userRecord = (ctx, next) => {
	ctx.body = {
		code: 0,
		data: [
			{id: 1111, name: "奖品1", status: true},
			{id: 2222, name: "奖品2", status: true},
			{id: 3333, name: "奖品3", status: true},
			{id: 3333, name: "奖品3", status: true},
			{id: 3333, name: "奖品3", status: true}
		]
	}
}
//全国中奖用户记录
exports.allRecord = (ctx, next) => {
	ctx.body = {
		code: 0,
		data: [
			{phone: 1111, name: "奖品1"},
			{phone: 2222, name: "奖品2"},
			{phone: 3333, name: "奖品3"},
			{phone: 3333, name: "奖品3"},
			{phone: 3333, name: "奖品3"}
		]
	}
}
//抽奖
exports.lottery = (ctx, next) => {
	ctx.body = {
		code: 0,
		data: {
	      result: true,
	      awardType: Math.ceil(Math.random() * 2),
	      awardTag: Math.ceil(Math.random() * 7),
	      awardName: '一刻千金定制棉布袋',
	      imgName: 'lucky.png'
		},
		msg: '奖品抢光了'
	}
}
//邀请好友记录
exports.inviteRecord = (ctx, next) => {
	var date = new Date();
	ctx.body = {
		code: 0,
		data: [
			{phone: 1111, time: date},
			{phone: 1111, time: date},
			{phone: 1111, time: date},
			{phone: 1111, time: date},
			{phone: 1111, time: date},
			{phone: 1111, time: date},
			{phone: 1111, time: date},
			{phone: 1111, time: date},
			{phone: 1111, time: date},
			{phone: 1111, time: date},
			{phone: 1111, time: date},
			{phone: 1111, time: date}
		]
	}
}
//填写地址
exports.saveAddress = (ctx, next) => {
	ctx.body = {
		code: 0,
		data: {
			success: true
		}
	}
}
exports.getAddress = (ctx, next) => {
	ctx.body = {
		code: 0,
		data: {
			name: '李云涛',
			phone: '13297907357',
			address: '北京市天安门广场'
		}
	}	
}
