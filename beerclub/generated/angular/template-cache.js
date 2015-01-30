angular.module("ngApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("home.html",
    "<div class=\"container\">\n" +
    "  \n" +
    "  <div class=\"new-beer\">\n" +
    "    <h4 class=\"new-beer-title\">New Beer</h4>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"beer-container\">\n" +
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

}]);
