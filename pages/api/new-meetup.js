import {MongoClient} from 'mongodb' ;

async function handler(req,res) {
    if (req.method === 'POST') {
        const data = req.body ;


        const result = await meetupsCollection.insertOne(data) ;

        console.log(result);
        client.close() ; 
        // close db when we re done
        //  201 : insert succesfully
        res.status(201).json({message: 'Insert success!'});
    }
}

export default handler ;