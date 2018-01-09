'use strict'
const bless = require('../controller/bless');
const leancloudController = require('../controller/leancloud')

module.exports = (router) => {
  //登录
  router.post('/login');
  //新年祝福
  router.get('/bless', bless.list);//列表
  router.get('/bless/:objectId', bless.detail);//详情
  router.post('/bless', bless.save);//新增

  /**
   * leancloud
   **/
  //查询列表
  router.get('/leancloud/:classname', leancloudController.list);
  //根据objectId查询详情
  router.get('/leancloud/:classname/:objectId', leancloudController.detail);
  //新建
  router.post('/leancloud/:classname', leancloudController.create);
  //更新
  router.post('/leancloud/:classname/:objectId', leancloudController.update);
  //删除
  router.delete('/leancloud/:classname/:objectId', leancloudController.delete);
}
