// const params = req.query.params
// console.log(params)
// res.status(200).json(params)
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "GET") {
      console.log('hit')
      const id = req.query.linkId;
  
      console.log(id);
      
      const client = await MongoClient.connect(
        "mongodb://localhost:27017/shortlinkdb"
      );
      const db = client.db();
      const shortenLink = db.collection("shortlinks");
  
      const singleLink = await shortenLink.findOne({ linkId : id });
  
    //   console.log(singleLink);
  
      client.close();
      res.status(200).json(singleLink);
    }

}