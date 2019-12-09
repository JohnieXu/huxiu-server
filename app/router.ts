import { Application } from 'egg';

const BASE_URL = '/api/v1';
const genUrl = path => `${BASE_URL}${path}`;

export default (app: Application) => {
  const { controller, router, middleware } = app;
  const tokenRequired = middleware.tokenRequired();
  // ping测试
  router.get(genUrl('/ping'), controller.home.index);
  // 首页
  router.get(genUrl('/home/article_list'), controller.home.articleList);
  router.get(genUrl('/home/banner_list'), controller.home.bannerList);
  router.get(genUrl('/home/hours24_list'), controller.home.hours24List);
  router.get(genUrl('/home/app_link_image'), controller.home.appLinkImage);
  // 24小时
  router.get(genUrl('/hours24/news_list'), controller.hours24.newsList);
  router.get(genUrl('/hours24/hot_list'), controller.hours24.hotList);
  router.post(genUrl('/hours24/post_news'), controller.hours24.postNews);
  // 基础接口
  router.post(genUrl('/base/user/register'), controller.base.createUser);
  router.get(genUrl('/base/user_permission/:username'), controller.base.getUserInfoWithPermission);
  router.post(genUrl('/base/user/login'), controller.base.userLogin);
  router.get(genUrl('/base/user/logout'), controller.base.userLogout);
  router.get(genUrl('/base/user/:username'), controller.base.getUserInfo);
  router.get(genUrl('/base/all_categories'), controller.base.getAllCategories);
  router.post(genUrl('/base/create_category'), tokenRequired, controller.base.createCategory);
};
