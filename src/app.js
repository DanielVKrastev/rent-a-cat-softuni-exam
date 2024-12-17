import './config/firebaseInit.js';
import page from "./lib/page.js";
import layoutView from "./views/layoutView.js";

import catsView from "./views/cats/catsView.js";
import homeView from "./views/homeView.js";
import loginView from './views/loginView.js';
import { authMiddleware } from './middlewares/auth.js';
import logoutView from './views/logoutView.js';
import registerView from './views/registerView.js';
import createView from './views/cats/createView.js';

// Setup layout
page(authMiddleware);
page(layoutView);

// Setup Routing
page('/', homeView);
page('/cats', catsView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/cats/create', createView);

//Start rounting
page.start();