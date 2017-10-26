angular.module('app')

.factory('ProjectManager', [
  'PROJECTS',
  'TAGS',
  '$q',
  '$timeout',
  function(
    PROJECTS,
    TAGS,
    $q,
    $timeout
  ) {

    function ProjectManager() {

      this.tags = TAGS

      this.selectedTags = []
      this.searchText = undefined
      this.tagsVisible = false
    }

    ProjectManager.prototype.transformChip = function(chip) {
      if (angular.isObject(chip)) {
        return chip
      }
      return { title: chip, img: null }
    }

    ProjectManager.prototype.querySearch = function() {

      if (_.isNil(this.searchText)) return []

      var array = []
      var lowercaseQuery = angular.lowercase(this.searchText)

      _.forEach(TAGS, function(tag, key) {
        var lowercaseTag = angular.lowercase(tag.title)
        if (lowercaseTag.indexOf(lowercaseQuery) != -1) {
          tag.id = key
          array.push(tag)
        }
      })

      return array
    }

    ProjectManager.prototype.isTagSelected = function(tag) {
      
      return !!_.find(this.selectedTags, tag)
    }

    ProjectManager.prototype.getTagName = function(key) {

      var tag = TAGS[key]
      if (_.isNil(tag)) return null

      return tag.title
    }

    ProjectManager.prototype.getTagImage = function(key) {

      var tag = TAGS[key]
      if (_.isNil(tag)) return null

      return tag.img
    }

    ProjectManager.prototype.hasAll = function(projectTags) {
      var self = this

      if (_.isNil(projectTags)) return false

      var count = 0
      _.forEach(projectTags, function(key) {

        var tag = TAGS[key]
        if (_.isNil(tag)) return

        if (self.selectedTags.indexOf(tag) > -1) {
          count++
        }
      })

      return this.selectedTags.length == count
    }

    ProjectManager.prototype.getProjects = function() {
      var self = this

      if (_.isEmpty(this.selectedTags)) return PROJECTS

      var array = []
      _.forEach(PROJECTS, function(project) {

        if (self.hasAll(project.tags)) {
          array.push(project)
        }
      })

      return array
    }

    return new ProjectManager()
  }
])
