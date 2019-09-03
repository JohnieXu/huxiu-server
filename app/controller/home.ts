import { Controller } from 'egg';
import { responseJson } from './common';

export default class HomeController extends Controller {
  /**
   * ping测试
   */
  public async index() {
    const { ctx } = this;
    try {
      const data = await ctx.service.test.sayHi('egg');
      ctx.body = responseJson(true, '', data);
    } catch (e) {
      ctx.body = responseJson(false, '未知异常', e);
    }

  }
  /**
   * 首页文章列表
   */
  public async articleList() {
    const { ctx } = this;
    try {
      const data = await ctx.service.home.articleList();
      ctx.body = responseJson(true, '', data);
    } catch (e) {
      ctx.body = responseJson(false, '未知异常', e);
    }
  }
  public async bannerList() {
    const { ctx } = this;
    try {
      const data = await ctx.service.home.bannerList();
      ctx.body = responseJson(true, '' , data);
    } catch (e) {
      ctx.body = responseJson(false, '未知异常', e);
    }
  }
  public async hours24List() {
    const { ctx } = this;
    try {
      const data = await ctx.service.home.hours24List();
      ctx.body = responseJson(true, '', data);
    } catch (e) {
      ctx.body = responseJson(false, '未知异常', e);
    }
  }
  public async appLinkImage() {
    const { ctx } = this;
    try {
      const data = await ctx.service.home.appLinkImage();
      ctx.body = responseJson(true, '', data);
    } catch (e) {
      ctx.body = responseJson(false, '未知异常', e);
    }
  }
}
