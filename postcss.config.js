const autoprefixer = require("autoprefixer");
const cssnext = require('postcss-cssnext');
const precss = require('precss');

 
module.exports = {
    plugins: [
		cssnext(),
		precss()
        // autoprefixer({
        //     overrideBrowserslist: ["last 5 version"]
        // })
    ]
};