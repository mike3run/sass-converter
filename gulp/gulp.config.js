'use strict';

module.exports = {
  // Our main dist folder
  distFolder : './public',
  // Here you add the paths to the scss files you get with Bower to import and work with.
  sassIncludes : [
    './node_modules/modularscale-sass/stylesheets',
    './node_modules/manila-mixins/src',
    './node_modules/sass-bem-constructor/dist'
  ],
  // Stuff for UnCss
  uncssHtml : [
    './public/index.html'
  ],
  uncssIgnore : [
    ''
  ],
  // Asset File Paths
  assets : [
    './src/assets/**/*'
  ],
  errorHandler : function (error) {
    console.log(error.toString());
    this.emit('end');
  }
}
