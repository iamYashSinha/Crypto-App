import React, { useRef } from "react";
import { Avatar, Box, Flex, keyframes } from "@chakra-ui/react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebaseConn/firebase";

const ContactUs = () => {
  const avatarSrc = "https://avatars.githubusercontent.com/u/71075101";

  const dataRef = useRef();
  const dataRef1 = useRef();
  const dataRef2 = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(
      dataRef.current.value,
      dataRef1.current.value,
      dataRef2.current.value
    );
    dataRef.current.value = "";
    dataRef1.current.value = "";
    dataRef2.current.value = "";
  };

  const handleSubmit = (name, email, message) => {
    const ref = collection(firestore, "test_data ");
    let data = {
      name: name,
      email: email,
      message: message,
    };
    try {
      addDoc(ref, data);
      if (addDoc) {
        alert("Message submitted!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const size = "96px";
  const color = "teal";

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  } `;

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        h="216px"
        w="full"
        overflow="hidden"
      >
        {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
        <Box
          as="div"
          position="relative"
          w={size}
          h={size}
          _before={{
            content: "''",
            position: "relative",
            display: "block",
            width: "300%",
            height: "300%",
            boxSizing: "border-box",
            marginLeft: "-100%",
            marginTop: "-100%",
            borderRadius: "50%",
            bgColor: color,
            animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
          }}
        >
          <a href="https://github.com/iamYashSinha/Crypto-App" target="blank"><Avatar src={avatarSrc} size="full" position="absolute" top={0} /></a>
        </Box>
      </Flex>

      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Silicon Valley</div>
              <div className="text-two">San Francisco</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+0012 3456 7890</div>
              <div className="text-two">+7890 3456 0012</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">sinhyash986@gmail.com</div>
              <div className="text-two">info.dummy@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              site, you can send me message from here. It's my pleasure to help
              you.
            </p>
            <form onSubmit={submithandler}>
              <div className="input-box">
                <input
                  type="text"
                  ref={dataRef}
                  placeholder="Enter your name"
                  name="user_name"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  ref={dataRef1}
                  placeholder="Enter your email"
                  name="user_email"
                />
              </div>
              <div className="input-box message-box">
                <input
                  type="text"
                  ref={dataRef2}
                  placeholder="Message"
                  name="message"
                />
              </div>
              <div className="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
