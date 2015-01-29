/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {

    // As an example, to override the file patterns for
    // the order in which to load third party JS libs:
    //
    
    js: {
      vendor: [
        "vendor/bower/jquery/dist/jquery.min.js",
        "vendor/bower/angular/angular.min.js",
        "vendor/bower/angular-animate/angular-animate.min.js",
        "vendor/bower/angular-touch/angular-touch.min.js",
        "vendor/bower/fastclick/lib/fastclick.js",
        "vendor/bower/foundation-apps/js/angular/foundation.js",
        "vendor/bower/hammerjs/hammer.min.js",
        "vendor/bower/tether/tether.min.js",
        "vendor/bower/ui-router/release/angular-ui-router.min.js",
        "vendor/bower/js/underscore.js",
        "vendor/bower/viewport-units-buggyfill/viewport-units-buggyfill.js",
        "vendor/bower/foundation-apps/js/angular/**/*.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ]
    },

    css: {
      vendor: [
        "vendor/css/**/*.css",
      ]
    },

    sass: {
      vendor: [
      ],
      main:"app/css/app.{sass,scss}"
    }
  };
};
