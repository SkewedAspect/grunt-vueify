grunt-vueify
============

Translate `.vue` files to pure JavaScript, _without_ using [Browserify][].

This uses [the Compiler API from Vueify][], and is useful when using [Vue.js][] with [Electron][].

[Browserify]: http://browserify.org/
[the Compiler API from Vueify]: https://github.com/vuejs/vueify#compiler-api
[Vue.js]: http://vuejs.org/
[Electron]: http://electron.atom.io/


Installation
------------

```bash
npm install --save-dev grunt-vueify
```


Usage
-----

Add something like the following to your `Gruntfile.js`:

```javascript
grunt.initConfig({
	vueify: {
		components: {
			files: [
				{
					expand: true,
					src: 'components/**/*.vue',
					dest: 'dist/',
					ext: '.vue.js'
				}
			]
		}
	},
	// ...
});

grunt.loadNpmTasks('grunt-vueify');

grunt.registerTask('default', ['vueify']);
```


Options
-------

* `files` - Standard Grunt configuration for files; see [the Grunt documentation][] for more information.

[the Grunt documentation]: http://gruntjs.com/configuring-tasks#files


Configuring Vueify
------------------

To configure [Vueify][], you should create a `vue.config.js` file, as described [in the Vuefiy documentation][].

[Vueify]: https://github.com/vuejs/vueify
[in the Vuefiy documentation]: https://github.com/vuejs/vueify#configuring-options
