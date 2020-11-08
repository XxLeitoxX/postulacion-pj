publicPath: process.env.NODE_ENV === 'production'
module.exports = {
	//publicPath: process.env.NODE_ENV === 'production'

	//option
    //Basic path
    publicPath = process.env.NODE_ENV === 'production' ? './' : '/',
    //Output directory at build time
    outputDir = 'dist',
    //Set directory for static resources
    assetsDir: 'static',
    //Output path of html
    indexPath: 'index.html',
    //File name hash
    filenameHashing: true,
    //For multi page configuration, default is undefined
    pages: {
        //page's entry file
        entry: 'src/index/main.js',
        //template file
        template: 'public/index.html',
        //Output file in dist/index.html
        filename: 'index.html',
        // When using the page title option,
        // The title tag in template needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // The blocks contained in this page, by default, contain
        // Extracted general chunks and vendor chunk s.
        chunks: ['chunk-vendos', 'chunk-common', 'index'],
    },
}