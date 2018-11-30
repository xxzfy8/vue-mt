const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  global.console.log('idnex2')
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/testAsync', async(ctx, next) => {
  const a = await new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve('我是a')
    },1000)
  })
  const b = await '我是B哦'
  ctx.body = {
    a,
    b,
    c:"第一个node.js接口"
  }
})

module.exports = router
