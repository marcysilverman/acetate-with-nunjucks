module.exports = function (acetate) {
  // load all html and markdown files from our source folder
  acetate.load('**/*.+(html|md)');

  // define a default layout to use on all pages
  acetate.layout('documentation/**/*', 'layouts/_documentation:content');

  // load the CNAME file
  acetate.load('CNAME');

  // dont layout hte CNAME file
  acetate.layout('CNAME', false);
};