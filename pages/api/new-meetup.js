import {MongoClient} from 'mongodb' ;

async function handler(req,res) {
    if (req.method === 'POST') {
        const data = req.body ;

        const {title, image, address, description } = data ;
        const client = await MongoClient.connect('mongodb+srv://admin:tgp-k6Mzh9Xj2FM@cluster0.nwzid.mongodb.net/meetup?retryWrites=true&w=majority'); 
        
        const db = client.db() ;
        const meetupsCollection = db.collection('meetup');

        const result = await meetupsCollection.insertOne(data) ;

        console.log(result);
        client.close() ; 
        // close db when we re done
        //  201 : insert succesfully
        res.status(201).json({message: 'Insert success!'});
    }
}

export default handler ;