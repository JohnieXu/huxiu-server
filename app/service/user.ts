import { Service } from 'egg';
import * as utils from 'utility';

export interface ICommonUser {
  [key: string]: any;
  name: string;
  password: string;
}

export interface IUserLogin {
  name: string;
  token: string;
}

export default class User extends Service {
  /**
   * 普通用户注册
   * @param user 用户资料
   */
  public async register(user: ICommonUser): Promise<any> {
    user.password = utils.sha256(user.password);
    let res = await this.app.mysql.insert('user', user) as any;
    const insertId = res.insertId;
    if (insertId) {
      res = this.app.mysql.get('user', {
        id: insertId,
      });
    }
    delete res.password;
    return res;
  }
  /**
   * 用户登录
   * @param user 登录账号密码
   */
  public async login(user: { username: string, password: string }): Promise<IUserLogin> {
    const isExists = await this.app.mysql.get('user', { name: user.username });
    if (!isExists) {
      return Promise.reject(new Error('该账号未注册'));
    }
    const res = await this.app.mysql.get('user', { name: user.username, password: utils.sha256(user.password) });
    console.log(res);
    // TODO: 连接redis保存用户登录状态
    if (!res) {
      return Promise.reject(new Error('用户名或密码错误'));
    }
    const token = this.app.jwt.sign(user, this.app.config.jwt.secret)
    delete res.password;
    return {
      ...res,
      token,
    };
  }
  // 用户登录
  // 用户注销
}
