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
  '$anchorScroll',
  'Utils',
  'ScreenManager',
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
    $anchorScroll,
    Utils,
    ScreenManager,
    MenuManager,
    ProjectManager
  ) {

    console.info('Client Build <GULP_BUILD_DATE>')

    $rootScope.profile = PROFILE
    $rootScope.experience = EXPERIENCE
    $rootScope.technology = TECHNOLOGY
    $rootScope.education = EDUCATION
    $rootScope.awards = AWARDS
    $rootScope.connect = CONNECT
    $rootScope.research = RESEARCH

    $rootScope.utils = Utils
    $rootScope.screen = ScreenManager
    $rootScope.menu = MenuManager
    $rootScope.project = ProjectManager

    $rootScope.isLoading = true
    $rootScope.dialogImage = null

    ScreenManager.watch($rootScope)

    $timeout(function() { ScreenManager.showScreen() })

    $rootScope.$on('$routeChangeStart', function () {
      $rootScope.isLoading = true
    })

    $rootScope.$on('$routeChangeSuccess', function () {
      $timeout(function() {
        $anchorScroll()
        $rootScope.isLoading = false
      })
    })

  }]
)
