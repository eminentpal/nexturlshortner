import React, { useEffect } from "react";

import { useRouter } from "next/router";
// import Home from "../components/Home/Home";

const LinkId = (props) => {
  const route = useRouter();

  const newId = route.query.linkId;
  const newLink = props?.Oldlink;

  console.log(newId);

  const oldId = props?.linkId;
  console.log(oldId);
  useEffect(() => {
    if (oldId && oldId === newId) {
      window.location.replace(newLink);
    }
  }, [oldId, newLink, newId]);

  console.log(props);
  if (props.error) return <div>{props.error}</div>;
  return <div>{/* <Home props={props} /> */}</div>;
};

export default LinkId;

export async function getServerSideProps(context) {
  const linkId = context.params.linkId;

  console.log(linkId);
  const response = await fetch(
    `https://shutly.vercel.app/api/shortlinks/${linkId}`
  );

  console.log(response);
  if (response.status === 200) {
    const singleLink = await response.json();

    return {
      props: {
        // if you dont convert it back from objectId to string it will gv
        // strelization error
        id: singleLink._id.toString(),
        date: singleLink.date,
        Oldlink: singleLink.Oldlink,
        linkId: singleLink.linkId,
      },
    };
  } else {
    return {
      props: {
        error: "short link is incorrect",
      },
    };
  }
}
