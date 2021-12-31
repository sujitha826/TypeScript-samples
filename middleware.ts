import { NextFunction, Request, Response } from "express";

var validateInputs = function (req: Request, res: Response, next: NextFunction) {
    const p1 = req.body.prod_code;
    const p2 = req.body.prod_name;
    const pr = req.body.prod_price;
    const pgst = req.body.prod_GST;
    console.log(p1, p2, pr, pgst);
    console.log(p1, p2, typeof (p1), typeof (p2));
    const letters = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    const letterNumber = /^[a-zA-Z0-9]+$/;
    const floatno = /^[0-9]+(\.)?[0-9]*$/;
    if (!(p1.match(letterNumber))) {
        console.log("Invalid Product Code!!");
        res.status(400).send({ message: 'Correct your Product Code: only letters and numbers.' });
        return;
    }
    else if (!((p2).match(letters))) {
        res.status(400).send({ message: 'Correct your Product Name: only letters and spaces.' });
        return;
    }
    else if (isNaN(pr)) {
        console.log("Invalid Product Price!!");
        res.status(400).send({ message: 'Invalid Product Price given' });
        return;
    }
    else if (!(floatno.test(pgst))) {
        console.log("Invalid Product GST!!");
        res.status(400).send({ message: 'Invalid Product GST given' });
        return;
    };
    next();
}

var validateId = function (req: Request, res: Response, next: NextFunction) {
    var id = req.params.id;
    console.log(id);
    const letterNumber = /^[a-zA-Z0-9]+$/;
    if (!(id.match(letterNumber))) {
        res.status(400).send({ message: 'Invalid Product ID given' });
        return;
    };
    next();
}

var validateName = function (req: Request, res: Response, next: NextFunction) {
    var nm = req.params.name;
    console.log(nm);
    const letters = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    if (!(nm.match(letters))) {
        res.status(400).send({ message: 'Invalid Product name given' });
        return;
    };
    next();
}

export { validateInputs, validateId, validateName };