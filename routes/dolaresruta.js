const express = require('express'),
Dolares1 = require('../models/Elemento1'),
{verificarToken} = require('../server/middlewares/auth'),
router = express.Router();

router.post('/create',[verificarToken], (req,res) => {
    const body = req.body;
    console.log(body);

    let Dolares2 = {
        ticket:body.ticket,
        rfc:body.rfc,
        piloto:body.piloto,
    }

    Dolares1.create(Dolares2,(err,Dolares2Bd) => {
        if (err) {
            res.status(400).json({
                message: 'error al crear punto16',
                err
            })
        }

        res.json({
            ok:true,
            Dolares2Bd
        })
    })
})


router.get('/', [verificarToken], (req,res) => {
    Dolares1.find().
    exec((err,Dolares3) => {
        if (err) {
            res.status(400).json({
                message: 'error al traer los Aspectos',
                err
            })
        }

        res.json({
            ok:true,
            Dolares3
        })
    })
})

module.exports = router;