angular.module('app')

.constant('TAGS', {

  // Languages
  android : {
    title : 'Android',
    img   : '/assets/tags/android.png',
  },
  java : {
    title : 'Java',
    img   : '/assets/tags/java.png',
  },
  c : {
    title : 'C',
    img   : '/assets/tags/c.png',
  },
  cpp : {
    title : 'C++',
    img   : '/assets/tags/cpp.png',
  },
  html5 : {
    title : 'HTML5',
    img   : '/assets/tags/html5.png',
  },
  css3 : {
    title : 'CSS3',
    img   : '/assets/tags/css3.png',
  },
  javascript : {
    title : 'Javascript',
    img   : '/assets/tags/js.png',
  },
  python : {
    title : 'Python',
    img   : '/assets/tags/python.png',
  },
  php : {
    title : 'PHP',
    img   : '/assets/tags/php.png',
  },
  ruby : {
    title : 'Ruby',
    img   : '/assets/tags/ruby.png',
  },
  sql : {
    title : 'SQL',
    img   : '/assets/tags/sql.png',
  },
  max : {
    title : 'Max',
    img   : '/assets/tags/max6.png',
  },
  visual_basic : {
    title : 'Visual Basic',
    img   : '/assets/tags/visual_basic.png',
  },
  visual_basic_net : {
    title : 'Visual Basic .NET',
    img   : '/assets/tags/visual_basic_net.png',
  },
  prolog : {
    title : 'Prolog',
    img   : '/assets/tags/prolog.png',
  },
  r : {
    title : 'R',
    img   : '/assets/tags/r.png',
  },
  matlab : {
    title : 'MATLAB',
    img   : '/assets/tags/matlab.png',
  },
  bash : {
    title : 'Bash',
    img   : '/assets/tags/bash.png',
  },
  pascal : {
    title : 'Pascal',
    img   : '/assets/tags/pascal.png',
  },
  assembly : {
    title : 'Assembly',
    img   : '/assets/tags/asm.png',
  },
  vdmpp : {
    title : 'VDM++',
    img   : '/assets/tags/vdmpp.png',
  },
  alloy : {
    title : 'Alloy',
    img   : '/assets/tags/alloy.png',
  },

  // Frameworks
  angular : {
    title : 'Angular',
    img   : '/assets/tags/angular.png',
  },
  artoolkit : {
    title : 'ARToolKit',
    img   : '/assets/tags/artoolkit.png',
  },
  jmusic : {
    title : 'jMusic',
    img   : '/assets/tags/jmusic.png',
  },
  jade : {
    title : 'JADE',
    img   : '/assets/tags/jade.png',
  },
  dotnet : {
    title : '.NET',
    img   : '/assets/tags/dotnet.png',
  },

  // Pre-Processors
  pug : {
    title : 'Pug',
    img   : '/assets/tags/pug.png',
  },
  less : {
    title : 'Less',
    img   : '/assets/tags/less.png',
  },

  // Data
  redis : {
    title : 'Redis',
    img   : '/assets/tags/redis.png',
  },
  sqlite : {
    title : 'SQLite',
    img   : '/assets/tags/sqlite.png',
  },
  postgresql : {
    title : 'PostgreSQL',
    img   : '/assets/tags/postgresql.png',
  },
  mysql : {
    title : 'MySQL',
    img   : '/assets/tags/mysql.png',
  },
  oracle : {
    title : 'Oracle',
    img   : '/assets/tags/oracle.png',
  },

  // Tools
  aws : {
    title : 'Amazon AWS',
    img   : '/assets/tags/aws.png',
  },
  node : {
    title : 'Node',
    img   : '/assets/tags/nodejs.png',
  },
  jquery : {
    title : 'jQuery',
    img   : '/assets/tags/jquery.png',
  },
  docker : {
    title : 'Docker',
    img   : '/assets/tags/docker.png',
  },
  gulp : {
    title : 'Gulp',
    img   : '/assets/tags/gulp.png',
  },
  opengl : {
    title : 'OpenGL',
    img   : '/assets/tags/opengl.png',
  },
  circleci : {
    title : 'CircleCI',
    img   : '/assets/tags/circleci.png',
  },
  cucumber : {
    title : 'Cucumber',
    img   : '/assets/tags/cucumber.png',
  },
  awt_swing : {
    title : 'AWT/Swing',
    img   : '/assets/tags/awt_swing.png',
  },
  jasmin : {
    title : 'Jasmin',
    img   : '/assets/tags/jasmin.png',
  },
  javacc : {
    title : 'JavaCC',
    img   : '/assets/tags/javacc.png',
  },
  repast : {
    title : 'Repast',
    img   : '/assets/tags/repast.png',
  },
  apache : {
    title : 'Apache',
    img   : '/assets/tags/apache.png',
  },
  tinyxml : {
    title : 'TinyXML',
    img   : '/assets/tags/tinyxml.png',
  },
  json : {
    title : 'JSON',
    img   : '/assets/tags/json.png',
  },
  mingw : {
    title : 'MinGW',
    img   : '/assets/tags/mingw.png',
  },
  ms_visual_cpp : {
    title : 'Microsoft Visual C++',
    img   : '/assets/tags/ms_visual_cpp.png',
  },
  image_processing_toolbox : {
    title : 'Image Processing Toolbox',
    img   : '/assets/tags/image_processing_toolbox.png',
  },
  joomla : {
    title : 'Joomla',
    img   : '/assets/tags/joomla.png',
  },
  dokuwiki : {
    title : 'DokuWiki',
    img   : '/assets/tags/dokuwiki.png',
  },
  postman : {
    title : 'Postman',
    img   : '/assets/tags/postman.png',
  },
  nav : {
    title : 'Microsoft Dynamics NAV',
    img   : '/assets/tags/nav.png',
  },

  // Design
  photoshop : {
    title : 'Photoshop',
    img   : '/assets/tags/ps.png',
  },
  paintnet : {
    title : 'Paint.NET',
    img   : '/assets/tags/paintnet.png',
  },
  threedsmax : {
    title : '3ds Max',
    img   : '/assets/tags/3dsmax.png',
  },
  coreldraw : {
    title : 'CorelDRAW',
    img   : '/assets/tags/coreldraw.png',
  },

  // Development Tools
  android_studio : {
    title : 'Android Studio',
    img   : '/assets/tags/android_studio.png',
  },
  eclipse : {
    title : 'Eclipse',
    img   : '/assets/tags/eclipse.png',
  },
  visual_studio : {
    title : 'Visual Studio',
    img   : '/assets/tags/visual_studio.png',
  },
  sublime : {
    title : 'Sublime',
    img   : '/assets/tags/sublime.png',
  },
  atom : {
    title : 'Atom',
    img   : '/assets/tags/atom.png',
  },
  notepadpp : {
    title : 'Notepad++',
    img   : '/assets/tags/notepadpp.png',
  },
  swi_prolog : {
    title : 'SWI-Prolog',
    img   : '/assets/tags/swi_prolog.png',
  },
  sicstus : {
    title : 'SICStus',
    img   : '/assets/tags/sicstus.png',
  },
  turbo_pascal : {
    title : 'Turbo Pascal',
    img   : '/assets/tags/turbo_pascal.png',
  },

  // Generic
  rest : {
    title : 'REST',
    img   : '/assets/tags/rest.png',
  },
  ftp : {
    title : 'FTP',
    img   : '/assets/tags/ftp.png',
  },
  mobile : {
    title : 'Mobile',
    img   : '/assets/tags/mobile.png',
  },
  web : {
    title : 'Web',
    img   : '/assets/tags/web.png',
  },
  business : {
    title : 'Business',
    img   : '/assets/tags/business.png',
  },
  games : {
    title : 'Games',
    img   : '/assets/tags/games.png',
  },
  ai : {
    title : 'Artificial Intelligence',
    img   : '/assets/tags/ai.png',
  },
  agents_dai : {
    title : 'Agents and Distributed AI',
    img   : '/assets/tags/agents_dai.png',
  },
  electronic_business : {
    title : 'Electronic Business',
    img   : '/assets/tags/electronic_business.png',
  },
  os : {
    title : 'Operating System',
    img   : '/assets/tags/os.png',
  },
  management : {
    title : 'Management',
    img   : '/assets/tags/management.png',
  },
  music : {
    title : 'Music',
    img   : '/assets/tags/music.png',
  },
  osm : {
    title : 'Open Street Maps',
    img   : '/assets/tags/osm.png',
  },
  linux : {
    title : 'Linux',
    img   : '/assets/tags/linux.png',
  },
  bdd : {
    title : 'Behavior-Driven Development',
    img   : '/assets/tags/bdd.png',
  },
  erp : {
    title : 'ERP',
    img   : '/assets/tags/erp.png',
  },
  tourism : {
    title : 'Tourism',
    img   : '/assets/tags/tourism.png',
  },
  data_mining : {
    title : 'Data Mining',
    img   : '/assets/tags/data_mining.png',
  },
  project_manager : {
    title : 'Project Manager',
    img   : '/assets/tags/project_manager.png',
  },
  information_systems : {
    title : 'Information Systems',
    img   : '/assets/tags/information_systems.png',
  },
  computer_graphics : {
    title : 'Computer Graphics',
    img   : '/assets/tags/computer_graphics.png',
  },
  formal_methods : {
    title : 'Formal Methods',
    img   : '/assets/tags/formal_methods.png',
  },
  var : {
    title : 'Virtual and Augmented Reality',
    img   : '/assets/tags/var.png',
  },
  networks : {
    title : 'Networks',
    img   : '/assets/tags/networks.png',
  },
  s2s : {
    title : 'Speech-to-Speech',
    img   : '/assets/tags/s2s.png',
  },
  agm : {
    title : 'Automatic Generation of Music',
    img   : '/assets/tags/agm.png',
  },
  os_shell : {
    title : 'OS Shell',
    img   : '/assets/tags/shell.png',
  },
  computer_vision : {
    title : 'Computer Vision',
    img   : '/assets/tags/computer_vision.png',
  },
})
