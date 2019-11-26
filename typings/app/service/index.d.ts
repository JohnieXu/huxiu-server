// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportBase from '../../../app/service/base';
import ExportHome from '../../../app/service/home';
import ExportHours24 from '../../../app/service/hours24';
import ExportShared from '../../../app/service/shared';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    base: ExportBase;
    home: ExportHome;
    hours24: ExportHours24;
    shared: ExportShared;
    user: ExportUser;
  }
}
