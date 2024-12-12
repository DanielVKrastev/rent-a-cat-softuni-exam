import page from "./lib/page.js";

import catsView from "./views/catsView.js";
import homeView from "./views/homeView.js";
import layoutView from "./views/layoutView.js";

page(layoutView);

// Setup Routing
page('/', homeView);
page('/cats', catsView);

//Start rounting
page.start();