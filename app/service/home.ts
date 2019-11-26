import { Service } from 'egg';
import { EnumArticleType, HomeArticles, HomeBanners, Hours24Contens, AppLinkImage, Article, Comments, Comment } from './shared';

export default class Home extends Service {
  /**
   * 查询首页文章列表
   */
  public async articleList(): Promise<HomeArticles> {
    return [
      {
        id: 156123113,
        title: 'B站Q2财报：二次元出去，新用户进来',
        images: [
          {
            thumbnail: 'https://img.huxiucdn.com/article/cover/201908/27/195927742019.jpg?imageView2/1/w/522/h/295/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
            url: 'https://img.huxiucdn.com/article/cover/201908/27/195927742019.jpg?imageView2/1/w/522/h/295/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
          },
        ],
        tag: '原创',
        type: EnumArticleType.Normal,
        user: {
          id: 0,
          name: 'JohnieXu',
          avatar: '',
          slogo: '',
          is_authorized: false,
          is_followed: false,
        },
        meta: {
          created_at: '2019-06-06 10:10:10',
        },
        favorite_count: 50,
      },
    ];
  }
  /**
   * 查询轮播图
   * @param limit 最大数量
   */
  public async bannerList(limit: number = 3): Promise<HomeBanners> {
    console.log(limit);
    return [
      {
        id: 1231,
        title: '电动理想，烧油有理？',
        image_url: 'https://img.huxiucdn.com/article/cover/201908/28/181812343451.jpg?imageView2/1/w/750/h/422/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
      },
      {
        id: 1232,
        title: '中台经验谈：从京东、阿里到科蒂',
        image_url: 'https://img.huxiucdn.com/article/cover/201909/02/080048845509.jpg?imageView2/1/w/750/h/422/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
      },
      {
        id: 1233,
        title: '只有融不到钱的共享单车能活下来',
        image_url: 'https://img.huxiucdn.com/article/cover/201908/28/103613326464.jpg?imageView2/1/w/750/h/422/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
      },
    ];
  }
  /**
   * 分页查询24小时列表
   * @param limit 最大数量
   */
  public async hours24List(limit: number = 5): Promise<Hours24Contens> {
    console.log(limit);
    return [
      {
        user_name: '影子君',
        user_avatar: 'https://img.huxiucdn.com/auth/data/avatar/001/68/05/71_1545615336.jpg',
        content: '特朗普嫌小女儿太胖拒合影？美女助理泄密遭解雇。美国总统特朗普的小女儿蒂芙尼现年26岁。近日有媒体发布了蒂芙尼的照片，有传闻称，特朗普嫌小女儿太胖拒绝与其同框，消息传出后引发一片哗然。特朗普私人女助理玛德琳·韦斯特豪特于8月29日辞职，原因之一就是她将特朗普的家事外传给了媒体，引火烧身遭解职。 （via 看看新闻）',
      },
      {
        user_name: '影子君2',
        user_avatar: 'https://img.huxiucdn.com/auth/data/avatar/001/68/05/71_1545615336.jpg',
        content: '特朗普嫌小女儿太胖拒合影？美女助理泄密遭解雇。美国总统特朗普的小女儿蒂芙尼现年26岁。近日有媒体发布了蒂芙尼的照片，有传闻称，特朗普嫌小女儿太胖拒绝与其同框，消息传出后引发一片哗然。特朗普私人女助理玛德琳·韦斯特豪特于8月29日辞职，原因之一就是她将特朗普的家事外传给了媒体，引火烧身遭解职。 （via 看看新闻）',
      },
    ];
  }
  /**
   * 获取应用推广图片
   */
  public async appLinkImage(): Promise<AppLinkImage> {
    return {
      image_url: 'https://static.huxiucdn.com/m/image/moment_ad_banner.png',
      link_url: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.huxiu',
    };
  }
  /**
   * 查询文章详情
   * @param articleId 文章ID
   */
  public async articleDetail(articleId: string | number): Promise<Article> {
    const res = await this.app.mysql.get('article', {
      id: articleId,
    });
    return res;
  }
  /**
   * 查询文章评论(带层级)
   * @param commentId 评论ID
   */
  public async articleComments(articleId: string | number): Promise<Comments> {
    // TODO: 区分热门评论和最新评论
    const res = await this.app.mysql.query('comment', {
      id: articleId,
    });
    return res;
  }
  /**
   * 添加评论
   * @param comment 评论内容
   */
  public async createComment(comment: {
    user_id: string | number,
    content: string,
    parent_id?: string | number,
    article_id?: string | number,
  }): Promise<Comment> {
    const res = await this.app.mysql.insert('comment', comment);
    console.log(res);
    return {
      id: 0,
      user: {
        id: 0,
        name: '',
        slogo: '',
        avatar: '',
        is_authorized: false,
        is_followed: false,
      },
      content: '',
      created_at: new Date(),
    };
  }
}
