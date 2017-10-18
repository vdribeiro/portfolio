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

      this.isReady = true

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
        parent : 0,
        child  : 0
      }
    }

    MenuManager.prototype.scrollTo = function(hash) {
      var self = this

      $timeout(function() {
        $location.hash(hash)
        $anchorScroll()
        $location.hash(null)
        self.isReady = true
      })
    }

    MenuManager.prototype.change = function(hash, parent, child) {

      // TODO - this.isReady = false

      this.selected.parent = parent
      this.selected.child = child

      this.scrollTo(hash)
    }

    MenuManager.prototype.select = function(parent, child) {

      var menu = this.items[parent]
      if (_.isNil(menu)) return

      var hash = _.replace(_.lowerCase(menu.title), ' ', '_')

      if (_.isNil(menu.children)) {
        this.change(hash,parent, -1)
        return
      }

      if (child < 0) {
        menu.show = !menu.show
        return
      }

      var item = menu.children[child]
      if (_.isNil(item)) return

      hash = hash + '_' + _.replace(_.lowerCase(item), ' ', '_')

      this.change(hash, parent, child)
    }

    MenuManager.prototype.isSelected = function(parent, child) {

      var menu = this.items[parent]

      if (_.isNil(menu)) return false

      if (menu.children) {
        return this.selected.parent == parent && this.selected.child == child
      }

      return this.selected.parent == parent
    }

    return new MenuManager()
  }
])
