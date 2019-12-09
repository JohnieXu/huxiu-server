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
      ctx.body = responseJson(false, e.message || '未知异常', e);
    }
  }
  /**
   * 用户登录
   */
  public async userLogin() {
    const { ctx } = this;
    const user = ctx.request.body;
    try {
      const data = await ctx.service.user.login(user);
      // 保存token TODO: 缓存至redis
      ctx.service.token.save(data.id, data.token);
      ctx.body = responseJson(true, '', data);
    } catch (e) {
      ctx.body = responseJson(false, e.message || '未知异常', e);
    }
  }
  /**
   * 用户登出
   */
  public async userLogout() {
    const { ctx } = this;
    const token = ctx.request.headers.token;
    try {
      await ctx.service.user.logout(token);
      ctx.body = responseJson(true, '退出登录成功', null);
    } catch (e) {
      ctx.body = responseJson(false, e.message || '未知异常', e);
    }
  }
  /**
   * 用户基本信息
   */
  public async getUserInfo() {
    const { ctx } = this;
    const { username } = ctx.params;
    try {
      const data = await ctx.service.user.userInfo(username);
      ctx.body = responseJson(true, '', data);
    } catch (e) {
      ctx.body = responseJson(false, e.message || '未知异常', e);
    }
  }
  /**
   * 用户信息（带权限信息）
   */
  public async getUserInfoWithPermission() {
    const { ctx } = this;
    const { username } = ctx.params;
    try {
      const data = await ctx.service.user.userInfoWithPermission(username);
      ctx.body = responseJson(true, '', data);
    } catch (e) {
      ctx.body = responseJson(false, e.message || '未知异常', e);
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
      ctx.body = responseJson(false, e.message || '未知异常', e);
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
      ctx.body = responseJson(false, e.message || '未知异常', e);
    }
  }
}
