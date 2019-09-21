import { Service } from 'egg';

interface Category {
  title: string;
  id: number;
  pid?: number;
  children?: Category[];
}

export default class Base extends Service {
  /**
   * 用户注册
   * @param user 用户资料
   */
  public async createUser(user): Promise<any> {
    let res = await this.app.mysql.insert('user', user);
    const insertId = res.insertId;
    if (insertId) {
      res = await this.app.mysql.get('user', {
        id: insertId,
      });
    }
    delete res.password;
    return res;
  }
  /**
   * 获取全部文章分类
   */
  public async getAllCategories(): Promise<Category[] | string> {
    const res = await this.app.mysql.select('article_type');
    return res;
  }
  /**
   * 创建文章分类
   * @param category 文章分类
   */
  public async createCategory(category): Promise<any> {
    let res = await this.app.mysql.insert('article_type', category);
    const insertId = res.insertId;
    if (insertId) {
      res = await this.app.mysql.get('article_type', {
        id: insertId,
      });
      const userId = res.created_user;
      let user;
      if (userId) {
        user = await this.app.mysql.get('user', { id: userId });
        // tslint:disable-next-line: no-unused-expression
        user && (res.created_user = user);
      }
    }
    return res;
  }
}
