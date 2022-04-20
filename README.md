Instalacion de NextJS
 -CLI: Automatica - yarn create next -app
 - Manual: 
    - npm init -y 
    - yarn add next react react-dom

    en el package.json modificar "scripts"
    {
     "dev": "next",
    "build": "next build", //para produccion
    "start": "next start" //serv node - prod
    }

    Crear un dir llamada /pages/ (mkdir pages)

    - yarn dev 

    ##Proyecto Creado. pero con error 404...
    #vamos a agregar algunas rutas/paginas (router)

    (tipos de rutas)
    -Paginas o rutas estaticas 
    -Rutas Dinamicas (user)

    crear un index.js en el dir /pages/

    `````javascript
    //react component
    //+  rafce
        import React from 'react'

        const Home = () => {
            return(
                <div>
                    <h1>Hello World</h1>
                </div>
            );
        };

        export default Home
    `````

    ##rotuing basado en File System 
    crear otro archivo dentro de dir /pages/ (about.js)
    
    `````javascript

         import react from "react";

        const About = () => {
            return(
                <div>
                    <p>Esta es la pagina que acabo de crear</p>
                </div>
            )
        }

        export default About;
    `````



    renderizara en: 
    ###http://localhost:3000/about

    #Rutas Dinamicas
    
    crear un dir /producto/ en dir /pages/
    /product/[id].js

    `````javascript
  import react from "react";
    import { useRouter } from 'next/router'

    const ProductItem = () => {
        const router = useRouter()
        return(
            <div>
                <p>Esta es la pagina de Producto: {router.query.id} </p>
                //.id = al nombre del archivo, en este caso[id]
            </div>

            // o una manera destructurando el query: 
            //Hook syntax
            const{
                query: {id},
            } = useRouter();
            <p>Esta es la pagina del Producto : {id} </p>
            
        )
    }

    export default ProductItem;
    `````

    renderizara en 
    ###http://localhost:3000/pages/_cualquierCosa!
    http://localhost:3000/pages/sdfas
    http://localhost:3000/pages/hegavw

    📦✅ import { useRouter } from 'next/router' 

    more info: 
    https://nextjs.org/docs/routing/dynamic-routes



    SSR: (no hay client rendering). se puede ver todo el codigo fuente en el source 
#Enlazando Paginas 
usando link de nextjs

import Link from 'next/link'

routing en client side SPA (single page aplication)
`````javascript
    import React from 'react'
    import Link from 'next/link'

    const Navbar = () => {
    return (
            <nav>
                <menu>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </menu>
            </nav>
    )
    }

    export default Navbar
`````
