
export type Articles = Article[];
export type Hots = Hot[];

// 文章类型
export const enum EnumArticleType {
  Normal = 'normal',
  Image = 'picture',
  Video = 'video',
}

// 基本文章
export interface BasicArticle {
  id: number;
  meta: ArticleMeta;
  user: User;
  type: EnumArticleType;
  images?: Image[];
  video_url?: string;
}

// 文章
export type Article = BasicArticle & {
  content: string,
  is_liked: boolean,
};

// 文章meta
export interface ArticleMeta {
  created_at: string;
  share_link?: string;
}

// 图片
export interface Image {
  thumbnail: string;
  url: string;
}

// 用户
export interface User {
  id: number;
  name: string;
  slogo: string;
  avatar: string;
  is_authorized: boolean;
  is_followed: boolean;
}

// 24小时图
export interface NewsImage {
  name: string;
  url: string;
}

// 24小时文章
export interface News {
  content: string;
  origin_url?: string;
  images?: NewsImage[];
  votes?: [string, string, string, string];
}

// 热点背景图尺寸比例
export const enum HotCoverSize {
  horizental = '16:9',
  vertical = '10:16',
}

export interface Hot {
  id: number;
  tag: string;
  title: string;
  created_at: string;
  join_count: number;
  cover: string;
  size: HotCoverSize;
}

// 文章类型
export interface ArticleType {
  id?: number;
  label: string; // 分类标题
  parent_id?: number; // 父级分类ID
  value: string; // 分类值
  created_at?: number;
  updated_at?: number;
  created_user: number; // 创建者ID
}

// 首页文章
export type HomeArticle = BasicArticle & {
  title: string,
  tag: string,
  favorite_count: number,
};

// 首页文章列表
export type HomeArticles = HomeArticle[];

// 首页轮播
export interface HomeBanner {
  id: number;
  title: string;
  image_url: string;
}

// 首页轮播列表
export type HomeBanners = HomeBanner[];

// 首页24小时
export interface Hours24Content {
  user_name: string;
  user_avatar: string;
  content: string;
  image?: string;
}

// 首页24小时列表
export type Hours24Contens = Hours24Content[];

// 首页App推广链接
export interface AppLinkImage {
  image_url: string;
  link_url: string;
  tag?: string;
}

// 评论
export interface Comment {
  id: number;
  user: User;
  article_id?: number;
  parent_id?: number;
  content: string;
  liked?: string;
  unliked?: string;
  created_at: Date;
  updated_at?: Date;
}

// 评论列表
export type Comments = Comment[];
