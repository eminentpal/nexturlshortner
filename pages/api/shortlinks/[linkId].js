// const params = req.query.params
// console.log(params)
// res.status(200).json(params)
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
      console.log('hit')
      const id = req.query.linkId;
  
    
      
      const client = await MongoClient.connect(
        process.env.DB_URL
      );
      const db = client.db();
      const shortenLink = db.collection("shortlinks");
  
      const singleLink = await shortenLink.findOne({ linkId : id });
  
    //   console.log(singleLink);
  
      client.close();
      if (singleLink) {
        res.status(200).json(singleLink);
      }
     else {
       res.status(404).json({message:"Not Found"})
     }
    }

}