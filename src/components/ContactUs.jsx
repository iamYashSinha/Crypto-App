import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Avatar, Box, Flex, keyframes } from '@chakra-ui/react';


const ContactUs = () => {

  const avatarSrc = "https://avatars.githubusercontent.com/u/71075101";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_6vea7xl', 'template_rn65cyo', form.current, '5cSveTHbQt9DT8T5U')
      .then((result) => {
          console.log(result.text);
          alert("message sent!")
      }, (error) => {
          console.log(error.text);
      });
  };

  const size = '96px';
  const color = 'teal';

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
      overflow="hidden">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar
          src={avatarSrc}
          size="full"
          position="absolute"
          top={0}
        />
      </Box>
    </Flex>
    


    <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Silicon Valley</div>
          <div class="text-two">San Francisco</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+0012 3456 7890</div>
          <div class="text-two">+7890 3456 0012</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">sinhyash986@gmail.com</div>
          <div class="text-two">info.dummy@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my site, you can send me message from here. It's my pleasure to help you.</p>
      <form ref={form} onSubmit={sendEmail}>
        <div class="input-box">
          <input type="text" placeholder="Enter your name" name="user_name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" name="user_email"/>
        </div>
        <div class="input-box message-box" >
        <input type="text" placeholder="Message" name="message"/>

        </div>
        <div class="button">
          <input type="submit" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>









{/*     
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
   */}
    </>
  );
};

export default ContactUs;
