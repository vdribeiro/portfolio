angular.module('app')

.factory('MenuManager', [
  '$timeout',
  '$location',
  '$anchorScroll',
  '$mdMedia',
  '$mdSidenav',
  function(
    $timeout,
    $location,
    $anchorScroll,
    $mdMedia,
    $mdSidenav
  ) {

    function MenuManager() {

      this.minWidth = '(min-width: 1100px)'

      this.screen = {
        show       : false,
        bigScreen  : $mdMedia(this.minWidth),
        isLoading  : false,
      }

      this.items = [
        {
          title    : 'Profile',
          show     : true,
          children : [
            'Introduction',
            'Experience',
            'Technology',
            'Education',
            'Awards',
            'Connect'
          ]
        },
        {
          title : 'Research',
        },
        {
          title : 'Projects',
        },
        {
          title : 'Music',
        },
      ]

      var url = $location.path()
      var urlSubs = url.split('/')

      if (urlSubs.length > 1) {

        this.selected = {
          parent : _.capitalize(urlSubs[1]),
          child  : null
        }
      } else {

        this.selected = {
          parent : 'Profile',
          child  : 'Introduction'
        }
      }
    }

    MenuManager.prototype.showScreen = function() {

      this.screen.show = true
    }

    MenuManager.prototype.toggleSidebar = function() {

      var sidebar = $mdSidenav('sidebar')
      if (_.isNil(sidebar)) return

      sidebar.toggle()
    }

    MenuManager.prototype.watch = function(scope) {
      var self = this

      scope.$watch(function() {

        return $mdMedia(self.minWidth)
      }, function(big) {

        self.toggleSidebarByScreenSize(big)
      })
    }

    MenuManager.prototype.toggleSidebarByScreenSize = function(big) {

      this.screen.bigScreen = big

      var sidebar = $mdSidenav('sidebar')
      if (_.isNil(sidebar)) return false

      if (this.screen.bigScreen) return sidebar.open()

      return sidebar.close()
    }

    MenuManager.prototype.isScreenBig = function() {

      return $mdMedia(this.minWidth)
    }

    MenuManager.prototype.isSidebarLocked = function() {

      if ($mdMedia('portrait')) return false

      return $mdMedia(this.minWidth)
    }

    MenuManager.prototype.isSelected = function(parent, child) {

      if (_.isNil(parent.children)) return this.selected.parent === parent.title

      return this.selected.parent === parent.title && this.selected.child === child
    }

    MenuManager.prototype.select = function(parent, child) {
      var self = this

      if (this.selected.parent !== parent.title) {
        this.screen.isLoading = true
      }

      var path = _.replace(_.lowerCase(parent.title), ' ', '_')
      var hash = path

      this.selected.parent = parent.title
      this.selected.child = null

      if (!_.isNil(child)) {

        hash = path + '_' + _.replace(_.lowerCase(child), ' ', '_')
        this.selected.child = child
      } else if (!_.isNil(parent.children)) {

        parent.show = !parent.show
        return
      }

      $location.path(path)

      $timeout(function() {

        $location.hash(hash)
        $anchorScroll()

        if (path === hash) $location.hash(null)

        $timeout(function() {

          self.screen.isLoading = false
        })
      })
    }

    return new MenuManager()
  }
])
