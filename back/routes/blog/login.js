var express = require("express");
var router = express.Router();
var usuariosmodel = require("../../models/usuariosmodel");

router.get("/", function (req, res, next) {
  res.render("blog/login", { layout: "blog/layout" });
});

router.post("/", async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosmodel.getUserByUsernameAndPassword(
      usuario,
      password
    );

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect("/blog/posteos");
    } else {
      res.render("blog/login", {
        layout: "blog/login",
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('blog/login', {
    layout: 'blog/layout'
  });
});

module.exports = router;
