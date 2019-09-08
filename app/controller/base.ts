import { Controller } from 'egg';
import { responseJson } from './common';

export default class Base extends Controller {
  public async getAllCategories() {
    const { ctx } = this
    try {
      const data = await ctx.service.base.getAllCategories()
      ctx.body = responseJson(true, '', data)
    } catch(e) {
      ctx.body = responseJson(false, ' 未知异常', e)
    }
  }
}
