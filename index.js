/*
 * (C) 2016 Seth Lakowske
 */

var h = require('virtual-dom/h');
var ListView = ('Slak-ListView');
var EventEmitter  = require('events');

/*
 * Construct a horizontal menu
 */
function Menu(items) {
    var events = new EventEmitter();
    
    return {
        listView : ListView.ListView(items, itemToTreeFn(events), '', ''),
        events
    }
    
}

function render(state) {

    ListView.render(state.listView);
    
}

function itemToTreeFn(events) {

    return function(item, emit) {
        return h('a', {href: '#', onclick: function() {events.emit('click', item)} }, item.name)
    }
    
}
