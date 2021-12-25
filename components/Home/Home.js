import React, { useEffect, useState } from "react";
import validUrl from "valid-url";
import shortId from "shortid";
import { useDispatch, useSelector } from "react-redux";
import { urlCreate, urlFetch } from "../../actions/urlActions";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRouter } from "next/router";
const Home = (props) => {
  const route = useRouter();

  console.log(route);

  const [linkId, setLinkId] = useState("");
  const [short, setShort] = useState("");
  const [showUrl, setShowUrl] = useState([]);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const { urlItems } = useSelector((state) => state.url);

  const newItems = urlItems?.reverse()?.slice(0, 5);

  const dispatch = useDispatch();

  const link = "u1c86dvlF";

  //Create shortener ID
  const createId = () => {
    const shortme = shortId.generate();

    setLinkId(shortme);
  };

  useEffect(() => {
    if (showUrl) {
      createId();
    }
  }, [showUrl]);

  const handleChange = (e) => {
    setShort(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validUrl.isUri(short)) {
      alert("invalid URL. URL must start with https://");
    } else {
      setShowUrl((prev) => {
        return [...prev, short];
      });

      dispatch(urlCreate({ linkId, short }));
      setShort("");
    }
  };

  const handleClick = (id) => {
    setText(`https://shutly.vercel.app/${id}`);

    setTimeout(function () {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      <div className="section">
        <div className="row">
          <div className="col-2">
            <h1>
              {" "}
              More than just <br />
              Shorter links
            </h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn">Get Started</button>
          </div>

          <div className="col-3">
            <img src="images/illustration-working.svg" alt="illustration" />
          </div>
        </div>
      </div>

      <div className="cont">
        <div className="shorter">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Shorten a link here..."
              name="url"
              type="text"
              value={short}
              onChange={handleChange}
            />

            <button>Shorten It!</button>
          </form>
        </div>

        <div className="linkContainer">
          {newItems.map((item) => (
            <div key={item.linkId} className="linkCont">
              <div className="linkDiv">
                <p style={{ marginBottom: "15px" }} href={`/${item.url}`}>
                  {item?.url?.length > 27 ? (
                    <span>{item.url?.substring(0, 25)}...</span>
                  ) : (
                    <span>{item.url}</span>
                  )}
                </p>
                <a href={`/${item.linkId}`}>shutly.vercel.app/{item.linkId}</a>
                <CopyToClipboard
                  options={{ debug: props.debug, message: "" }}
                  text={text}
                  onCopy={() => setCopied(true)}
                >
                  <button
                    className="linkBtn"
                    style={{
                      backgroundColor:
                        text === `https://shutly.vercel.app/${item.linkId}` &&
                        copied &&
                        "#3B2F53",
                    }}
                    onClick={() => handleClick(item.linkId)}
                  >
                    {text === `https://shutly.vercel.app/${item.linkId}` &&
                    copied ? (
                      <span>Copied!</span>
                    ) : (
                      <span>Copy</span>
                    )}{" "}
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          ))}
        </div>

        <div className="miniCont">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing acrross the web with <br />
            our advanced statistics dashboard.
          </p>
        </div>

        <div className="mainBox">
          <div className="box1">
            <div className="boxContent1">
              <div className="box1Image">
                <img
                  src="/images/icon-brand-recognition.svg"
                  alt="brand recognition"
                />
              </div>
              <div className="contentOne">
                <h5> Brand Recognition</h5>
                <p>
                  {" "}
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
          </div>
          {/* <hr className="homeHr"  /> */}
          <div className="box2">
            <div className="boxContent1">
              <div className="box1Image">
                <img
                  src="/images/icon-detailed-records.svg"
                  alt="brand recognition"
                />
              </div>
              <div className="contentOne">
                <h5>Detailed Records</h5>
                <p>
                  {" "}
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="box3">
            <div className="boxContent1">
              <div className="box1Image">
                <img
                  src="/images/icon-fully-customizable.svg"
                  alt="brand recognition"
                />
              </div>
              <div className="contentOne">
                <h5>Fully Customizable</h5>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="longBoxDiv">
          <div className="lBox">
            <h3>Boost your links today</h3>
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
