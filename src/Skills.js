import "./reveal.css";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Skills = () => {
  const { t } = useTranslation();



  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        // } else {
        // reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="skills">
      <div className="container">
        <div className="py-5">
          <h2 className="verde">{t("titulohabilidad")}</h2>
          <p className="notfound">
            {t("bajadahabilidad")}
          </p>
        </div>

        <div className="row justify-content-around">
          <div className="col-md-6 reveal fade-bottom pb-4">
            <h4 className="notfound">Design</h4>
            <div className="d-inline-flex py-3 ">
              <div className="pe-2">
                <Icon icon="logos:figma" height="60"  />
              </div>
              <div className="px-2">
                <Icon icon="logos:adobe-photoshop" height="60" />
              </div>
              <div className="px-2">
                <Icon icon="logos:adobe-illustrator" height="60" />
              </div>
              <div className="p-2 mx-2 miro">
                <Icon icon="simple-icons:miro" height="50" />
              </div>
            </div>

            <div className="reveal fade-bottom py-5">
              <h4 className="notfound">Development</h4>
              <div className="d-flex flex-wrap py-2 ">
                <div className="py-2 ">
                  <Icon icon="vscode-icons:file-type-html" height="60" />
                </div>
                <div className="p-2">
                  <Icon icon="logos:javascript" height="60" />
                </div>
                <div className="p-2">
                  <Icon icon="logos:react" height="60" />
                </div>
                <div className="p-2">
                  <Icon icon="vscode-icons:file-type-tailwind" height="60" />
                </div>
                <div className="p-2">
                  <Icon icon="logos:bootstrap" height="60" />
                </div>
                <div className="p-2">
                  <Icon icon="logos:visual-studio-code" height="60" />
                </div>
                <div className="p-2">
                  <Icon icon="bi:github" className="notfound" height="60" />
                </div>
              </div>
            </div>
          </div>

          

          <div className="col-md-5 offset-md-1 reveal fade-bottom">
            <h4 className="notfound">Email Marketing</h4>

            <div className="d-flex flex-wrap align-items-center">
              <div className="pe-3">
                <Icon icon="logos:salesforce" height="60" />
              </div>
              <div className="mx-3 chimp">
                <Icon icon="cib:mailchimp" height="60" />
              </div>
              <div className="px-3">
                <Icon icon="logos:sendgrid-icon" height="60" />
              </div>
              <div className="p-3 align-self-center">
                <img
                  src="img/skill/oracle-eloqua-logo.png"
                  width={"150px"}
                  alt="email mkt"
                />
              </div>
            </div>

            <div className="reveal fade-bottom py-5">
              <h4 className="notfound">Productivity</h4>
              <div className="d-flex flex-wrap py-3 ">
                {/* <div className="me-2 notion">
                  <Icon icon="cib:notion" fill="#ffffff" height="60" />
                </div> */}
                <div className="pe-2">
                <img
                  src="img/skill/notion-logo.svg"
                  width={"60px"}
                  alt="notion"
                />
              </div>
                <div className="px-3">
                  <Icon icon="logos:monday-icon" height="60" />
                </div>
                <div className="px-3">
                  <Icon icon="logos:asana-icon" height="60" />
                </div>
                {/* <div className="px-3">
                  <Icon icon="logos:slack-icon"  height="60" />
                </div> */}
                <div className="ps-2">
                  <Icon icon="logos:jira" height="60" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Skills;
