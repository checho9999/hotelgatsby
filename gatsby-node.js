//Utilizamos el archivo gatsby-node.js para poder crear paginas dinamicas con 
//programacion(ya que si bien en este proyecto son solo 3 habitaciones, a futuro seria muy 
//complejo si el numero de paginas fuera mayor) para lo cual accederemos a la base de datos 
//para obtener la cantidad de habitaciones existentes mediante el slug, para luego con esta 
//cantidad llamar al template que mostrara el detalle de los datos de cada habitacion...
//cada vez que se ejecute el actions.createPage, en nuestro caso seria una ejecucion por cada 
//habitacion, se va a crear en la carpeta public/page-data la pagina dinamica correspodiente 
//a cada habitacion, es decir, hab1, hab2 y hab3.

exports.createPages = async ( { actions, graphql, reporter } ) => {
    
    //Obtenemos las cantidad de habitaciones
    const resultado = await graphql(`
        query {
            allDatoCmsHabitacion {
                nodes {
                    slug
                }
            }
        }
    `);

    // You can delete this file if you're not using it
    //Este console.log se puede observar desde el servidor
    //console.log(resultado.data.allDatoCmsHabitacion.nodes);

    if(resultado.errors) {
        reporter.panic('No hubo resultados ', resultado.errors);
    }

    //Si el query nos devuelve al menos una habitacion, entonces llamamos al template con el slug correspondiente
    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(habitacion => {
        actions.createPage({
            path: habitacion.slug,
            component: require.resolve('./src/components/habitaciones.js'),
            context: {
                slug: habitacion.slug
            }
        })
    })    

}