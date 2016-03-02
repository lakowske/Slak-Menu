/*
 * (C) 2016 Seth Lakowske
 */

var h = require('virtual-dom/h');
var ListView = require('slak-listview');
var EventEmitter  = require('events');

/*
 * Construct a horizontal menu
 */
function Menu(items) {
    var events = new EventEmitter();
    
    return {
        listView : ListView.ListView(items, itemToTreeFn(events), '', '', false, false, {className : 'menu'}),
        events
    }
    
}

function render(state) {

    return ListView.render(state.listView);
    
}

function itemToTreeFn(events) {

    return function(item, emit) {
        return h('a', {href: '#',
                       onclick: function() {events.emit('click', item)},
                       style: "display: block"}, item.name)
    }
    
}

module.exports.Menu = Menu;
module.exports.render = render;
