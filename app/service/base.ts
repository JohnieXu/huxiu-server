import { Service } from 'egg';

interface Category {
  title: string,
  id: number,
  pid?: number,
  children?: Category[]
}

export default class Base extends Service {
  public async getAllCategories(): Promise<Category[]> {
    return [
      {
        title: '资讯',
        id: 100001,
        children: [
          {
            title: '电商消费',
            id: 200001,
            pid: 100001
          }
        ]
      }
    ]
  }
}