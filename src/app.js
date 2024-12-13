import app from './config/firebaseInit.js';
import page from "./lib/page.js";
import layoutView from "./views/layoutView.js";

import catsView from "./views/catsView.js";
import homeView from "./views/homeView.js";
import loginView from './views/loginView.js';

console.log(app);


// Setup layout
page(layoutView);

// Setup Routing
page('/', homeView);
page('/cats', catsView);
page('/login', loginView);

//Start rounting
page.start();