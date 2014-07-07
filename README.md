Grunt Test
===

## Grunt 常用插件和使用方法
1. 安装nodeJs，因为grunt的安装和管理都是通过npm的包管理器；
2. 在全局环境中安装 Grunt 的命令行接口：‘npm install -g grunt-cli’；
3. 切换到项目根目录，即进入clone文件的根目录；
4. 运行 npm install 安装项目依赖库；（ps：clone下来的文件已经包含项目依赖文件）；
5. 运行grun（包含css、js的合并、压缩及代码格式话和js语法检查所有操作）；
6. 运行grun check（js语法检查）；

## 项目文件描述
1. styel为测试origin文件，通常为开发中非上传版本文件，包含js和css同时lib为第三方库文件；
2. dest为合并压缩完毕后上传的线上使用文件；
3. node_modules为grunt依赖的插件文件，此文件可以删除自行运行grunt install去安装依赖文件；
4. Gruntfile.js用于配置或定义任务、加载 Grunt 插件；
5. package.json：用于保存项目元数据；