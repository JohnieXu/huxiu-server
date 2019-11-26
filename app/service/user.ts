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
      throw new Error('该账号未注册');
    }
    const res = await this.app.mysql.get('user', { name: user.username, password: utils.sha256(user.password) });
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
  /**
   * 查询用户基本信息
   * @param username 用户名
   */
  public async userInfo(username: string): Promise<any> {
    const user = await this.app.mysql.query('SELECT * FROM user WHERE user.name=?', username) as any;
    // tslint:disable-next-line: no-string-literal
    // tslint:disable-next-line: no-unused-expression
    user.password && delete user.password;
    return user;
  }
  /**
   * 查询带权限的用户信息
   * @param username 用户名
   */
  public async userInfoWithPermission(username: string): Promise<any> {
    const user = await this.app.mysql.query('SELECT user.id as user_id, user.name as user_name, user.avatar as avatar, role.name as role_name FROM user LEFT JOIN role ON user.role_id=role.id WHERE user.name=?', username);
    return user;
  }
  // 用户注销
}
