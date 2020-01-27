const express = require('express'),
Pagos1 = require('../models/Elemento1'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let Pagos2 = {
        peso:body.peso,
        euro:body.euro,
        dolar:body.dolar,
    }

    Pagos1.create(Pagos2,(err,Pagos2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            Pagos2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    Pagos1.find().
    exec((err,Pagos3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            Pagos3
        })
    })
})

module.exports = router;