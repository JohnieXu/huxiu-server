import { responseJson } from '../controller/common';

export default () => {
  return async (ctx, next) => {
    let token = '';
    if (
      ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      token = ctx.headers.authorization.split(' ')[1];
    } else if (ctx.query.accesstoken) {
      token = ctx.query.accesstoken;
    } else if (ctx.request.body.accesstoken) {
      token = ctx.request.body.accesstoken;
    }
    if (!token) {
      ctx.body = responseJson(false, '你还没有登录', {});
      return;
    }
    const user = await ctx.service.user.getUserByToken(token);
    if (!user) {
      ctx.body = responseJson(false, '无效的token', {});
      return;
    }
    await next();
  };
};
