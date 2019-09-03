
export type Articles = Article[];
export type Hots = Hot[];

// 文章类型
export const enum ArticleType {
  Normal = 'normal',
  Image = 'picture',
  Video = 'video',
}

export interface BasicArticle {
  id: number;
  meta: ArticleMeta;
  user: User;
  type: ArticleType;
  images?: Image[];
  video_url?: string;
}

export type Article = BasicArticle & {
  content: string,
  is_liked: boolean,
};

export interface ArticleMeta {
  created_at: string;
  share_link?: string;
}

export interface Image {
  thumbnail: string;
  url: string;
}

export interface User {
  id: number;
  name: string;
  slogo: string;
  avatar: string;
  is_authorized: boolean;
  is_followed: boolean;
}

export interface NewsImage {
  name: string;
  url: string;
}

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

export type HomeArticle = BasicArticle & {
  title: string,
  tag: string,
  favorite_count: number,
};

export type HomeArticles = HomeArticle[];

// 首页轮播
export interface HomeBanner {
  id: number;
  title: string;
  image_url: string;
}

export type HomeBanners = HomeBanner[];

// 首页24小时
export interface Hours24Content {
  user_name: string;
  user_avatar: string;
  content: string;
}

export type Hours24Contens = Hours24Content[];

// 首页App推广链接
export interface AppLinkImage {
  image_url: string;
  link_url: string;
  tag?: string;
}
