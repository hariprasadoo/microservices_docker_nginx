import express, { Request, Response } from 'express';

const app = express(); 
const router = express.Router(); 

// Setup essential routes 
router.get('/microservice1', function(req:Request, res:Response) { 
     res.send("Microservice 1....."); 
}); 

app.use('/', router);
app.listen(process.env.PORT || 3001); 
console.log('Running at Port 3001');