import Article from '../models/modelStore.js';




// METIODOS PARA EL CRUD DE LA TIENDA

export const  getArticles = async (req, res) => { 
    try {
        
        const  articles = await Article.findAll();
        
        res.json(articles);
        
    } catch (error) {
        console.log("entro aca al error nuevo");
        res.json({ error: error.message})
    }
}

export const getArticle = async (req, res) => {


    try {

        const getArticle =  await Article.findAll({

            where: {
                id_articulo: req.params.id,
            }
        })

        res.json(getArticle[0]);
        
    } catch (error) {
        
        res.json({ error: error.message})

    }

}

export const createArticle = async (req, res) => {


    try {

    
        await Article.create(req.body);

       res.json({ message: 'Registro creado de manera correcta!z'});
        
    } catch (error) {
        
        res.json({ error: error.message});

    }
}


export const updateArticle = async (req,res) => {


    try {
        
        await Article.update(req.body,{

            where: {id_articulo: req.params.id},
        })

        res.json({Message: 'Registro actualizado correctamente' });
        
    } catch (error) {
        
        res.json({ error: error.message});
    }
}

export const deleteArticle = async (req,res) => {

    try {

        await Article.destroy({
            where: {id_articulo: req.params.id}
        })

        res.json({Message: 'Registro eliminado correctamente' });
        
    } catch (error) {
        
        res.json({ error: error.message});

    }
}