import { Service } from 'egg';

export default class Token extends Service {
  /**
   * 保存token
   * @param user_id 用户ID
   * @param token token
   * @param valid_time token有效期
   */
  public async save(user_id: number, token: string, valid_time?: number): Promise<any> {
    const user = await this.app.mysql.get('user', { id: user_id }) || {};
    const user_name = user.name || '';
    const record = await this.app.mysql.get('user_login', { user_id });
    if (!record) {
      const expires = 0;
      await this.app.mysql.insert('user_login', { user_id, user_name, token, expires });
    } else {
      const expires = valid_time ? valid_time : 0;
      await this.app.mysql.update('user_login', { id: record.id, user_id, token, expires });
    }
  }
  /**
   * 移除token
   * @param token token
   */
  public async remove(token: string): Promise<{ success: boolean, message?: any }> {
    try {
      await this.app.mysql.delete('user_login', { token });
      return {
        success: true,
      };
    } catch (e) {
      return {
        success: false,
        message: e,
      };
    }
  }
}
