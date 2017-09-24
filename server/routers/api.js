import Router from "koa-router";

const router = new Router({
  prefix: "/api/v1"
});

router.post("/auth", async ctx => {
  ctx.session.auth = true;
  const { password } = ctx.request.body;
  ctx.session.authenticated = password === process.env.PASSWORD;
  ctx.body = { ok: ctx.session.authenticated };
});

export default router;
