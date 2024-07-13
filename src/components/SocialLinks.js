import React from 'react';
import config from '../../config';

export default function SocialLinks() {
  return (
    <section id="contact" className="contact-section bg-black">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Location</h4>
                <hr className="my-4" />
                <div className="small text-black-50">{config.location}</div>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fab fa-linkedin mb-2"></i>
                <h4 class="text-uppercase m-0">Contact / LinkedIn</h4>
                <hr class="my-4" />
                <div class="small text-black-50">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://linkedin.com/in/christopher-chris-nowak-77557384/"
                  >
                    <i class="fas fa-hand-point-right fa-2x align-text-top mr-2"></i>
                    See my LinkedIn profile here!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-file-alt mb-2"></i>
                <h4 class="text-uppercase m-0">Resume</h4>
                <hr class="my-4" />
                <div class="small text-black-50">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/192ng4h9Y1WDUAIVkj5YkLqzGvLYf4-cm/view?usp=sharing"
                  >
                    <i class="fas fa-hand-point-right fa-2x align-text-top mr-2"></i>
                    See my resume here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="social d-flex justify-content-center">
          {config.socialLinks.map((social) => {
            const { icon, url } = social;
            return (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mx-2`}
              >
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
