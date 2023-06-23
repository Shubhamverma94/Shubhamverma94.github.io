import React from "react";
import "./SocialBar.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import Shubham_Verma_Resume from "../../assests/Shubham_Verma_Resume.pdf";

const SocialBar = () => {
  const onButtonClick = () => {
    window.open(Shubham_Verma_Resume);
  };

  return (
    <div id="socialbody">
      <div class="icon-bar">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=imkannu.shubham@gmail.com&cc=imkannu.shubham@gmail.com&bcc=imkannu.shubham@gmail.com&su=Noticed Your Work. Let's connect.&body=Hey Shubham! Drop your Resume."
          target="_blank"
          title="Gmail"
        >
          <SiGmail />
        </a>
        <a href="https://www.linkedin.com/in/shubhamverma17/" target="_blank" title="LinkedIn">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Shubhamverma94" target="_blank" title="Github">
          <FaGithub />
        </a>

        <a href="https://twitter.com/kannu_shubham17" target="_blank" title="Twitter">
          <FaTwitter />
        </a>
        <a href="tel:9074967678" target="_blank" rel="noreferrer" title="Contact">
          <BsFillTelephoneFill />
        </a>
        <a
          href={Shubham_Verma_Resume}
          target="_blank"
          onClick={onButtonClick}
          download="Shubham_Verma_Resume"
          title="Resume"
        >
          <FaFileDownload />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
