module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    compress: false
                }, 
                files: {
                    'dist/style.css' : 'src/styles/main.less'
                }
            }, 
            production: {
                options: {
                    compress: true //comprimir o css
                }, 
                files: {
                    'dist/styles.min.css' : 'src/styles/main.less' // Arquivo de saída: arquivo LESS de entrada
                }
            }
        }, 
        // Tarefa para comprimir o código JavaScript
        uglify: {
           target: {
            files: {
                'dist/scripts/main.min.js': 'src/scripts/main.js'
            }
           }
        }
    }); 

    //carregando os plugins 
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);

};