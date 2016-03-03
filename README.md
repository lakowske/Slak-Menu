# slak-menu
A Slak virtual-dom menu component.  Renders a horizontal list and highlights the selected menu item.

# Import

``` js
var Menu = require('slak-menu');
```

# Construct

``` js
// Build a menu with the given items
var menu = Menu.Menu([{name:'Zendo'}, {name:'Schedule'}], emit);
```

# Render

``` js
// Render a menu component to a hyperscript tree.
var tree = Menu.render(menu);
```

