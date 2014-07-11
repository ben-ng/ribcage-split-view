var $ = require('jquery')
  , Backbone = require('backbone')
  , RibcageSplitView = require('../index.js')
  , $body = $('body')
  , ribcageSplitView

Backbone.$ = $

// Show us how the RibcageSplitView component works
ribcageSplitView = new RibcageSplitView({
})
$body.append(ribcageSplitView.el)
