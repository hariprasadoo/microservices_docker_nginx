import express, { Request, Response } from 'express';

const app = express(); 
const router = express.Router(); 

// Setup essential routes 
router.get('/microservice2', function(req:Request, res:Response) { 
     res.send("Microservice 2....."); 
}); 

app.use('/', router);
app.listen(process.env.PORT || 3002); 
console.log('Running at Port 3002');