"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 8.99h3.56v11.46H3.54V8.99z" />
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "5.5rem 0",
        background: "#FEFAED",
      }}
    >
      {/* Background SVG */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/background.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.13,
          pointerEvents: "none",
        }}
      />

      {/* Soft white overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(254,250,237,0.91))",
          pointerEvents: "none",
        }}
      />

      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1px solid rgba(184,134,11,0.12)",
          right: "-150px",
          top: "60px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "1px dashed rgba(184,134,11,0.14)",
          right: "-50px",
          top: "130px",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div className="section-eyebrow">
            <span
              style={{
                width: "30px",
                height: "2px",
                background: "#B8860B",
                display: "inline-block",
                marginRight: "12px",
                verticalAlign: "middle",
              }}
            />
            Let&apos;s Connect
          </div>

            <h5
          className="mb-10 text-[35px] font-bold !bg-gradient-to-b !from-[#B8860B] !via-[#7A5A08] !to-[#17130A] !bg-clip-text !text-transparent"
        >
          Let's Building Something Great 
        </h5>


          <p
            style={{
              maxWidth: "680px",
              margin: 0,
              color: "#777",
              fontSize: "1rem",
              lineHeight: 1.8,
            }}
          >
            I&apos;m open to full-time opportunities, freelance projects,
            and exciting collaborations. Feel free to reach out.
          </p>
        </div>

        {/* Main Area */}
        <div
          className="contact-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "0.82fr 1.18fr",
            gap: "3rem",
            maxWidth: "1100px",
            margin: "0 auto",
            alignItems: "stretch",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              position: "relative",
              padding: "2.4rem 0",
            }}
          >
            {/* Vertical gold line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "2.5rem",
                bottom: "2.5rem",
                width: "2px",
                background:
                  "linear-gradient(to bottom, transparent, #B8860B, transparent)",
              }}
            />

            <div style={{ paddingLeft: "2rem" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#B8860B",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "0.6rem",
                }}
              >
                Contact Information
              </span>

              <h3
                style={{
                  fontSize: "1.55rem",
                  fontWeight: 800,
                  color: "#292929",
                  margin: "0 0 0.7rem",
                }}
              >
                Have a project in mind?
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "#888",
                  maxWidth: "380px",
                  marginBottom: "2.4rem",
                }}
              >
                Whether you&apos;re hiring, building a product, or simply want
                to connect, I&apos;d love to hear from you.
              </p>

              {/* Email */}
              <a
                href="mailto:swathidurai710@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Mail size={19} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>swathidurai710@gmail.com</strong>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+917708020069" className="contact-detail">
                <div className="contact-detail-icon">
                  <Phone size={19} />
                </div>

                <div>
                  <span>Phone</span>
                  <strong>+91 77080 20069</strong>
                </div>
              </a>

              {/* Location */}
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Chennai, Tamil Nadu, India</strong>
                </div>
              </div>

              {/* Socials */}
              <div
                style={{
                  display: "flex",
                  gap: "0.7rem",
                  marginTop: "2.2rem",
                }}
              >
                <a
                  href="https://github.com/Swathi-0710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/swathi-durai-7107582a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              position: "relative",
              padding: "2.5rem",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(184,134,11,0.16)",
              boxShadow: "0 25px 70px rgba(92,70,20,0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Form top accent */}
            <div
              style={{
                position: "absolute",
                left: "2.5rem",
                top: 0,
                width: "70px",
                height: "3px",
                background: "linear-gradient(90deg, #B8860B, #7A5A08)",
                borderRadius: "0 0 5px 5px",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "#292929",
                  }}
                >
                  Send a message
                </h3>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#999",
                    fontSize: "0.78rem",
                  }}
                >
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#B8860B",
                  background: "rgba(184,134,11,0.08)",
                  border: "1px solid rgba(184,134,11,0.15)",
                }}
              >
                <Send size={18} />
              </div>
            </div>

            {/* Name + Email */}
            <div
              className="form-two-column"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div>
                <label className="contact-form-label">Your Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="contact-form-input"
                />
              </div>

              <div>
                <label className="contact-form-label">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="contact-form-input"
                />
              </div>
            </div>

            {/* Subject */}
            <div style={{ marginTop: "1.15rem" }}>
              <label className="contact-form-label">Subject</label>

              <input
                type="text"
                placeholder="How can I help you?"
                className="contact-form-input"
              />
            </div>

            {/* Message */}
            <div style={{ marginTop: "1.15rem" }}>
              <label className="contact-form-label">Message</label>

              <textarea
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                className="contact-form-input"
                style={{
                  resize: "none",
                  minHeight: "135px",
                }}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              style={{
                marginTop: "1.4rem",
                width: "100%",
                height: "48px",
                border: "none",
                borderRadius: "11px",
                background:
                  "linear-gradient(135deg, #B8860B 0%, #8A6508 100%)",
                color: "#fff",
                fontSize: "0.88rem",
                fontWeight: 800,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                boxShadow: "0 10px 25px rgba(184,134,11,0.18)",
              }}
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      <style jsx global>{`
        .contact-detail {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          margin-bottom: 1.45rem;
          color: #292929;
          transition: transform 0.25s ease;
        }

        .contact-detail:hover {
          transform: translateX(5px);
        }

        .contact-detail-icon {
          width: 45px;
          height: 45px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: #b8860b;
          background: rgba(184, 134, 11, 0.07);
          border: 1px solid rgba(184, 134, 11, 0.16);
        }

        .contact-detail span {
          display: block;
          margin-bottom: 3px;
          color: #999;
          font-size: 0.67rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.09em;
        }

        .contact-detail strong {
          display: block;
          color: #333;
          font-size: 0.88rem;
          font-weight: 700;
        }

        .contact-social {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          color: #7a5a08;
          background: rgba(184, 134, 11, 0.06);
          border: 1px solid rgba(184, 134, 11, 0.15);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .contact-social:hover {
          transform: translateY(-3px);
          background: rgba(184, 134, 11, 0.12);
        }

        .contact-form-label {
          display: block;
          margin-bottom: 7px;
          color: #6f530b;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }

        .contact-form-input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(184, 134, 11, 0.14);
          border-radius: 10px;
          outline: none;
          padding: 0.82rem 0.95rem;
          background: rgba(254, 250, 237, 0.52);
          color: #292929;
          font-family: inherit;
          font-size: 0.84rem;
          transition: all 0.25s ease;
        }

        .contact-form-input::placeholder {
          color: #aaa;
        }

        .contact-form-input:focus {
          background: #fff;
          border-color: rgba(184, 134, 11, 0.45);
          box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.06);
        }

        @media (max-width: 850px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }

        @media (max-width: 600px) {
          .form-two-column {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}