const express = require('express'),
Pesos1 = require('../models/Elemento1'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let Pesos2 = {
        ticket:body.ticket,
        rfc:body.rfc,
        piloto:body.piloto,
    }

    Pesos1.create(Pesos2,(err,Pesos2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            Pesos2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    Pesos1.find().
    exec((err,Pesos3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            Pesos3
        })
    })
})

module.exports = router;