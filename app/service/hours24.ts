import { Service } from 'egg'

// types
import {Articles, ArticleType, HotCoverSize, News, Hots } from './shared'

export default class Hours24 extends Service {
  public async newsList(): Promise<Articles> {
    return [
      {
        id: 11314131,
        user: {
          id: 135213131,
          name: '棱镜深网',
          slogo: '',
          avatar: '',
          is_authorized: true,
          is_followed: false
        },
        meta: {
          created_at: '2019-09-12 20:00:31',
          share_link: 'https://m.huxiu.com/article/315201.html'
        },
        content: '蔡崇信1/3身家投向NBA：科技新贵们的“奢侈爱好”',
        is_liked: false,
        type: ArticleType.Normal,
        images: [
          {
            thumbnail: 'https://img.huxiucdn.com/article/cover/201908/27/110209840139.jpg?imageView2/1/w/1350/h/759/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
            url: 'https://img.huxiucdn.com/article/cover/201908/27/110209840139.jpg?imageView2/1/w/1350/h/759/|imageMogr2/strip/interlace/1/quality/85/format/jpg'
          }
        ]
      }
    ]
  }
  public async hotList(currentTime?: String): Promise<Hots> {
    console.log(currentTime)
    return [
      {
        id: 12351,
        tag: '直播ING',
        title: '斗鱼永久封停乔碧萝直播间',
        created_at: '2019-8-36 20:01:23',
        join_count: 1453,
        cover: 'https://img.huxiucdn.com/article/cover/201908/02/121338431951.jpg?imageView2/1/w/600/h/337/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
        size: HotCoverSize.horizental
      }
    ]
  }
  public async postNews(data: News) {
    console.log(data)
    return {}
  }
}
