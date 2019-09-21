import { Controller } from 'egg';
import { responseJson } from './common';

export default class Base extends Controller {
  /**
   * 用户注册
   */
  public async createUser() {
    const { ctx } = this;
    const user = ctx.request.body;
    try {
      const data = await ctx.service.base.createUser(user);
      ctx.body = responseJson(true, '', data);
    } catch (e) {
      ctx.body = responseJson(false, '未知异常', e);
    }
  }
  /**
   * 获取全部文章分类
   */
  public async getAllCategories() {
    const { ctx } = this;
    try {
      const data = await ctx.service.base.getAllCategories();
      ctx.body = responseJson(true, '', data);
    } catch (e) {
      ctx.body = responseJson(false, '未知异常', e);
    }
  }
  /**
   * 创建文章分类
   */
  public async createCategory() {
    const { ctx } = this;
    const category = ctx.request.body;
    try {
      const data = await ctx.service.base.createCategory(category);
      ctx.body = responseJson(false, '', data);
    } catch (e) {
      ctx.body = responseJson(false, '未知异常', e);
    }
  }
}
