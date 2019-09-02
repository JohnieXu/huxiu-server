import { Service } from 'egg';
import { ArticleType, HomeArticles, HomeBanners } from './shared';

export default class Home extends Service {
  public async articleList(): Promise<HomeArticles> {
    return [
      {
        id: 156123113,
        title: 'B站Q2财报：二次元出去，新用户进来',
        images: [
          {
            thumbnail: 'https://img.huxiucdn.com/article/cover/201908/27/195927742019.jpg?imageView2/1/w/522/h/295/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
            url: 'https://img.huxiucdn.com/article/cover/201908/27/195927742019.jpg?imageView2/1/w/522/h/295/|imageMogr2/strip/interlace/1/quality/85/format/jpg'
          }
        ],
        tag: '原创',
        type: ArticleType.Normal,
        user: {
          id: 0,
          name: 'JohnieXu',
          avatar: '',
          slogo: '',
          is_authorized: false,
          is_followed: false
        },
        meta: {
          created_at: '2019-06-06 10:10:10'
        },
        favorite_count: 50
      }
    ]
  }
  public async bannerList(limit: Number = 3): Promise<HomeBanners> {
    console.log(limit)
    return [
      {
        id: 1231,
        title: '电动理想，烧油有理？',
        image_url: 'https://img.huxiucdn.com/article/cover/201908/28/181812343451.jpg?imageView2/1/w/750/h/422/|imageMogr2/strip/interlace/1/quality/85/format/jpg'
      },
      {
        id: 1232,
        title: '中台经验谈：从京东、阿里到科蒂',
        image_url: 'https://img.huxiucdn.com/article/cover/201909/02/080048845509.jpg?imageView2/1/w/750/h/422/|imageMogr2/strip/interlace/1/quality/85/format/jpg'
      },
      {
        id: 1233,
        title: '只有融不到钱的共享单车能活下来',
        image_url: 'https://img.huxiucdn.com/article/cover/201908/28/103613326464.jpg?imageView2/1/w/750/h/422/|imageMogr2/strip/interlace/1/quality/85/format/jpg'
      },
    ]
  }
}
