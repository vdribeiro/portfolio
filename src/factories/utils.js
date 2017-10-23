angular.module('app')

.factory('Utils', [
  '$mdDialog',
  function(
    $mdDialog
  ) {

    function Utils() {

    }

    Utils.prototype.isLastIndex = function(array, index) {

      if (_.isNil(array)) return false
      if (!_.isArray(array)) return false

      return ((array.length-1) == index)
    }

    Utils.prototype.showDialog = function(ev, image) {

      $mdDialog.show({
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        escapeToClose: true,
        template: '<md-dialog ng-class="dialog.css"><md-dialog-content role="document" tabindex="-1" class="md-dialog-content"><img layout-fill ng-src="{{dialogImage}}" class="award"/></md-dialog-content></md-dialog>',
        locals: {
          image: image,
        },
        controller: [
          '$rootScope',
          'image',
          function(
            $rootScope,
            image
          ) {
            $rootScope.dialogImage = image
          }]
      })
    }

    return new Utils()
  }
])
