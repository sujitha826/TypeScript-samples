import express from "express";
import { allRecords } from "../controllers/getAll";
import { postRecords } from "../controllers/addProduct";
import { updateProduct } from "../controllers/updateProduct";
import { searchProduct, getProduct } from "../controllers/searchProduct";
import { validateInputs } from "../validators/middleware";
import { getCosts } from "../controllers/getCost";
import { getHistory, getHistoryOne } from "../controllers/getBillHistory"

const router = express.Router();

 // Get all products available
router.get("/allproducts", (req: any, res: any) => {
    allRecords(req, res);
});

 // Add new product
router.post("/addproducts", validateInputs, (req: any, res: any) => {
    postRecords(req, res);
});

router.put("/updateProduct/:val", (req: any, res: any) => {
    updateProduct(req, res);
});

router.get("/searchProduct/:val", (req: any, res: any) => {
    searchProduct(req, res);
});

router.get("/getProduct", (req: any, res: any) => {
    getProduct(req, res);
});

router.post("/getCosts", (req: any, res: any) => {
    getCosts(req, res);
});

router.get("/getBills", (req: any, res: any) => {
    getHistory(req, res);
});

router.get("/getBillsOfOne/:code", (req: any, res: any) => {
    getHistoryOne(req, res);
});

export { router };


 /* TSLint is an extensible static analysis tool that checks TypeScript code for readability,
 maintainability, and functionality errors. It is widely supported across modern editors &
 build systems and can be customized with your own lint rules, configurations, and formatters.*/

 /* Gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow,
 Gulp can replace the automatic compilation of TypeScript file*/
