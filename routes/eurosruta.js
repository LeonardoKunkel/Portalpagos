const express = require('express'),
Euros1 = require('../models/Elemento1'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let Euros2 = {
        ticket:body.ticket,
        rfc:body.rfc,
        piloto:body.piloto,
    }

    Euros1.create(Euros2,(err,Euros2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            Euros2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    Euros1.find().
    exec((err,Euros3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            Euros3
        })
    })
})

module.exports = router;