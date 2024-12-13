import './config/firebaseInit.js';
import page from "./lib/page.js";
import layoutView from "./views/layoutView.js";

import catsView from "./views/catsView.js";
import homeView from "./views/homeView.js";
import loginView from './views/loginView.js';
import { authMiddleware } from './middlewares/auth.js';
import logoutView from './views/logoutView.js';

// Setup layout
page(authMiddleware);
page(layoutView);

// Setup Routing
page('/', homeView);
page('/cats', catsView);
page('/login', loginView);
page('/logout', logoutView);

//Start rounting
page.start();