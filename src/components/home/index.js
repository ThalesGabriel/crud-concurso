import React, { Component } from 'react';

export default class Home extends Component {
    render(){
        return(
            <div>
                <head>
                    <meta charset="utf-8"/>
                    <title>Hello Bulma!</title>
                </head>
                <body>
                <section class="section">
                    <div class="container has-text-centered">
                        <h1 class="title">
                            Hello World!
                        </h1>
                        <p class="subtitle">
                            Este sistema tem como objetivo apresentar o DER-1 de maneira contextualizada, 
                                        para iniciar clique em "cadastre-se ou login"
                        </p>
                    </div>
                </section>
                </body>
            </div>
        )
    }
}