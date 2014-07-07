module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    //Read the package.json (optional)
    pkg: grunt.file.readJSON('package.json'),

    // Metadata.
    meta: {
      basePath: '',
      srcPath: 'style',
      destPath: 'dest'
    },

    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

    // Task configuration.
    concat: {
      js: {
        // 待拼接的文件
        src: '<%= meta.srcPath %>/**/*.js',
        // 生成的文件位置
        dest: '<%= meta.destPath %>/js/<%= pkg.name %>.js'
      },
      css: {
        // 待拼接的文件
        src: '<%= meta.srcPath %>/**/*.css',
        // 生成的文件位置
        dest: '<%= meta.destPath %>/css/<%= pkg.name %>.css'
      }

    },
    jshint: {
      files: [
        '<%= meta.srcPath %>/**/*.js',
        '!<%= meta.srcPath %>/js/lib/*.js'
      ]
      // 配置 JSHint (文档：http://www.jshint.com/docs/)
    },
    jsbeautifier: {
      files: [
        '<%= meta.srcPath %>/**/*.js',
        '<%= meta.srcPath %>/**/*.css',
        '!<%= meta.srcPath %>/lib/*.js',
        '!<%= meta.srcPath %>/lib/*.css'
      ],
      options: {
        "css": {
          indentChar: " ",
          indentSize: 4
        },
        "js": {
          "brace_style": "collapse",
          "break_chained_methods": false,
          "e4x": false,
          "eval_code": false,
          "indent_char": " ",
          "indent_level": 0,
          "indent_size": 2,
          "indent_with_tabs": false,
          "jslint_happy": false,
          "keep_array_indentation": false,
          "keep_function_indentation": true,
          "max_preserve_newlines": 10,
          "preserve_newlines": true,
          "space_before_conditional": true,
          "space_in_paren": false,
          "unescape_strings": false,
          "wrap_line_length": 100
        }
      }
    },
    uglify: {
      options: {
        // 生成注释并插入到输出文件的顶部
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dest/js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      css: {
        src:'dest/css/<%= pkg.name %>.css',
        dest:'dest/css/<%= pkg.name %>.min.css'
      }
    }
  });

  // These plugins provide necessary tasks.
  //合并文件
  grunt.loadNpmTasks('grunt-contrib-concat');
  //格式化文件
  grunt.loadNpmTasks('grunt-jsbeautifier');
  //检查js错误
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //压缩文件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css');

  // Default task.
  grunt.registerTask('default', ['jsbeautifier', 'jshint', 'concat', 'uglify', 'cssmin']);
  grunt.registerTask('check', ['jshint']);
};