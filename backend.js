console.log("Arrancando Server");

var express= require("express");
var parcero=  require("body-parser");
var web = express();
web.use(parcero.urlencoded());
var server;

servidor= web.listen(8080, function () {
console.log("Arrancado");
});



//rutas

web.get("/", function (req,res) {
    res.sendfile("formulario.html");
})

web.post("/entrar", function (req,res) {
    console.log(req.body);
    res.send("logueo");
})


web.get("/home", function (req,res) {
    res.send("home");
})

web.get("/test", function (req,res) {
    res.send("test"); //en navegador
    console.log(req.query.var1);
    console.log("entro  a test con "+var1);

})

