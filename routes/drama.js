const router = require('koa-router')()
const koa2Req = require('koa2-request')
const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')
const { getDramaList } = require('../controller/drama')

router.prefix('/drama')

router.get('/list', async function (ctx, next) {
  // console.log(222222222222222222222222222)
  const keyword = ctx.query.keyword || '';
  const data = await getDramaList(keyword);
  const msg = '成功'
  // console.log('data-------', data)
  ctx.body = new SuccessModel(data, msg)
})


module.exports = router
