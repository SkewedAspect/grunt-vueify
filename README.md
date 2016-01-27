grunt-vueify
============

Translate `.vue` files to pure JavaScript, _without_ using [Browserify][].

This is useful when using [Vue.js][] with [Electron][].

[Browserify]: http://browserify.org/
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
