angular.module('app')

.factory('MenuManager', [
  '$timeout',
  '$location',
  '$anchorScroll',
  function(
    $timeout,
    $location,
    $anchorScroll
  ) {

    function MenuManager() {

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
      ]

      this.selected = {
        parent : 'Profile',
        child  : 'Introduction'
      }
    }

    MenuManager.prototype.select = function(parent, child) {

      var path = _.replace(_.lowerCase(parent.title), ' ', '_')
      var hash = path

      this.selected.parent = parent.title
      this.selected.child = null

      if (!_.isNil(child)) {

        hash = path + '_' + _.replace(_.lowerCase(child), ' ', '_')
        this.selected.child = child
      } else if (!_.isNil(parent.children)) {

        parent.show = !parent.show
      }

      this.goTo(path, hash)
    }

    MenuManager.prototype.isSelected = function(parent, child) {

      if (_.isNil(parent.children)) {

        return this.selected.parent === parent.title
      }

      return this.selected.parent === parent.title && this.selected.child === child
    }

    MenuManager.prototype.goTo = function(path, hash) {
      var self = this
      $location.path(path)

      $timeout(function() {

        $location.hash(hash)
        $anchorScroll()
        if (path === hash) {
          $location.hash(null)
        }
      })
    }

    return new MenuManager()
  }
])
