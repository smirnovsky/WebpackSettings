import React from 'react'
import $ from 'jquery'

 export default class App extends React.Component {

     componentDidMount() {

        $('<h1 />')
            .text('Hello from JQuery')
            .css({
                textAlign: 'center',
                color: '#2020c1'
            })
        .appendTo($('header'))    
     }

     render() {
         return (
             <React.Fragment>
                <header></header>

                <hr />
            
                <div className="box">

                    <h2 className="box-title">box title</h2>

                    <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis illum ex facilis natus sunt dolorem cupiditate aliquid est expedita autem!</p>
                </div>
            </React.Fragment>
         )
     }
 }