const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router(); 

router.get('/USER/:id', (ctx, next) => {
 // DB 에 연결해서 사용자 목록 가져와서 줘야 겠지만! 
});
router.get('/USER/:id', (ctx, next) => {
  ctx.body = '사용자 목록 배열!';
});
router.post('/USER/:id', (ctx, next) => {
  ctx.body = '유저 정보'; 
});
router.post('/USER/:id', (ctx, next) => {
  ctx.body = '유저 정보 수정'; 
});
router.post('/USER/:id', (ctx, next) => {
  ctx.body = '유저 정보 삭제'; 
});


app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen(3000);
