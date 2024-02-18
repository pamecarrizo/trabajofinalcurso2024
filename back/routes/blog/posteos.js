var express = require("express");
var router = express.Router();
var posteosmodels = require("../../models/posteosmodels");

router.get("/", async function (req, res, next) {
  var posteos = await posteosmodels.getPosteos();

  res.render("blog/posteos", {
    layout: "blog/layout",
    usuario: req.session.nombre,
    posteos,
  });
});

router.get("/agregar", function (req, res, next) { 
  res.render("blog/agregar", {
    layout: "blog/layout",
  });
});

router.post("/agregar", async (req, res, next) => {
  try {
    if (req.body.titulo != "" && req.body.cuerpo != ""){
      await posteosmodels.insertPosteos(req.body);
      res.redirect('/blog/posteos')
    } else{
      res.render('blog/agregar', {
        layout: 'blog/layout', 
        error: true,
        message: 'Todos los campos son necesarios'})
    }
  } catch(error){
    console.log(error)
    res.render('blog/agregar',{
      layout: 'blog/layout', 
        error: true,
        message: 'No se cargo el posteo'
    })
  }
}); 

router.get('/eliminar/:id', async (req,res,next)=>{
  var id = req.params.id;
  await posteosmodels.deletePosteobyId(id);
  res.redirect('/blog/posteos');
});

module.exports = router;
