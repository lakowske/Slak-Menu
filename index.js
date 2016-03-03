/*
 * (C) 2016 Seth Lakowske
 */

var h = require('virtual-dom/h');
var ListView = require('slak-listview');
var EventEmitter  = require('events');

/*
 * Construct a horizontal menu
 */
function Menu(items, emit) {
    var events = new EventEmitter();

    var state = {
        selected : items[0],
        events
    }

    state.listView = ListView.ListView(items,
                                       itemToTreeFn(state, events),
                                       '',
                                       '',
                                       false,
                                       false,
                                       {className : 'menu'});
    
    events.on('click', function(item) {
        state.selected = item;
        emit('dirty');
    })
    
    return state;
}

function render(state) {

    return ListView.render(state.listView);
    
}

function itemToTreeFn(state, events) {

    return function(item, emit) {
        return h('a', {href: '#',
                       onclick: function() {events.emit('click', item)},
                       className: item === state.selected ? 'selected' : '',
                       style: "display: block"}, item.name)
    }
    
}

module.exports.Menu = Menu;
module.exports.render = render;










