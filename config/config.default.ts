import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {
    security: {
      csrf: false,
      domainWhiteList: [ 'http://localhost:3000' ],
    },
    cors: {
      origin: '*',
      allowMethods: '*',
    },
    mysql: {
      client: {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'huxiu',
      },
      // 是否挂载到app上 默认：true
      app: true,
      // 是否挂载到agent上 默认：false
      agent: false,
    },
  } as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1566917941734_6157';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
