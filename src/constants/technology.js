angular.module('app')

.constant('TECHNOLOGY', [
  {
    title : 'Languages',
    values : [
      {
        title : 'Android',
        img   : '/assets/technology/android.png',
      },
      {
        title : 'Java',
        img   : '/assets/technology/java.png',
      },
      {
        title : 'C++',
        img   : '/assets/technology/cpp.png',
      },
      {
        title : 'HTML5',
        img   : '/assets/technology/html5.png',
      },
      {
        title : 'CSS3',
        img   : '/assets/technology/css3.png',
      },
      {
        title : 'Javascript',
        img   : '/assets/technology/js.png',
      },
      {
        title : 'SQL',
        img   : '/assets/technology/sql.png',
      },
      {
        title : 'Bash',
        img   : '/assets/technology/bash.png',
      },
      {
        title : 'C',
        img   : '/assets/technology/c.png',
        deprecated : true,
      },
      {
        title : 'Python',
        img   : '/assets/technology/python.png',
        deprecated : true,
      },
      {
        title : 'PHP',
        img   : '/assets/technology/php.png',
        deprecated : true,
      },
      {
        title : 'Ruby',
        img   : '/assets/technology/ruby.png',
        deprecated : true,
      },
      {
        title : 'Max',
        img   : '/assets/technology/max6.png',
        deprecated : true,
      },
      {
        title : 'Visual Basic',
        img   : '/assets/technology/visual_basic.png',
        deprecated : true,
      },
      {
        title : 'Visual Basic .NET',
        img   : '/assets/technology/visual_basic_net.png',
        deprecated : true,
      },
      {
        title : 'Prolog',
        img   : '/assets/technology/prolog.png',
        deprecated : true,
      },
      {
        title : 'R',
        img   : '/assets/technology/r.png',
        deprecated : true,
      },
      {
        title : 'MATLAB',
        img   : '/assets/technology/matlab.png',
        deprecated : true,
      },
      {
        title : 'Pascal',
        img   : '/assets/technology/pascal.png',
        deprecated : true,
      },
      {
        title : 'Assembly',
        img   : '/assets/technology/asm.png',
        deprecated : true,
      },
      {
        title : 'VDM++',
        img   : '/assets/technology/vdmpp.png',
        deprecated : true,
      },
      {
        title : 'Alloy',
        img   : '/assets/technology/alloy.png',
        deprecated : true,
      },
    ]
  },

  {
    title : 'Frameworks',
    values : [
      {
        title : 'Angular',
        img   : '/assets/technology/angular.png',
      },
      {
        title : 'ARToolKit',
        img   : '/assets/technology/artoolkit.png',
        deprecated : true,
      },
      {
        title : 'jMusic',
        img   : '/assets/technology/jmusic.png',
        deprecated : true,
      },
      {
        title : 'JADE',
        img   : '/assets/technology/jade.png',
        deprecated : true,
      },
      {
        title : '.NET',
        img   : '/assets/technology/dotnet.png',
        deprecated : true,
      },
    ]
  },

  {
    title : 'Pre-Processors',
    values : [
      {
        title : 'Pug',
        img   : '/assets/technology/pug.png',
      },
      {
        title : 'Less',
        img   : '/assets/technology/less.png',
      },
    ]
  },

  {
    title : 'Data',
    values : [
      {
        title : 'Redis',
        img   : '/assets/technology/redis.png',
      },
      {
        title : 'SQLite',
        img   : '/assets/technology/sqlite.png',
      },
      {
        title : 'PostgreSQL',
        img   : '/assets/technology/postgresql.png',
      },
      {
        title : 'MySQL',
        img   : '/assets/technology/mysql.png',
      },
      {
        title : 'Oracle',
        img   : '/assets/technology/oracle.png',
        deprecated : true,
      },
    ]
  },

  {
    title : 'Tools',
    values : [
      {
        title : 'Node',
        img   : '/assets/technology/nodejs.png',
      },
      {
        title : 'Gulp',
        img   : '/assets/technology/gulp.png',
      },
      {
        title : 'OpenGL',
        img   : '/assets/technology/opengl.png',
        deprecated : true,
      },
      {
        title : 'jQuery',
        img   : '/assets/technology/jquery.png',
        deprecated : true,
      },
      {
        title : 'Cucumber',
        img   : '/assets/technology/cucumber.png',
        deprecated : true,
      },
      {
        title : 'AWT/Swing',
        img   : '/assets/technology/awt_swing.png',
        deprecated : true,
      },
      {
        title : 'Jasmin',
        img   : '/assets/technology/jasmin.png',
        deprecated : true,
      },
      {
        title : 'JavaCC',
        img   : '/assets/technology/javacc.png',
        deprecated : true,
      },
      {
        title : 'Repast',
        img   : '/assets/technology/repast.png',
        deprecated : true,
      },
      {
        title : 'Joomla',
        img   : '/assets/technology/joomla.png',
        deprecated : true,
      },
      {
        title : 'DokuWiki',
        img   : '/assets/technology/dokuwiki.png',
        deprecated : true,
      },
      {
        title : 'TinyXML',
        img   : '/assets/technology/tinyxml.png',
        deprecated : true,
      },
      {
        title : 'MinGW',
        img   : '/assets/technology/mingw.png',
        deprecated : true,
      },
    ]
  },

  {
    title : 'Design',
    values : [
      {
        title : 'Photoshop',
        img   : '/assets/technology/ps.png',
      },
      {
        title : 'Paint.NET',
        img   : '/assets/technology/paintnet.png',
      },
      {
        title : '3ds Max',
        img   : '/assets/technology/3dsmax.png',
        deprecated : true,
      },
      {
        title : 'CorelDRAW',
        img   : '/assets/technology/coreldraw.png',
        deprecated : true,
      },
    ]
  },

  {
    title : 'Development Tools',
    values : [
      {
        title : 'Android Studio',
        img   : '/assets/technology/android_studio.png',
      },
      {
        title : 'Eclipse',
        img   : '/assets/technology/eclipse.png',
      },
      {
        title : 'Sublime',
        img   : '/assets/technology/sublime.png',
      },
      {
        title : 'Atom',
        img   : '/assets/technology/atom.png',
      },
      {
        title : 'Visual Studio',
        img   : '/assets/technology/visual_studio.png',
        deprecated : true,
      },
      {
        title : 'Notepad++',
        img   : '/assets/technology/notepadpp.png',
        deprecated : true,
      },
      {
        title : 'SWI-Prolog',
        img   : '/assets/technology/swi_prolog.png',
        deprecated : true,
      },
      {
        title : 'SICStus',
        img   : '/assets/technology/sicstus.png',
        deprecated : true,
      },
      {
        title : 'Turbo Pascal',
        img   : '/assets/technology/turbo_pascal.png',
        deprecated : true,
      },
    ]
  },
])
