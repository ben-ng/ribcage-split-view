var test = require('prova')
  , RibcageSplitView = require('./index.js')
  , createView = function createView(options){
    return new RibcageSplitView(options)
  }

test('RibcageSplitView Component: constructor', function(t){

  var view = createView()
  t.equal(
    typeof view
    , 'object'
    , 'creates an object'
  )

  t.end()
})

test('RibcageSplitView Component: beforeInit', function(t){
  var view = createView()

  t.end()
})
