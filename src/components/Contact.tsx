"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const RECIPIENT_EMAIL = "swathiyashamk@gmail.com";

/* =========================================================
   GITHUB ICON
========================================================= */

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

/* =========================================================
   LINKEDIN ICON
========================================================= */

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

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
const [feedback, setFeedback] = useState("");
  /* =========================================================
     HANDLE INPUT
  ========================================================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* =========================================================
     HANDLE SUBMIT
  ========================================================= */

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    setStatus("error");
    setFeedback("Please fill in your name, email, and message.");
    return;
  }

  setStatus("sending");
  setFeedback("");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const raw = await res.text();
    let data: { error?: string } = {};

    try {
      data = JSON.parse(raw);
    } catch {
      throw new Error(
        res.status === 404
          ? "Contact service not found (route missing)."
          : "Server error. Please try again."
      );
    }

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    setStatus("success");
    setFeedback("Thank you! Your message has been sent.");
    setFormData(initialFormData);
  } catch (err) {
    setStatus("error");
    setFeedback(
      err instanceof Error
        ? err.message
        : "Something went wrong. Please try again."
    );
  }
};

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "5rem 0",
        background: "#ffffff",
      }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/background.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.16,
          pointerEvents: "none",
        }}
      />

      {/* Background glow */}

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          right: "-250px",
          top: "80px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(184,134,11,0.08), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="contact-container"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div
          style={{
            marginBottom: "2.2rem",
          }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: "#B8860B",
            }}
          >
            Contact Information
          </div>
        </div>

        {/* =====================================================
            CONNECTED TWO-PANEL LAYOUT
        ===================================================== */}

        <div
          className="contact-layout"
          style={{
            display: "grid",

            /*
              LEFT + RIGHT
              NO GAP
            */
            gridTemplateColumns: "0.95fr 1.05fr",

            gap: "0",

            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",

            alignItems: "stretch",
          }}
        >
          {/* ===================================================
              LEFT CARD
          =================================================== */}

          <div
            className="contact-info-card"
            style={{
              position: "relative",
              overflow: "hidden",

              padding: "2.1rem",

              /*
                ONLY OUTER LEFT CORNERS ROUNDED
              */
              borderRadius: "24px 0 0 24px",

              /*
                GOLD + BROWN + BLACK
                40% OPACITY
              */
              background:
                "linear-gradient(135deg, rgba(184,134,11,0.40), rgba(122,90,8,0.40), rgba(23,19,10,0.40))",

              border:
                "1px solid rgba(184,134,11,0.28)",

              boxShadow:
                "0 22px 60px rgba(92,70,20,0.15)",

              backdropFilter: "blur(14px)",

              minHeight: "100%",

              isolation: "isolate",
            }}
          >
            {/* =================================================
                MOVING BUBBLES
            ================================================= */}

            <span className="contact-bubble bubble-1" />
            <span className="contact-bubble bubble-2" />
            <span className="contact-bubble bubble-3" />
            <span className="contact-bubble bubble-4" />
            <span className="contact-bubble bubble-5" />
            <span className="contact-bubble bubble-6" />
            <span className="contact-bubble bubble-7" />

            {/* =================================================
                GLOW
            ================================================= */}

            <span className="contact-card-glow" />

            {/* =================================================
                SHINE
            ================================================= */}

            <span className="contact-card-shine" />

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              style={{
                position: "relative",
                zIndex: 5,
              }}
            >
              {/* Small heading */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "0.8rem",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "2px",
                    background: "#ffffff",
                    opacity: 0.85,
                  }}
                />

                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                  }}
                >
                  Contact Information
                </span>
              </div>

              {/* =================================================
                  TITLE
              ================================================= */}

              <h2
                style={{
                  margin: "0 0 0.7rem",
                  color: "#ffffff",
                  fontSize: "2rem",
                  lineHeight: 1.1,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                }}
              >
                Have a project in mind?
              </h2>

              {/* Description */}

              <p
                style={{
                  margin: "0",
                  maxWidth: "430px",
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                Whether you&apos;re hiring, building a product,
                or simply want to connect, I&apos;d love to hear
                from you.
              </p>

              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  margin:
                    "1.7rem 0 1.5rem",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.3), transparent)",
                }}
              />

              {/* =================================================
                  EMAIL
              ================================================= */}

              <a
                href={`mailto:${RECIPIENT_EMAIL}`}
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>

                <div>
                  <span>Email</span>

                  <strong>
                    {RECIPIENT_EMAIL}
                  </strong>
                </div>
              </a>

              {/* =================================================
                  PHONE
              ================================================= */}

              <a
                href="tel:+917708020069"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Phone size={18} />
                </div>

                <div>
                  <span>Phone</span>

                  <strong>
                    +91 77080 20069
                  </strong>
                </div>
              </a>

              {/* =================================================
                  LOCATION
              ================================================= */}

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>

                <div>
                  <span>Location</span>

                  <strong>
                    Chennai, Tamil Nadu, India
                  </strong>
                </div>
              </div>

              {/* =================================================
                  SOCIAL LINKS
              ================================================= */}

              <div
                style={{
                  display: "flex",
                  gap: "0.65rem",
                  marginTop: "1.5rem",
                }}
              >
                {/* GitHub */}

                <a
                  href="https://github.com/Swathi-0710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>

                {/* LinkedIn */}

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

          {/* ===================================================
              RIGHT FORM
          =================================================== */}

          <form
            onSubmit={handleSubmit}
            className="contact-form-card"
            style={{
              position: "relative",

              padding: "1.8rem",

              /*
                ONLY OUTER RIGHT CORNERS
                SO BOTH PANELS TOUCH
              */
              borderRadius: "0 24px 24px 0",

              /*
                REMOVED rgba(...,0.80)
                NOW SOLID WHITE
              */
              background: "#ffffff",

              border:
                "1px solid rgba(184,134,11,0.18)",

              boxShadow:
                "0 22px 60px rgba(92,70,20,0.09)",

              width: "100%",
              boxSizing: "border-box",

              margin: "0",
            }}
          >
            {/* =================================================
                TOP ACCENT
            ================================================= */}

            <div
              style={{
                position: "absolute",
                left: "1.8rem",
                top: 0,
                width: "65px",
                height: "3px",

                background:
                  "linear-gradient(90deg, #B8860B, #17130A)",

                borderRadius:
                  "0 0 5px 5px",
              }}
            />

            {/* =================================================
                FORM HEADER
            ================================================= */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                marginBottom: "1.25rem",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#675809",
                  }}
                >
                  Send a message
                </h3>

                <p
                  style={{
                    margin: "4px 0 0",
                    color: "#999",
                    fontSize: "0.73rem",
                  }}
                >
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              {/* Send icon */}

              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "11px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  color: "#B8860B",

                  background:
                    "rgba(184,134,11,0.07)",

                  border:
                    "1px solid rgba(184,134,11,0.15)",

                  flexShrink: 0,
                }}
              >
                <Send size={17} />
              </div>
            </div>

            {/* =================================================
                NAME + EMAIL
            ================================================= */}

            <div
              className="form-two-column"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.8rem",
              }}
            >
              {/* Name */}

              <div>
                <label className="contact-form-label">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="contact-form-input"
                />
              </div>

              {/* Email */}

              <div>
                <label className="contact-form-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="contact-form-input"
                />
              </div>
            </div>

            {/* =================================================
                SUBJECT
            ================================================= */}

            <div
              style={{
                marginTop: "0.75rem",
              }}
            >
              <label className="contact-form-label">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="contact-form-input"
              />
            </div>

            {/* =================================================
                MESSAGE
            ================================================= */}

            <div
              style={{
                marginTop: "0.75rem",
              }}
            >
              <label className="contact-form-label">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={4}
                className="contact-form-input contact-textarea"
              />
            </div>

            {/* =================================================
                SEND MESSAGE BUTTON
            ================================================= */}

<button
  type="submit"
  className="send-message-button"
  disabled={status === "sending"}
>
  <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
  <Send size={16} />
</button>

{status !== "idle" && status !== "sending" && (
  <p
    role="status"
    style={{
      margin: "0.75rem 0 0",
      fontSize: "0.78rem",
      fontWeight: 600,
      textAlign: "center",
      color: status === "success" ? "#2f7a3d" : "#b3261e",
    }}
  >
    {feedback}
  </p>
)}
          </form>
        </div>
      </div>

      {/* =====================================================
          GLOBAL STYLES
      ===================================================== */}

      <style jsx global>{`
        /* =====================================================
           CONTACT LAYOUT
        ===================================================== */
        .send-message-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  filter: none;
}
        .contact-layout {
          overflow: hidden;
          border-radius: 24px;
        }

        /* =====================================================
           LEFT CARD
        ===================================================== */

        .contact-info-card {
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .contact-info-card:hover {
          box-shadow:
            0 28px 70px rgba(92, 70, 20, 0.2) !important;
        }

        /* =====================================================
           CONTACT DETAILS
        ===================================================== */

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 0.9rem;

          margin-bottom: 1.1rem;

          text-decoration: none;

          color: #ffffff;

          transition:
            transform 0.25s ease,
            opacity 0.25s ease;
        }

        .contact-detail:hover {
          transform: translateX(5px);
          opacity: 0.95;
        }

        .contact-detail span {
          display: block;

          margin-bottom: 3px;

          color:
            rgba(255, 255, 255, 0.58);

          font-size: 0.63rem;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 0.09em;
        }

        .contact-detail strong {
          display: block;

          color: #ffffff;

          font-size: 0.84rem;

          font-weight: 700;
        }

        /* =====================================================
           CONTACT ICON
        ===================================================== */

        .contact-detail-icon {
          width: 43px;
          height: 43px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;

          color: #ffffff;

          background:
            rgba(255, 255, 255, 0.11);

          border:
            1px solid rgba(255, 255, 255, 0.2);

          backdrop-filter: blur(5px);

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .contact-detail:hover
          .contact-detail-icon {
          background:
            rgba(255, 255, 255, 0.19);

          transform: scale(1.04);
        }

        /* =====================================================
           SOCIAL BUTTONS
        ===================================================== */

        .contact-social {
          width: 41px;
          height: 41px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 11px;

          color: #ffffff;

          background:
            rgba(255, 255, 255, 0.1);

          border:
            1px solid rgba(255, 255, 255, 0.2);

          text-decoration: none;

          backdrop-filter: blur(5px);

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .contact-social:hover {
          transform: translateY(-3px);

          background:
            rgba(255, 255, 255, 0.2);

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.12);
        }

        /* =====================================================
           BUBBLES
        ===================================================== */

        .contact-bubble {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          z-index: 1;

          filter: blur(0.5px);
        }

        .bubble-1 {
          width: 15px;
          height: 15px;

          left: 12%;
          bottom: -20px;

          background:
            rgba(255, 255, 255, 0.25);

          animation:
            contactBubble1 7s ease-in-out infinite;
        }

        .bubble-2 {
          width: 30px;
          height: 30px;

          right: 8%;
          bottom: -30px;

          background:
            rgba(255, 255, 255, 0.1);

          animation:
            contactBubble2 9s ease-in-out infinite;

          animation-delay: 1s;
        }

        .bubble-3 {
          width: 9px;
          height: 9px;

          left: 45%;
          bottom: -10px;

          background:
            rgba(255, 255, 255, 0.32);

          animation:
            contactBubble3 5s ease-in-out infinite;

          animation-delay: 2s;
        }

        .bubble-4 {
          width: 21px;
          height: 21px;

          right: 32%;
          bottom: -20px;

          background:
            rgba(255, 255, 255, 0.13);

          animation:
            contactBubble4 8s ease-in-out infinite;

          animation-delay: 0.5s;
        }

        .bubble-5 {
          width: 11px;
          height: 11px;

          left: 30%;
          bottom: -15px;

          background:
            rgba(255, 255, 255, 0.22);

          animation:
            contactBubble5 6s ease-in-out infinite;

          animation-delay: 3s;
        }

        .bubble-6 {
          width: 6px;
          height: 6px;

          right: 20%;
          bottom: -10px;

          background:
            rgba(255, 255, 255, 0.4);

          animation:
            contactBubble6 4.5s ease-in-out infinite;

          animation-delay: 1.5s;
        }

        .bubble-7 {
          width: 13px;
          height: 13px;

          right: 45%;
          bottom: -15px;

          background:
            rgba(255, 255, 255, 0.16);

          animation:
            contactBubble7 7.5s ease-in-out infinite;

          animation-delay: 2.5s;
        }

        /* =====================================================
           BUBBLE ANIMATIONS
        ===================================================== */

        @keyframes contactBubble1 {
          0% {
            transform:
              translateY(20px)
              translateX(0)
              scale(0.7);

            opacity: 0;
          }

          20% {
            opacity: 0.8;
          }

          50% {
            transform:
              translateY(-100px)
              translateX(20px)
              scale(1);
          }

          100% {
            transform:
              translateY(-260px)
              translateX(-15px)
              scale(0.5);

            opacity: 0;
          }
        }

        @keyframes contactBubble2 {
          0% {
            transform:
              translateY(20px)
              translateX(0)
              scale(0.7);

            opacity: 0;
          }

          25% {
            opacity: 0.6;
          }

          50% {
            transform:
              translateY(-120px)
              translateX(-20px)
              scale(1);
          }

          100% {
            transform:
              translateY(-270px)
              translateX(20px)
              scale(0.5);

            opacity: 0;
          }
        }

        @keyframes contactBubble3 {
          0% {
            transform:
              translateY(10px)
              translateX(0);

            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          70% {
            transform:
              translateY(-140px)
              translateX(-20px);
          }

          100% {
            transform:
              translateY(-250px)
              translateX(15px);

            opacity: 0;
          }
        }

        @keyframes contactBubble4 {
          0% {
            transform:
              translateY(15px)
              translateX(0)
              scale(0.8);

            opacity: 0;
          }

          25% {
            opacity: 0.7;
          }

          60% {
            transform:
              translateY(-110px)
              translateX(25px)
              scale(1);
          }

          100% {
            transform:
              translateY(-250px)
              translateX(-10px)
              scale(0.5);

            opacity: 0;
          }
        }

        @keyframes contactBubble5 {
          0% {
            transform:
              translateY(10px)
              translateX(0);

            opacity: 0;
          }

          30% {
            opacity: 0.8;
          }

          70% {
            transform:
              translateY(-160px)
              translateX(15px);
          }

          100% {
            transform:
              translateY(-270px)
              translateX(-15px);

            opacity: 0;
          }
        }

        @keyframes contactBubble6 {
          0% {
            transform:
              translateY(10px);

            opacity: 0;
          }

          30% {
            opacity: 1;
          }

          70% {
            transform:
              translateY(-130px)
              translateX(-15px);
          }

          100% {
            transform:
              translateY(-240px)
              translateX(10px);

            opacity: 0;
          }
        }

        @keyframes contactBubble7 {
          0% {
            transform:
              translateY(10px)
              translateX(0);

            opacity: 0;
          }

          30% {
            opacity: 0.8;
          }

          65% {
            transform:
              translateY(-120px)
              translateX(25px);
          }

          100% {
            transform:
              translateY(-250px)
              translateX(-15px);

            opacity: 0;
          }
        }

        /* =====================================================
           CARD GLOW
        ===================================================== */

        .contact-card-glow {
          position: absolute;

          width: 200px;
          height: 200px;

          right: -80px;
          top: -80px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255, 255, 255, 0.18),
              transparent 70%
            );

          pointer-events: none;

          z-index: 0;

          animation:
            contactGlow 6s ease-in-out infinite alternate;
        }

        @keyframes contactGlow {
          from {
            transform: scale(0.9);
            opacity: 0.5;
          }

          to {
            transform: scale(1.25);
            opacity: 0.95;
          }
        }

        /* =====================================================
           CARD SHINE
        ===================================================== */

        .contact-card-shine {
          position: absolute;

          width: 80px;
          height: 160%;

          top: -30%;
          left: -130px;

          transform: rotate(20deg);

          background:
            linear-gradient(
              to right,
              transparent,
              rgba(255, 255, 255, 0.09),
              transparent
            );

          pointer-events: none;

          z-index: 3;

          animation:
            contactCardShine 8s ease-in-out infinite;
        }

        @keyframes contactCardShine {
          0% {
            left: -130px;
          }

          45%,
          100% {
            left: 130%;
          }
        }

        /* =====================================================
           FORM
        ===================================================== */

        .contact-form-card {
          transition:
            box-shadow 0.3s ease;
        }

        .contact-form-card:hover {
          box-shadow:
            0 28px 65px rgba(92, 70, 20, 0.14) !important;
        }

        /* =====================================================
           FORM LABEL
        ===================================================== */

        .contact-form-label {
          display: block;

          margin-bottom: 5px;

          color: #6f530b;

          font-size: 0.65rem;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 0.07em;
        }

        /* =====================================================
           INPUT
        ===================================================== */

        .contact-form-input {
          width: 100%;

          box-sizing: border-box;

          padding:
            0.68rem
            0.82rem;

          border:
            1px solid rgba(184, 134, 11, 0.14);

          border-radius: 10px;

          outline: none;

          background:
            #fefcf7;

          color: #292929;

          font-family: inherit;

          font-size: 0.8rem;

          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .contact-form-input::placeholder {
          color: #aaa;
        }

        .contact-form-input:focus {
          background: #ffffff;

          border-color:
            rgba(184, 134, 11, 0.45);

          box-shadow:
            0 0 0 3px
              rgba(184, 134, 11, 0.06);
        }

        /* =====================================================
           TEXTAREA
        ===================================================== */

        .contact-textarea {
          resize: none;

          min-height: 92px;
        }

        /* =====================================================
           SEND BUTTON
        ===================================================== */

        .send-message-button {
          position: relative;

          overflow: hidden;

          margin-top: 0.8rem;

          width: 100%;

          height: 45px;

          border: none;

          border-radius: 11px;

          background:
            linear-gradient(
              135deg,
              #B8860B 0%,
              #8A6508 45%,
              #17130A 100%
            );

          color: #ffffff;

          font-size: 0.83rem;

          font-weight: 800;

          cursor: pointer;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 0.5rem;

          box-shadow:
            0 10px 25px
              rgba(92, 70, 20, 0.25);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            filter 0.3s ease;
        }

        .send-message-button::before {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 80px;
          height: 100%;

          transform: skewX(-20deg);

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.24),
              transparent
            );

          animation:
            buttonShine 4s ease-in-out infinite;
        }

        .send-message-button span,
        .send-message-button svg {
          position: relative;

          z-index: 2;
        }

        .send-message-button:hover {
          transform: translateY(-2px);

          box-shadow:
            0 15px 32px
              rgba(92, 70, 20, 0.32);

          filter: brightness(1.08);
        }

        .send-message-button:hover svg {
          transform: translateX(3px);
        }

        .send-message-button svg {
          transition:
            transform 0.25s ease;
        }

        .send-message-button:active {
          transform: translateY(0);
        }

        @keyframes buttonShine {
          0% {
            left: -120%;
          }

          45%,
          100% {
            left: 130%;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr !important;

            border-radius: 24px !important;
          }

          .contact-info-card {
            border-radius:
              24px 24px 0 0 !important;
          }

          .contact-form-card {
            border-radius:
              0 0 24px 24px !important;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .contact-container {
            padding: 0 1rem !important;
          }

          .contact-info-card {
            padding: 1.5rem !important;
          }

          .contact-info-card h2 {
            font-size: 1.55rem !important;
          }

          .contact-form-card {
            padding: 1.4rem !important;
          }

          .form-two-column {
            grid-template-columns: 1fr !important;
          }

          .contact-detail strong {
            font-size: 0.76rem !important;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .contact-bubble,
          .contact-card-shine,
          .contact-card-glow,
          .send-message-button::before {
            animation: none !important;
          }

          .contact-info-card,
          .contact-detail,
          .contact-social,
          .send-message-button {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}