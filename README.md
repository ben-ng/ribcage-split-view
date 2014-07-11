# RibcageSplitView

## Usage
```js
  var RibcageSplitView = require('ribcage-split-view')
    , Backbone = require('Backbone')
    , options = {
        split: 40
      , minWidth: 500
      , rootView: new Backbone.View()
      }
    , ribcageSplitView = new RibcageSplitView(options)
```

```css
@import "ribcage-split-view";
```

## Options

 * **split** - Integer from 0 to 100 defining the percentage of the screen the left pane should occupy
 * **minWidth** - The minimum width of the screen that should enable the split view

## Tests
Tests are in [prova](https://github.com/azer/prova).

## Developing
Install [ribcage](https://github.com/Techwraith/ribcage)

```sh
npm i -g ribcage
ribcage preview .
```

Open [http://localhost:4000/default](http://localhost:4000/default)

