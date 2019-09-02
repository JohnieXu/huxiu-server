// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportHome from '../../../app/service/home';
import ExportHours24 from '../../../app/service/hours24';
import ExportShared from '../../../app/service/shared';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    home: ExportHome;
    hours24: ExportHours24;
    shared: ExportShared;
  }
}
