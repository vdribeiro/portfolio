angular.module('app')

.constant('PROJECTS', [
	{
		title : 'Portfolio',
		img   : '/assets/projects/portfolio.png',
		tags  : [
			'html5',
			'css3',
			'javascript',
			'angular',
			'pug',
			'less',
			'gulp',
			'paintnet',
			'atom',
			'web',
		],
		description : 'That\'s right, this website!'
	},
	{
		title : 'Willows',
		img   : '/assets/projects/willows.png',
		tags  : [
			'android',
			'json',
			'postman',
			'photoshop',
			'android_studio',
			'rest',
			'mobile',
		],
		description : 'Platform for the Willows Pre-School group that promotes an easier and closer relationship between teachers and parents.'
	},
	{
		title : 'toFlow',
		img   : '/assets/projects/toflow.png',
		tags  : [
			'html5',
			'css3',
			'javascript',
			'angular',
			'pug',
			'less',
			'redis',
			'node',
			'jquery',
			'docker',
			'gulp',
			'json',
			'sublime',
			'atom',
			'mobile',
			'web',
			'business',
			'ai',
			'rest',
		],
		description : 'An Innovative solution for real-time generation of integrated platforms'
	},
	{
		title : 'Farol City Guides',
		img   : '/assets/projects/farol.png',
		tags  : [
			'android',
			'SQLite',
			'json',
			'paintnet',
			'eclipse',
			'rest',
			'mobile',
			'osm',
			'tourism',
		],
		description : 'Farol is a multi-language offline travel guide for short city-break travellers with interactive maps of all the European capitals and other major cities, and high quality, up-to-date contents, which include points of interest, metro lines and more. It also enables the creation of automatic daytrips based on the user’s preferences and available time. This project was made in a European Space Agency incubated company, LatitudeN GmbH. More can be found at Farol World.'
	},
	{
		title : 'Berkovitsa-Godech',
		img   : '/assets/projects/berkovitsa.png',
		tags  : [
			'android',
			'SQLite',
			'json',
			'paintnet',
			'eclipse',
			'rest',
			'mobile',
			'osm',
			'tourism',
		],
		description : 'Berkovitsa-Godech is a travel guide dedicated to the Bulgarian region of the same name. It was commissioned by the Berkovitsa Municipality. It also provides an interactive OSM offline map with historical and demographic region information and up-to-date content.'
	},
	{
		title : 'SenseMyCity Framework',
		img   : '/assets/projects/smc_framework.png',
		tags  : [
			'android',
			'java',
			'javascript',
			'php',
			'sqlite',
			'postgresql',
			'mysql',
			'eclipse',
			'mobile',
			'web',
			'data_mining',
		],
		description : 'The Future Cities Project is a FP7 funded project focused on the concept of future city as an urban environment centered on human needs, while exploiting the massive use of ICT embedded in the city fabric. The SenseMyCity framework consists of an infrastructure for simplified collection of geo-indexed data sensed using smartphones, along with a pool of users willing to participate in experiments and the logistic support for city-wide experiments. The technical infrastructure consists of: Framework for Android OS to gather data from the device\'s available sensors; Java Server to process the data and store it in an SQL database; Webpage to consult information in a user friendly way. This framework generated 5 different projects so far and is used not only in the Future Cities scope but also in academic projects and thesis. It is capable of handling various sensors. The projects wiki can be consulted at http://cloud.futurecities.up.pt/sensemycity/.'
	},
	{
		title : 'SenseMyCity',
		img   : '/assets/projects/smc.png',
		tags  : [
			'android',
			'java',
			'javascript',
			'sqlite',
			'postgresql',
			'eclipse',
			'mobile',
			'web',
			'data_mining',
		],
		description : 'SenseMyCity is the name of the application generated by the framework that shares the same name. It enables, through the use of sensors, the registration of the everyday life of users for further analysis. Information such as fuel consumption per journey, possibility of car sharing or levels of stress, are some of the data which can be studied. With this application, designed to use in research projects in various areas such as engineering and psychology, users can record, consciously and voluntarily their daily routine through sensors embedded in their mobile phones. SenseMyCity is being tested and it will be applied to the police for analysis of the welfare of the professionals. The process is simple. The user records his routine through sensors embedded in his smartphone and then views it on a web page created for that purpose. The collection and analysis of such data can lead to some conclusions regarding the consumption of fuel per journey, identifying areas with slower traffic, places or situations that increase stress levels of drivers, among others. This same analysis can be used to optimize routes and consumption, meaning that the use of SenseMyCity allows, for example, the identification of people with similar mobility patterns (boosting car sharing and carpooling) and map the city suggesting bike routes with little slope and flat floor. This application can also be used for the analysis of pooled data from several users enabling longitudinal studies of occupational stress which integrate questionnaires and vital sensors and can be applied to fire-fighters, bus drivers, or the police. The application SenseMyCity was developed under the Future Cities project and was designed to work in conjunction with other data collection projects and not alone and will always have a conscious and voluntary aspect by the user.'
	},
	{
		title : 'MyDrivingDroid',
		img   : '/assets/projects/mdd.png',
		tags  : [
			'android',
			'java',
			'javascript',
			'sqlite',
			'postgresql',
			'eclipse',
			'mobile',
			'web',
			'data_mining',
		],
		description : 'Mobility is a major aspect of modern life, as one of the greatest contributors to the personal carbon footprint and to the pollution and noise in urban areas. Still, not enough information is available to quantize these factors in personal (e.g. impact of each trip) or urban scale (e.g. periods of highest pollution levels), or to relate them to geographic locations (e.g. areas most exposed to CO2 emissions). The goal of the MyDrivingDroid project is to provide trip information, such as travel duration, the overall energy costs and carbon emissions, the areas of excessive traffic, among others. It is intended that users share this information using this platform in a collaborative environment. The application logs the smartphone’s embedded sensor data, and uses an external device known as an On-Board Diagnostics device, to gather vehicle data. The data is then used to develop a model that estimates the instantaneous fuel consumption, and consequently CO2 emissions, from the smartphone GPS data alone. The availability of this data will empower users to track more closely their emission record, hence make more conscious decisions about their personal mobility. Moreover, aggregating the data from multiple users into an urban scale perspective can provide finer grained indicators to urban planning.'
	},
	{
		title : 'Scope',
		img   : '/assets/projects/scope.png',
		tags  : [
			'android',
			'java',
			'javascript',
			'sqlite',
			'postgresql',
			'eclipse',
			'mobile',
			'web',
			'data_mining',
		],
		description : 'Police work is one of the most stressful occupations and the exposure of police officers to stress sources over time has been associated with several physical, psychological and behavioral problems. The aim of the Scope project is to investigate psychological and physiological impact of stress among police officers working in real world conditions, by analysing gathered data using a smartphone and a Vital Jacket. The smartphone collects psychological measures of stress, coping, and georeferenced data in a transparent way, and police officers are required to press a button when experiencing a stressful event and respond to simple questions (voice or written). Scope provides a stress management solution, developing the health and well-being of police officers, and increasing the safeguard of the overall community. It also contributes to the area of stress and coping ambulatory assessment.'
	},
	{
		title : 'Vital Responder 2',
		img   : '/assets/projects/vr2.png',
		tags  : [
			'android',
			'java',
			'javascript',
			'sqlite',
			'postgresql',
			'eclipse',
			'mobile',
			'web',
			'data_mining',
		],
		description : 'Monitoring Stress among First Responder professionals is a CMU-Portugal funded project with the main goal to provide secure, reliable and effective first-response systems in critical emergency scenarios. The goal of the Vital Responder research project is to explore the synergies between innovative wearable technologies, scattered sensor networks, intelligent building technology and precise localization services to provide secure, reliable and effective first-response systems in critical emergency scenarios. The Vital Responder 2 application aims at evaluating human stress in real-time under adverse conditions, by means of continuous online vital sign monitoring of first responders. The Vital Jackets are provided by a high-tech company named Biodevices, which together with researchers at the University of Aveiro developed this non-intrusive wearable technology, as inconspicuous as a t-shirt, capable of gathering relevant information about the individual. Researchers at IT, University of Porto and Carnegie Mellon collaborated in viewing Vital Jackets as nodes of a distributed system that leverages the rich data sets with short-range communication, intelligent building technologies and localization capabilities. Ultimately the team will deploy a prototype infrastructure that enables continuous online monitoring of the collected information. Companies like McLaren Electronics and Petratex are also involved in the project.'
	},
	{
		title : 'MoodSensor',
		img   : '/assets/projects/moodsensor.png',
		tags  : [
			'android',
			'java',
			'javascript',
			'sqlite',
			'postgresql',
			'eclipse',
			'mobile',
			'web',
			'data_mining',
		],
		description : 'This project is a collaboration between FEUP and FPCEUP. The collected data will allow to understand whether there are areas where people feel better/happier, and whether there are environmental factors that correlate with the perceived happiness, like noise or the reason for being there. Moreover, it will collect mobility information, to quantify traffic light waiting times, identify traffic congestions at different times of day, and know how many people actually move from one part of the city to another, using which transportation mode. Participants are in full control of their data through the website, where they can download or delete their own data.'
	},
	{
		title : 'SCP',
		img   : '/assets/projects/scp.png',
		tags  : [
			'android',
			'java',
			'javascript',
			'sqlite',
			'postgresql',
			'eclipse',
			'mobile',
			'web',
			'data_mining',
		],
		description : 'The SCP collects the raw data that is processed and tagged with stress classification. This information includes speech recordings (WAV files), along with annotation of the metadata and physiological sensor data. The application itself is not a single program, but an implementation of a client-server architecture where a netbook computer, on which the main program is run, acts as the server, and a smartphone acts as the client. The smartphone runs a program that collects the physiological sensor data and relays it to the server via a wireless (ad hoc) LAN. The result of each collection workflow is a sample file structure, where the questionnaire XML, the audio WAV, and the annotation XML files are stored and ready for processing by the next steps of the project. The physiological sensors are placed according to their specifications on the subject, switched on manually, and connect via Bluetooth to the smartphone. The application detects and connects to this devices, along with connecting to the serve app and relays timely updates to the server for visual monitoring (i.e. to assess if the information is being well received), but the whole sensor data is sequentially stored in the smartphone. At the end of the first and third (last) recording steps, these files are sent to the server for aggregation with the rest of the information (audio and subject/event details).'
	},
	{
		title : 'ListIt',
		img   : '/assets/projects/a.png',
		tags  : [
			'android',
			'java',
			'ruby',
			'sqlite',
			'eclipse',
			'mobile',
		],
		description : 'Project for Tlantic responsible for Continente Online. What this project proposes is a new way to accelerate the purchasing process, taking advantage of the growth of mobile technologies and thus enabling the construction of shopping lists to facilitate the subsequent processes in e-commerce stores, as well as to assist the process of physical purchasing. The great advantage of this application is the ability to share lists and the fact that it provides an API for retailers who want to advertise their products in catalogs, properly filtered with user preferences through a heuristic.'
	},
	{
		title : 'EventWide',
		img   : '/assets/projects/a.png',
		tags  : [
			'android',
			'java',
			'sqlite',
			'oracle',
			'eclipse',
			'rest',
			'mobile',
		],
		description : 'Application whose purpose is to share events keeping an Oracle database and using Google Calendar. The implementation consists of three modules. One for business partners, another for customers and finally one for administrators intended solely for administration and server maintenance. Through an Android application, companies, after being registered, create or update events (bars, furniture fairs, festivals, nightclubs, etc.) that are kept on a server. There is also an Android application for customers to consult the events on the server.'
	},
	{
		title : 'Speak2Me',
		img   : '/assets/projects/s2m.png',
		tags  : [
			'android',
			'mobile',
			's2s',
		],
		description : 'In an academic group, due to a mutual interest in accessibility related problems, it was decided to create a service and a product that could benefit a social group unfortunately \'excluded\' from society: the hearing impaired. The project consists of an application for tablets that shows conversations detected by the mobile device in text balloons pointing to the source of the sound. The signal processing is performed by a server, so the application requires the internet to be always active. This is called speech-to-text. It also has the inverse component text-to-speech so that an individual with hearing disability can answer properly. In the end, the application would be a Speech-to-Speech and a communication bridge besides gestual language. However, the project was suspended for technological and economic viability reasons, as advanced techniques of sound triangulation and a very expensive super-server are needed. The idea remains and we all hope that one day it will be achievable at a possible cost.'
	},
	{
		title : 'iTest',
		img   : '/assets/projects/itest.png',
		tags  : [
			'web',
			'ruby',
			'cucumber',
			'bdd',
		],
		description : 'BDD (Behavior Driven Development) Web platform to test projects that are submitted by registered users. In addition to the projects, it is possible to suggest features and comment submissions. Works as a Project Manager but with a surprise. The great advantage of the site is the fact that the client can perform the tests without having to understand programming. He can write tests in plain text obeying certain \'keywords\' and the site does the rest, informing the user if the test is valid and if it passed.'
	},
	{
		title : 'Induflex',
		img   : '/assets/projects/induflex.png',
		tags  : [
			'web',
			'php',
			'joomla',
		],
		description : 'Induflex is a company dedicated to the upholstered furniture industry in Avintes, Portugal. After working a few summers in this company as a Computer Technician, I also collaborated in the development of their website that I strongly recommend to consult.'
	},
	{
		title : 'WikiBooks',
		img   : '/assets/projects/a.png',
		tags  : [
			'web',
			'php',
			'apache',
			'dokuwiki',
		],
		description : 'DokuWiki plugin in PHP whose goal is to facilitate the consultation of books in this Wiki. Allows adding, editing and removal of an entire book library structure (books, publications, chapters, pages, etc.) and export to pdf the various elements of it. Users can also review these various elements and through a comparison module find similarities between them.'
	},
	{
		title : 'Web Of Developers',
		img   : '/assets/projects/a.png',
		tags  : [
			'web',
			'php',
			'apache',
			'project_manager',
		],
		description : 'Website named Web of Developers to assist website developers. Works as a project manager such as Redmine. Registered users can submit their works and documents and share ideas. Includes a Forum for users to expose and discuss the themes they find convenient.'
	},
	{
		title : 'Data Link Protocol',
		img   : '/assets/projects/a.png',
		tags  : [
			'web',
			'c',
			'linux',
			'networks',
		],
		description : 'In Computer Networks a data transmission application was implemented complying with a connection protocol. All code is implemented in C, and uses asynchronous data transmission in the serial ports. The operating system that is intended is Linux, and elements of the Linux system are triggered.'
	},
	{
		title : 'FTP Application',
		img   : '/assets/projects/a.png',
		tags  : [
			'web',
			'ftp',
			'c',
			'linux',
			'networks',
		],
		description : 'FTP client based application that allows you to control file transfer between two FTP servers, navigate the local machine and remote servers as well as perform query operations, creating and removing files. The program presents an error control, validation of the existence of files and synchronization methods between three elements: client, server, source and destination server. All code was implemented in C and is intended for Linux.'
	},
	{
		title : 'Talking Ideas',
		img   : '/assets/projects/a.png',
		tags  : [
			'business',
		],
		description : 'An idea among a group of students appeared, in which I proudly contributed, called Talking Ideas, the we all hope one day to materialize. Talking Ideas aims to be a company who makes the connection between creative people who produce a business idea and investors, resorting on a website and conferences organized by the company. To this service we intend to add the recruitment of qualified professionals and the implementation of projects with value.'
	},
	{
		title : 'Enterprise Resource Planning',
		img   : '/assets/projects/a.png',
		tags  : [
			'business',
			'information_systems',
			'erp',
			'nav',
		],
		description : 'In Information Systems a feasibility study was conducted on the company Induflex to compare the advantages of Microsoft Dynamics NAV with other ERP\'s in the market and the company\'s ERP, the AS-400. In MS Dynamics NAV 2009 were carried out purchases and sales processes, a sales cycle, report and instructions for the integration of NAV in external systems.'
	},
	{
		title : 'Graphic Engine OpenGL',
		img   : '/assets/projects/a.png',
		tags  : [
			'computer_graphics',
			'cpp',
			'tinyxml',
			'opengl',
		],
		description : 'It was with great pleasure (and work) that I attended Laboratory of Applications with Graphical Interface taught at the time by the MIEIC\'s Big Boss António Augusto de Sousa. After the initial experiments with OpenGL, I created a small 3D graphics engine. Files with their own language called LSX - Language of Scenes in XML, are supplied to the application and the TinyXML library parses XML to C++ and OpenGL draws a scene. The files are in XML and follow a structure often used in computer graphics: Scene Graph.'
	},
	{
		title : 'Annotation Of Pictures From Football Games',
		img   : '/assets/projects/a.png',
		tags  : [
			'computer_graphics',
			'matlab',
			'image_processing_toolbox',
			'computer_vision',
		],
		description : 'Program that allows the annotation of static and real football images giving the information of distances and virtual marks, the off-game line and a circle marking the minimum distance the opponents can be in a fault scenario. It was developed in Matlab, using the Image Processing Toolbox.'
	},
	{
		title : 'Labyrinth',
		img   : '/assets/projects/a.png',
		tags  : [
			'games',
			'cpp',
			'artoolkit',
			'opengl',
			'threedsmax',
			'var'
		],
		description : 'Game developed in C++ using the ARToolkit library. It is an amazing tool that enables the development of interfaces for augmented reality. The game consists in the insertion of fiducial marks within the reach of a camera, which generates a virtual board on the mark with obstacles, a ball and a hole in random positions. The aim is to guide the ball to the hole. The virtual objects were drawn in OpenGL except the ball that was made in 3dsMax and then exported.'
	},
	{
		title : 'Kamisado',
		img   : '/assets/projects/a.png',
		tags  : [
			'games',
			'cpp',
			'prolog',
			'opengl',
			'ai',
		],
		description : 'Kamisado is a board game for two players. It was developed in C++ using OpenGL libraries for the GUI. The computer had an artificial intelligence implemented in Prolog. Communication between the two platforms is done using sockets.'
	},
	{
		title : 'Carcassonne',
		img   : '/assets/projects/a.png',
		tags  : [
			'games',
			'alloy',
			'formal_methods',
		],
		description : 'Carcassonne is a very funny game whose objective is the construction of fortified medieval towns, fields, roads and monasteries, with the use of mosaics laid down by the players alternately. The game board gains new forms shift after shift, through the pieces positioned by the players. It was done with the specification language Alloy.'
	},
	{
		title : 'Traffic Jam',
		img   : '/assets/projects/a.png',
		tags  : [
			'games',
			'vdmpp',
			'formal_methods',
		],
		description : 'Traffic Jam is a board game with a random number of cars with variable length in which one, the red car, has to reach the exit. This requires moving the other cars so that the red one has a free passage. The cars can only move in the direction in which they are initially turned, for example: a car vertically disposed can only move up or down, and a car moving horizontally just to the left or right. There is only one red car and no car can run over another. Implemented with the declarative language VDM++.'
	},
	{
		title : 'Spangles',
		img   : '/assets/projects/a.png',
		tags  : [
			'games',
			'sicstus',
			'prolog',
			'ai',
		],
		description : 'Game developed in Prolog. It consists of two players and a 25X25 board in which each player has 25 triangles of one color. The first piece should be placed in the center and, after that, the following pieces can only be placed adjacently to the existing triangles on the board. The aim is to form a triangle of four pieces, in which the pieces at the tips belong to the winner, being the center piece indifferent. The game ends if a player achieves the objective of creating a triangle with its three pieces at the tips, or if the players play all the 25 pieces, thus ending in a tie.'
	},
	{
		title : 'Arkanoid ',
		img   : '/assets/projects/a.png',
		tags  : [
			'games',
			'assembly',
			'c',
		],
		description : 'This is a classic that needs no introduction. Developed in a discipline that intended to teach low level programming by using routines in Assembly to be called later in C. I can say that it served to remind me to thank the gods that today there are high level programming languages​.'
	},
	{
		title : 'Cast Away',
		img   : '/assets/projects/a.png',
		tags  : [
			'games',
			'visual_basic',
		],
		description : 'Soon after I completed the Scientific and Technological Informatics Course, I saw a screensaver in a shop of a lost man on an island with just a coconut tree making random tasks. I found it hilarious. That year I saw the movie Cast Away on TV and had an idea. I made a joke in Visual Basic which consisted of an island like in the screensaver, with a man who had to survive for four years as in the movie and meet the basic needs as in the Sims. To ensure this he had to learn how to hunt, build and perform other tasks. The tree provided almost everything except food since coconuts were bad for the poor man\'s health.'
	},
	{
		title : 'Voltrix',
		img   : '/assets/projects/a.png',
		tags  : [
			'games',
			'visual_basic_net',
			'coreldraw',
			'dotnet',
		],
		description : 'Done when I was 16 that tried to imitate the popular card game Magic: The Gathering. I don\'t consider myself a big fan of the game, however, I wanted to make a similar version of it in Visual Basic.NET with some characters made at the time with CorelDRAW, which was played by several players using different computers with .NET Remoting. It was very rough, but the several months of implementation were entertaining.'
	},
	{
		title : 'Apocalypse',
		img   : '/assets/projects/a.png',
		tags  : [
			'games',
			'pascal',
			'turbo_pascal',
		],
		description : 'First game I implemented in the first language I learned: Pascal. I was 14, attended the Scientific and Technological Informatics Course and played a lot of RPGs. The game tried to reflect this, however, it was linear at its core, as you could only walk in two directions and experience and money were always spent in the same things. The character was a super pixelated hero walking in scenarios that were read from a bmp using a library that a student implemented in the same course for Pascal. Today I look at the game and laugh at the enthusiasm of my adolescence.'
	},
	{
		title : 'Path Exploration',
		img   : '/assets/projects/a.png',
		tags  : [
			'ai',
			'java',
			'repast',
			'agents_dai',
		],
		description : 'Multiagent System for cooperative exploration of paths in a field. There are three types of agents with different behaviors: Soldiers, Captains and Robots. The program generates a labyrinthine field with one entrance, one exit and multiple paths and bridges between them, but only one path reaches the end. The goal is for human agents (Captains and Soldiers) to get out of the maze in the shortest and most flexible way by exchanging information between them by radio, thus reaching the optimal solution.'
	},
	{
		title : 'OptiLote',
		img   : '/assets/projects/a.png',
		tags  : [
			'ai',
			'java',
			'swing',
			'awt',
		],
		description : 'Program conducted within the Artificial Intelligence programme that uses a genetic algorithm and aims at solving the problem of optimizing the best locations of multiple clinics or hospitals in a city. It was done with an interface in Java Swing and AWT. Is it possible to edit all parameters, such as the city map and the costs and frequency of visits associated with buildings and the genetic algorithm\'s parameters, such as the stopping criteria or mutation probabilities.'
	},
	{
		title : 'Dutch Auction',
		img   : '/assets/projects/a.png',
		tags  : [
			'ai',
			'jade',
			'java',
			'electronic_business',
		],
		description : 'Application that simulates the behaviour of a Dutch Auction with multiple agents in Jade. There are stockbrokers who put their products for sale and buyers who list the products they want to buy. According to the protocol of the Dutch auction, the price of a certain product slowly decreases until a buyer accepts it.'
	},
	{
		title : 'Navigation of a robot in an unknown environment',
		img   : '/assets/projects/a.png',
		tags  : [
			'ai',
			'java',
			'cpp',
		],
		description : 'My first contact with Artificial Intelligence came in the form of a program the simulates the movement of a robot in an unfamiliar environment, while looking for a way that allows it to reach the final position. It had a very simple implementation and so i called it \'Artificial Stupidity\' as a joke. The logic module was implemented in Java and the maze generator in C++.'
	},
	{
		title : 'SOSH',
		img   : '/assets/projects/a.png',
		tags  : [
			'os',
			'c',
			'linux',
			'so_shell',
		],
		description : 'Simple command interpreter called SOSH that acts as a shell (OS Shell) with the capability to communicate with an application which analyses and calculates letter frequency, thus having a client-server relationship between the two applications capable of dealing with conflict situations when accessing shared resources. It lets you create new processes with multiple threads and perform inter-communication through named pipes, use signals as a mechanism for communication and synchronization avoiding conflicts between competing entities by consulting an information array system.'
	},
	{
		title : 'Yal Compiler',
		img   : '/assets/projects/a.png',
		tags  : [
			'os',
			'javacc',
			'jasmin',
			'java',
		],
		description : 'Compiler yal2jvm in JavaCC which translates a fictional language, Yal, into	Java bytecodes. The compiler generates files with JVM instructions that are translated by Jasmin to Java bytecodes.'
	},
	{
		title : 'Minimum Spanning Tree',
		img   : '/assets/projects/a.png',
		tags  : [
			'os',
			'java',
			'prim',
			'kruskal',
		],
		description : 'Simple Java program that generates a Minimum Spanning Tree, from a graph loaded from a CSV file, using the Prim and Kruskal algorithms.'
	},
	{
		title : 'Baseball Championship Managing System',
		img   : '/assets/projects/a.png',
		tags  : [
			'management',
			'cpp',
			'eclipse',
			'notepadpp',
			'mingw'
		],
		description : 'Program dedicated to the management of Baseball Championships through an access model with login and password followed by a menu that allows the management of athletes and teams as well as all elements belonging to the championship, also league management with game scheduling, partial and total game consultation, teams and elements and information queries about championships and user management. It is also possible to run a simulation of a game with the teams in the system.'
	},
	{
		title : 'Portugal Bicycle Tour Managing System',
		img   : '/assets/projects/a.png',
		tags  : [
			'management',
			'cpp',
			'ms_visual_cpp'
		],
		description : 'Program for Portugal Bicycle Tour management through an access model with login and password followed by a menu with the options regarding the maintenance of data of Sports Director, Cyclist, Technical Team and general data of the Tour, Laps and results of each Lap, as well as historical details.'
	},
	{
		title : 'Multimedia Project',
		img   : '/assets/projects/a.png',
		tags  : [
			'music',
			'max',
			'agm',
		],
		description : 'Near the end of the MIEIC course, I signed up in Automatic Generation of Music taught by Professor Alberto Carlos Guedes. It was an extremely rewarding experience for me to join the world of music with the world of computers. I regret at that time, due to time constraints, not investing more because the result of this junction is simply amazing. Besides allowing to extend my musical knowledge, some patches were made in MAX6.'
	},
	{
		title : 'ARMotion',
		img   : '/assets/projects/a.png',
		tags  : [
			'music',
			'c',
			'java',
			'jmusic',
			'artoolkit',
		],
		description : 'Project that allows a user to play music by means of hand movement in the air. Various known algorithms are provided that allow the automatic generation of music such as genetic, drunk walk, Mozart\'s dice game, sinusoidal melody, cellular automata, fractals, among many others. The user allocates one track of the music to one hand and chooses the type of instrument that plays it. You can allocate a second on the other hand. Intended to imitate the movements of a maestro, as the vertical movements of the right hand set the pace and circular movements play the notes.'
	},
	{
		title : 'Green Grass of Tunnel',
		img   : '/assets/projects/a.png',
		tags  : [
			'music'
		],
		description : 'Cover of a song from the Icelandic band Mum. It\'s as a work in progress because the music deserves much more. However, here is a sample recorded with my trusty Android because I have no studio in my house: Mum - Green Grass of Tunnel. I don\'t know if it\'s the country, but it should be mentioned that some of the most beautiful songs I know are from Iceland and the inhabitants seem to be endowed with an extraordinary sensibility.'
	},
	{
		title : 'Pachelbel\'s Canon',
		img   : '/assets/projects/a.png',
		tags  : [
			'music'
		],
		description : 'I have no musical degree but I like to play a little bit of everything. When I started, the tendency was always to learn compositions like Cavatina, Romance d\'Amour or Asturias that I consider essential in my classical guitar repertoire. Unfortunately I did not give the proper attention to one of my favourite classical compositions, Canon, until several versions began to appear on Youtube. I decided to make my adaptation largely based on Trace Bundy\'s version. A work in progress.'
	},
]
)
