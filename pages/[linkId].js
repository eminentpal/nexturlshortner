import React, {useEffect} from "react";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
// import Home from "../components/Home/Home";


const LinkId = (props) => {
 
  const route = useRouter();

  
  const newId = route.query.linkId;
  const newLink = props?.Oldlink

  console.log(newId);

  

  const oldId = props?.linkId;
  console.log(oldId);
  useEffect(() => {

    if (oldId && oldId === newId) {
      window.location.replace(newLink);
    }
    
  }, [oldId, newId]);


  return (
    <div>
      {/* <Home props={props} /> */}
    </div>
  );
};

export default LinkId;

export async function getStaticProps(context) {
  const linkId = context.params.linkId;

    const response = await fetch(`http://localhost:3000/api/shortlinks/${linkId}`);
    const singleLink = await response.json();

    console.log(singleLink);

  // const client = await MongoClient.connect(
  //   "mongodb://localhost:27017/shortlinkdb"
  // );
  // const db = client.db();
  // const shortenLink = db.collection("shortlinks");

  // const singleLink = await shortenLink.findOne({ 'linkId': linkId });

  // console.log(singleLink);

  // client.close();

  return {
    props: {
      // if you dont convert it back from objectId to string it will gv
      // strelization error
      id: singleLink._id.toString(),
      date: singleLink.date,
      Oldlink: singleLink.Oldlink,
      linkId: singleLink.linkId,
    },
    revalidate: 4,
  };
}


export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb://localhost:27017/shortlinkdb"
  );
  const db = client.db();
  const shortenLink = db.collection("shortlinks");

  const linkIds = await shortenLink.find({}, { linkId: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: linkIds.map((link) => ({
      params: { linkId: link.linkId.toString() },
    })),
  };
}
