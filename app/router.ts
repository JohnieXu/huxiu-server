import { Application } from 'egg';

const BASE_URL = '/api/v1';

export default (app: Application) => {
  const { controller, router } = app;
  // ping测试
  router.get(`${BASE_URL}/ping`, controller.home.index);
  // 首页
  router.get(`${BASE_URL}/home/article_list`, controller.home.articleList);
  router.get(`${BASE_URL}/home/banner_list`, controller.home.bannerList);
  router.get(`${BASE_URL}/home/hours24_list`, controller.home.hours24List);
  router.get(`${BASE_URL}/home/app_link_image`, controller.home.appLinkImage);
  router.get(`${BASE_URL}/base/all_categories`, controller.base.getAllCategories);
  // 24小时
  router.get(`${BASE_URL}/hours24/news_list`, controller.hours24.newsList);
  router.get(`${BASE_URL}/hours24/hot_list`, controller.hours24.hotList);
  router.post(`${BASE_URL}/hours24/post_news`, controller.hours24.postNews);
};
