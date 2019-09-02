
export type Articles = Array<Article>
export type Hots = Array<Hot>

// 文章类型
export const enum ArticleType {
  Normal = 'normal',
  Image = 'picture',
  Video = 'video'
}

export type BasicArticle = {
  id: Number,
  meta: ArticleMeta,
  user: User,
  type: ArticleType,
  images?: Array<Image>
  video_url?: String,
}

export type Article = BasicArticle & {
  content: String,
  is_liked: Boolean
}

export type ArticleMeta = {
  created_at: String,
  share_link?: String
}

export type Image = {
  thumbnail: String,
  url: String
}

export type User = {
  id: Number,
  name: String,
  slogo: String,
  avatar: String,
  is_authorized: Boolean,
  is_followed: Boolean
}

export type NewsImage = {
  name: String,
  url: String
}

export type News = {
  content: String,
  origin_url?: String,
  images?: NewsImage[],
  votes?: [String, String, String, String]
}

// 热点背景图尺寸比例
export const enum HotCoverSize {
  horizental = '16:9',
  vertical = '10:16'
}

export type Hot = {
  id: Number,
  tag: String,
  title: String,
  created_at: String,
  join_count: Number,
  cover: String,
  size: HotCoverSize
}

export type HomeArticle = BasicArticle & {
  title: String,
  tag: String,
  favorite_count: Number
}

export type HomeArticles = Array<HomeArticle>

// 首页轮播
export type HomeBanner = {
  id: Number,
  title: String,
  image_url: String
}

export type HomeBanners = Array<HomeBanner>
