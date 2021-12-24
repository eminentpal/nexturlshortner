// import { comments } from "../../../data/comments";
import { MongoClient } from "mongodb";

// this is how to create a get req
export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log('h0t')
    // const id = req.params;

    // console.log(id);
    
    // const client = await MongoClient.connect(
    //   "mongodb://localhost:27017/shortlinkdb"
    // );
    // const db = client.db();
    // const shortenLink = db.collection("shortlinks");

    // const singleLink = await shortenLink.findOne({ linkId : id });

    // console.log(singleLink);

    // client.close();
    res.status(200).json();
  } else if (req.method === "POST") {
    const { linkId, short } = req.body;

    const shortUrl = {
      date: Date(),
      linkId: linkId,
      Oldlink: short,
    };

    const client = await MongoClient.connect(
      "mongodb://localhost:27017/shortlinkdb"
    );
    const db = client.db();
    const shortenLink = db.collection("shortlinks");

    const result = await shortenLink.insertOne(shortUrl);

    console.log(result);

    client.close();

    res.status(201).json({ message: " success " });
  }
}
