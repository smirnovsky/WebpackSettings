import $ from 'jquery'

$('<h1 />')
    .text('Hello from JQuery')
    .css({
        textAlign: 'center',
        color: 'blue'
    })
    .appendTo($('header'))