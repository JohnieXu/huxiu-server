import 'egg';
import { Context } from 'egg';

interface DBResult {
  insertId?: number,
  fieldCount?: number,
  affectedRows?: number,
  changedRows?: number,
  message?: string
}

declare module 'egg' {
  interface Application {
    // TODO: 补充完善egg-mysql的ts类型定义文件
    mysql: {
      // curd
      insert: (string, any) => Promise<DBResult>;
      get: (string, any?) => Promise<any>;
      select: (string, any?) => Promise<[]>;
      update: (string, any) => Promise<DBResult>;
      updateRows: (string, any) => Promise<DBResult>;
      delete: (string, any?) => Promise<DBResult>;
      query: (string, any?) => Promise<any[]>;
      queryOne: () => Promise<DBResult>;
      count: () => Promise<any>;
      // transaction
      beginTransaction: () => Generator;
      beginTransactionScope: (fn: Function<{
        get: (string, any) => Promise<DBResult>;
        select: (string, any?) => Promise<[]>;
        insert: (string, any) => Promise<DBResult>;
        update: (string, any) => Promise<DBResult>;
        delete: (string, any) => Promise<DBResult>;
      }>, ctx: Context) => Promise<DBResult>;
      // utils
      escape: (value: string, stringifyObjects: Object[], timeZone: string) => Promise<any>;
      escapeId: (value: string, forbidQualified: boolean) => Promise<any>;
      format: (sql: string, values: any, stringifyObjects: Object[], timeZone: string) => Promise<any>;
      // literals
      literals: {
        now: () => Date,
        Literal: (literal: string) => any
      }
    };
  }
}

/**
 * 代理商商收益：分润金额
 * 代理商分润率：成本费率
 * 商户收益：商户入账
 * 支付总金额(元)	 => 第二位
 */