// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/controller/base';
import ExportCommon from '../../../app/controller/common';
import ExportHome from '../../../app/controller/home';
import ExportHours24 from '../../../app/controller/hours24';

declare module 'egg' {
  interface IController {
    base: ExportBase;
    common: ExportCommon;
    home: ExportHome;
    hours24: ExportHours24;
  }
}
