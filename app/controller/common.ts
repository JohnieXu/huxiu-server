export interface ResponseJson {
  code: Number,
  message: String,
  data: String | Number | Object | Array<any>
}

/**
 * 格式化JSON返回值
 * @param success 是否成功
 * @param message 失败提示信息
 * @param data 返回数据
 */
export function responseJson(success: Boolean, message: String, data: String | Number | Object | Array<any>): ResponseJson {
  return {
    code: success ? 0 : 1,
    message,
    data
  }
}
