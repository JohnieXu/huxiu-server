import { Controller } from 'egg'
import { responseJson } from './common'
import { Articles, Hots } from '../service/shared'

export default class Hours24  extends Controller {
  /**
   * 最新列表
   */
  public async newsList() {
    const { ctx } = this
    try {
      const data: Articles = await ctx.service.hours24.newsList()
      ctx.body = responseJson(true, '', data)
    } catch(e) {
      ctx.body = responseJson(false, '未知异常', e)
    }
  }
  /**
   * 热门列表
   */
  public async hotList() {
    const { ctx } = this
    try {
      const data: Hots = await ctx.service.hours24.hotList()
      ctx.body = responseJson(true, '', data)
    } catch(e) {
      ctx.body = responseJson(false, '未知异常', e)
    }
  }
  /**
   * 发布动态
   */
  public async postNews() {
    const { ctx } = this
    const postData = ctx.request.body
    try {
      const data = ctx.service.hours24.postNews(postData)
      ctx.body = responseJson(true, '', data)
    } catch(e) {
      ctx.body = responseJson(false, '未知异常', e)
    }
  }
}