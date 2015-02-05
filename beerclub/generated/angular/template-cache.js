angular.module("ngApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("beer.html",
    "\n" +
    "<div class=\"header\">\n" +
    "  <span class=\"title left\">Beer Club</span>\n" +
    "  <span class=\"new-beer right\">\n" +
    "    <a href=\"#\" zf-toggle=\"new-beer-panel\">+</a>\n" +
    "  </span>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"app-container\">\n" +
    "  <div zf-panel=\"\" class=\"new-beer-panel\" id=\"new-beer-panel\">\n" +
    "    <span class=\"new-beer-search\">\n" +
    "      <input type=\"search\" placeholder=\"Allagash Saison\"></input>\n" +
    "      <div class=\"button secondary\">Search</div>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"beer-container\">\n" +
    "      <div class=\"beer-list\">\n" +
    "        <div class=\"beer-item\" ng-repeat=\"beer in beers\">\n" +
    "          <div class=\"beer-ratings-star\">\n" +
    "            <h4 class=\"beer-ratings-number\">{{beer.rating}}</h4>\n" +
    "          </div>\n" +
    "          <div class=\"beer-details\">\n" +
    "            <div class=\"beer-name\">{{beer.name}}</div>\n" +
    "            <div class=\"beer-brewery\">{{beer.brewery}}</div>\n" +
    "            <div class=\"beer-location\">{{beer.location}}</div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("beers.html",
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "  <div class=\"beer-container\">\n" +
    "\n" +
    "    \n" +
    "    <a class=\"new-beer\" zf-open=\"new-beer-input\">\n" +
    "      <div class=\"new-beer-container\">\n" +
    "          <h4 class=\"new-beer-title\">+</h4>\n" +
    "      </div>\n" +
    "    </a>\n" +
    "\n" +
    "    <div class=\"beer-list\">\n" +
    "      <div class=\"beer-item\" ng-repeat=\"beer in beers\">\n" +
    "        <h2 class=\"beer-name\">{{beer.name}}</h2>\n" +
    "        <h3 class=\"beer-brewery\">{{beer.brewery}}</h3>\n" +
    "        <ul class=\"beer-rating\">\n" +
    "          <li class=\"beer-rating-star\" ng-show=\"{{beer.rating}} >= 1\"></li>\n" +
    "          <li class=\"beer-rating-no-star\" ng-show=\"{{beer.rating}} < 1\"></li>\n" +
    "          <li class=\"beer-rating-star\" ng-show=\"{{beer.rating}} >= 2\"></li>\n" +
    "          <li class=\"beer-rating-no-star\" ng-show=\"{{beer.rating}} < 2\"></li>\n" +
    "          <li class=\"beer-rating-star\" ng-show=\"{{beer.rating}} >= 3\"></li>\n" +
    "          <li class=\"beer-rating-no-star\" ng-show=\"{{beer.rating}} < 3\"></li>\n" +
    "          <li class=\"beer-rating-star\" ng-show=\"{{beer.rating}} >= 4\"></li>\n" +
    "          <li class=\"beer-rating-no-star\" ng-show=\"{{beer.rating}} < 4\"></li>\n" +
    "          <li class=\"beer-rating-star\" ng-show=\"{{beer.rating}} >= 5\"></li>\n" +
    "          <li class=\"beer-rating-no-star\" ng-show=\"{{beer.rating}} < 5\"></li>\n" +
    "        </ul>\n" +
    "        <div class=\"beer-location\">\n" +
    "          <h4 class=\"beer-location-title\">\n" +
    "            The perfect location:\n" +
    "          </h4>\n" +
    "          <p class=\"beer-location-text\">\n" +
    "            {{beer.location}}\n" +
    "          </p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );

  $templateCache.put("grid.html",
    "<!-- slide-in menus -->\n" +
    "\n" +
    "<zf-offcanvas position=\"top\" id=\"menu\">\n" +
    "  <a zf-close=\"\" class=\"close-button\">×</a>\n" +
    "  <input type=\"text\" placeholder=\"Beer name\"></input>\n" +
    "</zf-offcanvas>\n" +
    "<div class=\"grid-frame\">\n" +
    "  <div class=\"grid-block gray\">\n" +
    "    <div class=\"grid-block gray-light small-up-1 medium-up-3\">\n" +
    "      <div class=\"grid-block\">\n" +
    "        <div class=\"grid-content gray-blue\">\n" +
    "          <div class=\"card\">\n" +
    "            <a zf-open=\"menu\" class=\"\">Open Off-canvas</a>\n" +
    "            <h1>test grid</h1>\n" +
    "            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore itaque, nostrum velit possimus, ipsa asperiores! Eligendi provident perspiciatis ea blanditiis, error cumque debitis hic explicabo, harum nam pariatur nesciunt molestiae. Saepe voluptas, recusandae pariatur, doloremque perspiciatis praesentium asperiores quisquam. Ad earum rem labore modi molestiae dignissimos, neque eos officiis quam.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"grid-block\">\n" +
    "        <div class=\"grid-content gray-blue\">\n" +
    "          <div class=\"card\">\n" +
    "            <h1>test grid</h1>\n" +
    "            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore itaque, nostrum velit possimus, ipsa asperiores! Eligendi provident perspiciatis ea blanditiis, error cumque debitis hic explicabo, harum nam pariatur nesciunt molestiae. Saepe voluptas, recusandae pariatur, doloremque perspiciatis praesentium asperiores quisquam. Ad earum rem labore modi molestiae dignissimos, neque eos officiis quam.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>      \n" +
    "      <div class=\"grid-block\">\n" +
    "        <div class=\"grid-content gray-blue\">\n" +
    "          <div class=\"card\">\n" +
    "            <h1>test grid</h1>\n" +
    "            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore itaque, nostrum velit possimus, ipsa asperiores! Eligendi provident perspiciatis ea blanditiis, error cumque debitis hic explicabo, harum nam pariatur nesciunt molestiae. Saepe voluptas, recusandae pariatur, doloremque perspiciatis praesentium asperiores quisquam. Ad earum rem labore modi molestiae dignissimos, neque eos officiis quam.</p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );

}]);
