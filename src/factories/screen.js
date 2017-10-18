angular.module('app')

.factory('ScreenManager', [
  '$mdMedia',
  '$mdSidenav',
  function(
    $mdMedia,
    $mdSidenav
  ) {

    function ScreenManager() {

      this.min_width = '(min-width: 1100px)'
      this.screen = {
        show       : false,
        bigScreen  : $mdMedia(this.min_width),
      }
    }

    ScreenManager.prototype.showScreen = function() {

      this.screen.show = true
    }

    ScreenManager.prototype.toggleSidebar = function(id) {

      $mdSidenav(id).toggle()
    }

    ScreenManager.prototype.watch = function(scope) {
      var self = this

      scope.$watch(function() {

        return $mdMedia(self.min_width)
      }, function(big) {

        self.toggleSidebarByScreenSize(big)
      })
    }

    ScreenManager.prototype.toggleSidebarByScreenSize = function(big) {

      this.screen.bigScreen = big
      var sidebar = $mdSidenav('sidebar')

      if (!sidebar) return false

      if (this.screen.bigScreen) return sidebar.open()

      return sidebar.close()
    }

    ScreenManager.prototype.isScreenBig = function() {

      return $mdMedia(this.min_width)
    }

    ScreenManager.prototype.isSidebarLocked = function() {

      if ($mdMedia('portrait')) return false

      return $mdMedia(this.min_width)
    }

    return new ScreenManager()
  }
])
