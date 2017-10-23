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
  '$mdDialog',
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
    $mdDialog,
    ScreenManager,
    MenuManager,
    ProjectManager
  ) {

    console.info('Client Build <GULP_BUILD_DATE>')

    function isLastIndex(array, index) {

      if (_.isNil(array)) return false
      if (!_.isArray(array)) return false

      return ((array.length-1) == index)
    }

    function showDialog(ev, image) {

      $mdDialog.show({
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        escapeToClose: true,
        template: '<md-dialog ng-class="dialog.css"><md-dialog-content role="document" tabindex="-1" class="md-dialog-content"><img layout-fill ng-src="{{image}}" class="award"/></md-dialog-content></md-dialog>',
        locals: {
          image: image,
        },
        controller: [
          '$scope',
          'image',
          function(
            $scope,
            image
          ) {
            $rootScope.image = image
          }]
      })
    }

    $rootScope.profile = PROFILE
    $rootScope.experience = EXPERIENCE
    $rootScope.technology = TECHNOLOGY
    $rootScope.education = EDUCATION
    $rootScope.awards = AWARDS
    $rootScope.connect = CONNECT
    $rootScope.research = RESEARCH

    $rootScope.screen = ScreenManager
    $rootScope.menu = MenuManager
    $rootScope.project = ProjectManager

    $rootScope.isLastIndex = isLastIndex
    $rootScope.showDialog = showDialog

    ScreenManager.watch($rootScope)

    $timeout(function() { ScreenManager.showScreen() })

    $rootScope.$on('$routeChangeSuccess', function () {
      $timeout(function () {
        $window.scrollTo(0,0)
      }, 500)
    })

  }]
)
