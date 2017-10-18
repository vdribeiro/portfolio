angular.module('app')

.constant('EDUCATION', [
  {
    institution : 'Faculdade de Engenharia da Universidade do Porto',
    location : 'Rua Doutor Roberto Frias, 4200-465 Porto, Portugal',
    qualifications : [
      'Master in Computer Engineering'
    ],
    img : '/assets/education/feup.png',
    url : 'https://www.fe.up.pt',
    dates : [
      '09/2007 - 02/2013',
    ],
    bullets : [
      'Essential skills in science and engineering',
      'Advanced training in Computer Engineering',
    ],
  },
  {
    institution : 'Colégio Internato dos Carvalhos',
    location : 'Rua do Padrão 83, 4415 Carvalhos, Portugal',
    qualifications : [
      'Scientific and Technological Informatics Course'
    ],
    img : '/assets/education/cic.png',
    url : 'http://www.cic.pt/',
    dates : [
      '09/2001 - 07/2004',
    ],
    bullets : [
      'Design and development of computer systems',
      'Implementation, maintenance and integration of computer programs'
    ],
  },
])
