import './config/firebaseInit.js';
import page from "./lib/page.js";
import layoutView from "./views/layoutView.js";

import catsView from "./views/catsView.js";
import homeView from "./views/homeView.js";

// Setup layout
page(layoutView);

// Setup Routing
page('/', homeView);
page('/cats', catsView);

//Start rounting
page.start();