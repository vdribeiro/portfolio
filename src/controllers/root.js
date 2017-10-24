angular.module('app')

.controller('RootController', [
  'PROFILE',
  'EXPERIENCE',
  'TECHNOLOGY',
  'EDUCATION',
  'AWARDS',
  'CONNECT',
  'RESEARCH',
  '$rootScope',
  '$timeout',
  'Utils',
  'MenuManager',
  'ProjectManager',
  function(
    PROFILE,
    EXPERIENCE,
    TECHNOLOGY,
    EDUCATION,
    AWARDS,
    CONNECT,
    RESEARCH,
    $rootScope,
    $timeout,
    Utils,
    MenuManager,
    ProjectManager
  ) {

    $rootScope.profile = PROFILE
    $rootScope.experience = EXPERIENCE
    $rootScope.technology = TECHNOLOGY
    $rootScope.education = EDUCATION
    $rootScope.awards = AWARDS
    $rootScope.connect = CONNECT
    $rootScope.research = RESEARCH

    $rootScope.utils = Utils
    $rootScope.menu = MenuManager
    $rootScope.project = ProjectManager

    MenuManager.watch($rootScope)

    $timeout(function() { MenuManager.showScreen() })

  }]
)
