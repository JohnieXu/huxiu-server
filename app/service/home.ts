import { Service } from 'egg';
import { ArticleType, HomeArticles, HomeBanners, Hours24Contens } from './shared';

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
  public async hours24List(limit: Number = 5) : Promise<Hours24Contens> {
    console.log(limit)
    return [
      {
        user_name: '影子君',
        user_avatar: 'https://img.huxiucdn.com/auth/data/avatar/001/68/05/71_1545615336.jpg',
        content: '特朗普嫌小女儿太胖拒合影？美女助理泄密遭解雇。美国总统特朗普的小女儿蒂芙尼现年26岁。近日有媒体发布了蒂芙尼的照片，有传闻称，特朗普嫌小女儿太胖拒绝与其同框，消息传出后引发一片哗然。特朗普私人女助理玛德琳·韦斯特豪特于8月29日辞职，原因之一就是她将特朗普的家事外传给了媒体，引火烧身遭解职。 （via 看看新闻）'
      },
      {
        user_name: '影子君2',
        user_avatar: 'https://img.huxiucdn.com/auth/data/avatar/001/68/05/71_1545615336.jpg',
        content: '特朗普嫌小女儿太胖拒合影？美女助理泄密遭解雇。美国总统特朗普的小女儿蒂芙尼现年26岁。近日有媒体发布了蒂芙尼的照片，有传闻称，特朗普嫌小女儿太胖拒绝与其同框，消息传出后引发一片哗然。特朗普私人女助理玛德琳·韦斯特豪特于8月29日辞职，原因之一就是她将特朗普的家事外传给了媒体，引火烧身遭解职。 （via 看看新闻）'
      }
    ]
  }
}
