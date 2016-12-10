import { Routes } from '@angular/router';

import { IndexRoutes } from './index/index';
import { ScrollExRoutes } from './scrollEx/index';

export const routes: Routes = [
    ...IndexRoutes
  , ...ScrollExRoutes
];
