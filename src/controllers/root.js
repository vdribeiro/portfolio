angular.module('app')

.controller('RootController', [
  '$scope',
  '$timeout',
  '$mdDialog',
  'ScreenManager',
  'MenuManager',
  'PROFILE',
  'EXPERIENCE',
  'TECHNOLOGY',
  'EDUCATION',
  'AWARDS',
  'CONNECT',
  'RESEARCH',
  'PROJECTS',
  'TAGS',
  function(
    $scope,
    $timeout,
    $mdDialog,
    ScreenManager,
    MenuManager,
    PROFILE,
    EXPERIENCE,
    TECHNOLOGY,
    EDUCATION,
    AWARDS,
    CONNECT,
    RESEARCH,
    PROJECTS,
    TAGS
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
        template: '<md-dialog ng-class="dialog.css">' +
          '<md-dialog-content role="document" tabindex="-1" class="md-dialog-content">' +
          '<img layout-fill ng-src="{{image}}" class="award"/></md-dialog-content></md-dialog>',
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

    function getTagName(key) {

      var tag = TAGS[key]
      if (_.isNil(tag)) return null

      return tag.title
    }

    function getTagImage(key) {

      var tag = TAGS[key]
      if (_.isNil(tag)) return null

      return tag.img
    }

    $scope.screen = ScreenManager
    $scope.menu = MenuManager

    $scope.profile = PROFILE
    $scope.experience = EXPERIENCE
    $scope.technology = TECHNOLOGY
    $scope.education = EDUCATION
    $scope.awards = AWARDS
    $scope.connect = CONNECT

    $scope.research = RESEARCH

    $scope.projects = PROJECTS
    $scope.tags = TAGS

    $scope.isLastIndex = isLastIndex
    $scope.showDialog = showDialog
    $scope.getTagName = getTagName
    $scope.getTagImage = getTagImage

    ScreenManager.watch($scope)

    $timeout(function() { ScreenManager.showScreen() })

  }]
)
