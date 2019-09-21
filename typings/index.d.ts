import 'egg';

declare module 'egg' {
  interface Application {
    // TODO: 补充完善egg-mysql的ts类型定义文件
    mysql: {
      get: (string, any?) => Promise<any>;
      insert: (string, any) => Promise<any>;
      update: (string, any) => Promise<any>;
      delete: (string, any?) => Promise<any>;
      query: (string, any?) => Promise<any>;
      select: (string, any?) => Promise<[]>;
    };
  }
}