import { Container } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import OvImage from "../assets/Images/Ov.png";
import NiImage from "../assets/Images/Ni.png";
import NaImage from "../assets/Images/Na.png";
import JPImage from "../assets/Images/JP.png";
import { motion } from "framer-motion";

// const { Container } = require("react-bootstrap");

function JoinSection() {
  return (
    <div className="join bg-black w-full">
      <Container className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="motion-div motion-div-md"
        >
          <div className="card">
            <div className="image-wrapper">
              <img src={OvImage} alt="img" />
            </div>
            <AnimationTitles
              title="Jose Gil"
              className="animation-title"
            />
            <div className="content-wrapper">
              <div className="info">
                <p className="gray-50">
                  Full-Stack & P.M.
                </p>
              </div>
              <div className="info">
                <a href="https://github.com/JOTALGS">
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/jose-pedro-gil-suarez-29b6b021a">
                  <svg fill="#ffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 310 310">
                    <g id="XMLID_801_">
                      <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                        C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                      <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                        c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                      <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                        c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                        c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                        C310,145.43,300.549,94.761,230.454,94.761z"/>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={NiImage} alt="img" />
            </div>
            <AnimationTitles
              title="Nicolas Valles"
              className="animation-title"
            />
            <p className="gray-50">
              
            </p>
            <div className="content-wrapper">
              <div className="info">
                <p className="gray-50">
                  Front-end & UX/UI
                </p>
              </div>
              <div className="info">
                <a href="https://github.com/NicoV00">
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/jose-pedro-gil-suarez-29b6b021a">
                  <svg fill="#ffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 310 310">
                    <g id="XMLID_801_">
                      <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                        C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                      <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                        c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                      <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                        c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                        c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                        C310,145.43,300.549,94.761,230.454,94.761z"/>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={NaImage} alt="img" />
            </div>
            <AnimationTitles
              title="Nahuel Acosta"
              className="animation-title"
            />

            <div className="content-wrapper">
              <div className="info">
              <p className="gray-50">
                Front-End
              </p>
              </div>
              <div className="info">
                <a href="https://github.com/acostanahuel">
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/jose-pedro-gil-suarez-29b6b021a">
                  <svg fill="#ffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 310 310">
                    <g id="XMLID_801_">
                      <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                        C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                      <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                        c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                      <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                        c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                        c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                        C310,145.43,300.549,94.761,230.454,94.761z"/>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image-wrapper">
              <img src={JPImage} alt="img" />
            </div>
            <AnimationTitles
              title="Pablo Ferraro"
              className="animation-title"
            />
            <div className="content-wrapper">
              <div className="info">
                <p className="gray-50">
                Back-End
                </p>
              </div>
              <div className="info">
                <a href="https://github.com/DominusJP">
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/jose-pedro-gil-suarez-29b6b021a">
                  <svg fill="#ffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 310 310">
                    <g id="XMLID_801_">
                      <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                        C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                      <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                        c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                      <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                        c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                        c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                        C310,145.43,300.549,94.761,230.454,94.761z"/>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default JoinSection;