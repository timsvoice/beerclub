angular.module("ngApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("home.html",
    "<div class=\"grid-block\">\n" +
    "  <div class=\"grid-block\">\n" +
    "    <h1>test</h1>\n" +
    "  </div>\n" +
    "  <div class=\"grid-block\">\n" +
    "    <h1>test</h1>\n" +
    "  </div>\n" +
    "  <div class=\"grid-block\">\n" +
    "    <h1>test</h1>\n" +
    "  </div>\n" +
    "</div>"
  );

}]);
