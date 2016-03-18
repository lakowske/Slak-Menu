/*
 * (C) 2016 Seth Lakowske
 */

var h = require('virtual-dom/h');
var ListView = require('slak-listview');
var EventEmitter  = require('events');

/*
 * Construct a horizontal menu
 */
function Menu(items, opts) {
    var events = new EventEmitter();

    var state = {
        selected : items[0],
        events
    }

    var itemToTree = itemToTreeFn;
    var className = 'menu';
    
    if (opts) {
        if (opts.itemToTreeFn) {
            itemToTree = itemToTree;
        }
        if (opts.className) {
            className = opts.className
        }
    }
    
    state.listView = ListView.ListView(items,
                                       itemToTree(state, events),
                                       '',
                                       '',
                                       false,
                                       false,
                                       {className : className});
    
    events.on('click', function(item) {
        state.selected = item;
     })
    
    return state;
}

function render(state) {

    return ListView.render(state.listView);
    
}

function itemToTreeFn(state, events) {

    return function(item, emit) {
        return h('a', {href: '#' + item.name,
                       onclick: function() {events.emit('click', item)},
                       className: item === state.selected ? 'selected' : '',
                       }, item.name)
    }
    
}

function setItems(state, items) {
    state.listView.items = items;
    state.selected = items[0];
    return state;
}

module.exports.Menu = Menu;
module.exports.render = render;
module.exports.setItems = setItems;
