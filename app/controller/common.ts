export interface ResponseJson {
  code: number;
  message: string;
  data: string | number | object | any[];
}

/**
 * 格式化JSON返回值
 * @param success 是否成功
 * @param message 失败提示信息
 * @param data 返回数据
 */
export function responseJson(success: boolean, message: string, data: string | number | object | any[]): ResponseJson {
  return {
    code: success ? 0 : 1,
    message,
    data,
  };
}
