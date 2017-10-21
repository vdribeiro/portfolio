angular.module('app')

.controller('RootController', [
  'PROFILE',
  'EXPERIENCE',
  'TECHNOLOGY',
  'EDUCATION',
  'AWARDS',
  'CONNECT',
  'RESEARCH',
  '$scope',
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
    $scope,
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
            $scope.image = image
          }]
      })
    }

    $scope.profile = PROFILE
    $scope.experience = EXPERIENCE
    $scope.technology = TECHNOLOGY
    $scope.education = EDUCATION
    $scope.awards = AWARDS
    $scope.connect = CONNECT
    $scope.research = RESEARCH

    $scope.screen = ScreenManager
    $scope.menu = MenuManager
    $scope.project = ProjectManager

    $scope.isLastIndex = isLastIndex
    $scope.showDialog = showDialog

    ScreenManager.watch($scope)

    $timeout(function() { ScreenManager.showScreen() })

  }]
)
