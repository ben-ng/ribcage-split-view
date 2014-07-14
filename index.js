var Base = require('ribcage-switcher')
  , afterInitProxy = Base.prototype.afterInit
  , resizeProxy = Base.prototype.resize
  , setHolderLeftProxy = Base.prototype.setHolderLeft
  , pushProxy = Base.prototype.push

var RibcageSplitView = Base.extend({
  className: 'ribcage-split-view'
, afterInit: function (opts) {
    if(!opts.split) {
      throw new Error('The percentage split of the first view is a required option')
    }

    if(!opts.minWidth) {
      throw new Error('The minimum width to enter split-screen view is a required option')
    }

    afterInitProxy.apply(this, arguments)
  }
, setHolderLeft: function () {
    if(this.paneWidth < this.options.minWidth) {
      setHolderLeftProxy.apply(this, arguments)
    }
    else {
      setHolderLeftProxy.call(this, 0)
    }
  }
, resize: function () {
    this.paneWidth = this.$el.width()

    if(this.paneWidth < this.options.minWidth) {
      // Use the standard logic
      resizeProxy.apply(this, arguments)
    }
    else {
      if(this.currentPane == 1) {
        this.$('.pane-0').width(Math.round(this.paneWidth * this.options.split / 100))
        this.$('.pane-1').width(Math.round(this.paneWidth * (100 - this.options.split) / 100))
      }
      else {
        this.$('.pane').width(this.paneWidth)
      }

      this.$holder.width(this.paneWidth)
    }

    // Set this after the first width is set to prevent that weird initial resizing
    this.$('.pane-0').css({transition: 'width 0.3s'})
  }
, push: function (view) {
    if(this.currentPane == 1) {
      this.setPane(1, view)
      this.$pane1.scrollTop(0);
    }
    else {
      pushProxy.call(this, view)
    }
  }
})

module.exports = RibcageSplitView
