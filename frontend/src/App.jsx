import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const navigation = [
    { name: "Dashboard", icon: "⌂" },
    { name: "Create Resume", icon: "✦" },
    { name: "Analyze Resume", icon: "◈" },
    { name: "Job Match", icon: "⚡" },
    { name: "My Resumes", icon: "▤" },
  ];

  const renderPage = () => {
    if (activePage === "Create Resume") {
      return <CreateResume />;
    }

    if (activePage === "Analyze Resume") {
      return <AnalyzeResume />;
    }

    if (activePage === "Job Match") {
      return <JobMatch />;
    }

    if (activePage === "My Resumes") {
      return <MyResumes />;
    }

    return <Dashboard setActivePage={setActivePage} />;
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">R</div>

          <div>
            <h2>ResumeIQ</h2>
            <span>AI Career Studio</span>
          </div>
        </div>

        <div className="nav-section">
          <p className="nav-title">WORKSPACE</p>

          {navigation.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon">✦</div>

            <h3>Build your career</h3>

            <p>
              Create an impressive resume and improve your chances of getting
              noticed.
            </p>

            <button onClick={() => setActivePage("Create Resume")}>
              Create Resume →
            </button>
          </div>

          <div className="user-card">
            <div className="avatar">T</div>

            <div>
              <strong>Welcome!</strong>
              <span>Resume Builder</span>
            </div>

            <span className="more">•••</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Workspace / {activePage}</p>
          </div>

          <div className="top-actions">
            <button className="notification">♢</button>

            <div className="profile">
              <div className="small-avatar">T</div>
              <span>My Profile</span>
            </div>
          </div>
        </header>

        <section className="page-content">{renderPage()}</section>
      </main>
    </div>
  );
}

/* ================================
   DASHBOARD
================================ */

function Dashboard({ setActivePage }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="welcome-badge">
            <span>✦</span>
            AI-powered career assistant
          </div>

          <h1>
            Build a resume
            <br />
            <span>that gets noticed.</span>
          </h1>

          <p>
            Create, analyze and optimize your resume with AI-powered tools
            designed to help you stand out from the competition.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => setActivePage("Create Resume")}
            >
              ✦ Create My Resume
            </button>

            <button
              className="secondary-button"
              onClick={() => setActivePage("Analyze Resume")}
            >
              Analyze Resume →
            </button>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>

          <div className="resume-preview-card">
            <div className="mini-top">
              <div className="mini-photo"></div>

              <div>
                <div className="mini-line large"></div>
                <div className="mini-line medium"></div>
              </div>
            </div>

            <div className="mini-heading">EXPERIENCE</div>

            <div className="mini-line full"></div>
            <div className="mini-line full"></div>
            <div className="mini-line medium"></div>

            <div className="mini-heading">SKILLS</div>

            <div className="mini-tags">
              <span>Python</span>
              <span>React</span>
              <span>SQL</span>
            </div>

            <div className="score-floating">
              <span>ATS SCORE</span>
              <strong>87%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard
          icon="◎"
          title="ATS Score"
          value="87%"
          description="Resume readiness"
          type="purple"
        />

        <StatCard
          icon="✦"
          title="Skills Found"
          value="12"
          description="Technical skills"
          type="blue"
        />

        <StatCard
          icon="⚡"
          title="Job Match"
          value="71%"
          description="Current match"
          type="green"
        />

        <StatCard
          icon="▤"
          title="Resumes"
          value="3"
          description="Created resumes"
          type="orange"
        />
      </section>

      <section className="dashboard-grid">
        <div className="feature-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">POWERED BY AI</p>
              <h2>What would you like to do?</h2>
            </div>
          </div>

          <div className="feature-grid">
            <FeatureCard
              icon="✦"
              title="Create Resume"
              text="Build a professional resume from scratch with AI assistance."
              button="Start creating"
              onClick={() => setActivePage("Create Resume")}
              color="purple"
            />

            <FeatureCard
              icon="◎"
              title="Analyze Resume"
              text="Check your resume's ATS score, skills and improvement areas."
              button="Analyze now"
              onClick={() => setActivePage("Analyze Resume")}
              color="blue"
            />

            <FeatureCard
              icon="⚡"
              title="Match a Job"
              text="Compare your resume with a job description and discover gaps."
              button="Find match"
              onClick={() => setActivePage("Job Match")}
              color="green"
            />
          </div>
        </div>

        <div className="suggestion-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">AI INSIGHTS</p>
              <h2>Quick tips</h2>
            </div>

            <span className="sparkle">✦</span>
          </div>

          <div className="tip">
            <div className="tip-icon">✓</div>

            <div>
              <strong>Use measurable achievements</strong>
              <p>
                Add numbers such as performance improvements, users served or
                projects completed.
              </p>
            </div>
          </div>

          <div className="tip">
            <div className="tip-icon">✓</div>

            <div>
              <strong>Keep your skills relevant</strong>
              <p>
                Highlight technologies that appear in your target job
                description.
              </p>
            </div>
          </div>

          <div className="tip">
            <div className="tip-icon">✓</div>

            <div>
              <strong>Make your summary powerful</strong>
              <p>
                Explain your strengths and the value you can bring to the
                company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ================================
   STAT CARD
================================ */

function StatCard({ icon, title, value, description, type }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${type}`}>{icon}</div>

      <div className="stat-info">
        <span>{title}</span>
        <strong>{value}</strong>
        <small>{description}</small>
      </div>

      <div className="stat-arrow">↗</div>
    </div>
  );
}

/* ================================
   FEATURE CARD
================================ */

function FeatureCard({ icon, title, text, button, onClick, color }) {
  return (
    <div className="feature-card">
      <div className={`feature-icon ${color}`}>{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>

      <button onClick={onClick}>
        {button} <span>→</span>
      </button>
    </div>
  );
}

/* ================================
   CREATE RESUME
================================ */

function CreateResume() {
  const [step, setStep] = useState(1);

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div>
          <p className="eyebrow">AI RESUME CREATOR</p>

          <h1>Create your professional resume</h1>

          <p>
            Tell us about yourself and let ResumeIQ help you create
            professional resume content.
          </p>
        </div>

        <div className="ai-badge">✦ AI Powered</div>
      </div>

      <div className="creator-layout">
        <div className="form-panel">
          <div className="stepper">
            <Step number="1" text="Personal" active={step === 1} />
            <Step number="2" text="Experience" active={step === 2} />
            <Step number="3" text="Skills" active={step === 3} />
            <Step number="4" text="Generate" active={step === 4} />
          </div>

          {step === 1 && (
            <div className="form-content">
              <h2>Let's start with the basics</h2>
              <p className="form-subtitle">
                Enter your basic information.
              </p>

              <div className="form-grid">
                <Input label="Full Name" placeholder="Alex Johnson" />
                <Input
                  label="Email"
                  placeholder="alex@example.com"
                  type="email"
                />
                <Input label="Phone" placeholder="+91 98765 43210" />
                <Input label="Location" placeholder="Nagpur, Maharashtra" />
              </div>

              <Input
                label="Professional Title"
                placeholder="Computer Science Engineering Student"
              />

              <TextArea
                label="Professional Summary"
                placeholder="Tell recruiters about yourself, your strengths and career goals..."
              />

              <div className="form-actions">
                <button
                  className="primary-button"
                  onClick={() => setStep(2)}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-content">
              <h2>Tell us about your experience</h2>
              <p className="form-subtitle">
                Add internships, jobs or important experience.
              </p>

              <Input
                label="Job / Internship Title"
                placeholder="Software Development Intern"
              />

              <Input
                label="Company"
                placeholder="Company Name"
              />

              <div className="form-grid">
                <Input label="Start Date" placeholder="June 2025" />
                <Input label="End Date" placeholder="August 2025" />
              </div>

              <TextArea
                label="What did you do?"
                placeholder="Describe your responsibilities and achievements..."
              />

              <div className="form-actions">
                <button
                  className="secondary-button"
                  onClick={() => setStep(1)}
                >
                  ← Back
                </button>

                <button
                  className="primary-button"
                  onClick={() => setStep(3)}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-content">
              <h2>Showcase your skills</h2>

              <p className="form-subtitle">
                Add the technologies and skills you know.
              </p>

              <TextArea
                label="Technical Skills"
                placeholder="Python, Java, C++, SQL, React, HTML, CSS, Git..."
              />

              <TextArea
                label="Projects"
                placeholder="Project name — what you built, technologies used and results..."
              />

              <TextArea
                label="Education"
                placeholder="B.Tech Computer Science Engineering — ABC Institute — 2023-2027"
              />

              <Input
                label="Target Job"
                placeholder="Software Developer / Data Analyst / Web Developer"
              />

              <div className="form-actions">
                <button
                  className="secondary-button"
                  onClick={() => setStep(2)}
                >
                  ← Back
                </button>

                <button
                  className="primary-button"
                  onClick={() => setStep(4)}
                >
                  ✦ Generate Resume
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="generation-screen">
              <div className="success-icon">✓</div>

              <h2>Your resume is ready!</h2>

              <p>
                ResumeIQ has prepared your resume content. The AI-powered
                generation system can now be connected to your backend.
              </p>

              <button
                className="primary-button"
                onClick={() => alert("Resume generation will be connected to the AI backend next.")}
              >
                ✦ Generate Final Resume
              </button>

              <button
                className="text-button"
                onClick={() => setStep(1)}
              >
                Start again
              </button>
            </div>
          )}
        </div>

        <div className="preview-panel">
          <div className="preview-header">
            <span>LIVE PREVIEW</span>
            <span className="preview-dot">●</span>
          </div>

          <div className="resume-paper">
            <div className="paper-header">
              <div className="paper-avatar">A</div>

              <div>
                <h2>Alex Johnson</h2>
                <p>Software Developer</p>
              </div>
            </div>

            <div className="paper-section">
              <h4>PROFILE</h4>
              <div className="paper-lines">
                <span></span>
                <span></span>
                <span className="short"></span>
              </div>
            </div>

            <div className="paper-section">
              <h4>SKILLS</h4>

              <div className="paper-skills">
                <i>Python</i>
                <i>React</i>
                <i>SQL</i>
                <i>Git</i>
              </div>
            </div>

            <div className="paper-section">
              <h4>EXPERIENCE</h4>

              <div className="paper-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="paper-section">
              <h4>PROJECTS</h4>

              <div className="paper-lines">
                <span></span>
                <span></span>
                <span className="short"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================
   ANALYZE RESUME
================================ */

function AnalyzeResume() {
  const [file, setFile] = useState(null);

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div>
          <p className="eyebrow">RESUME ANALYZER</p>

          <h1>Understand your resume</h1>

          <p>
            Upload your resume and get an ATS score, skill analysis and
            actionable suggestions.
          </p>
        </div>
      </div>

      <div className="upload-container">
        <div
          className="upload-box"
          onClick={() => document.getElementById("resume-upload").click()}
        >
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />

          <div className="upload-icon">↑</div>

          <h2>
            {file ? file.name : "Drop your resume here"}
          </h2>

          <p>
            {file
              ? "Your resume is ready to analyze."
              : "or click to browse from your computer"}
          </p>

          <span className="file-types">
            PDF, DOC or DOCX • Maximum 10MB
          </span>
        </div>

        {file && (
          <button
            className="primary-button analyze-button"
            onClick={() =>
              alert("Connect this button to your FastAPI /upload-resume endpoint.")
            }
          >
            ✦ Analyze My Resume
          </button>
        )}
      </div>

      <div className="analysis-preview">
        <div className="analysis-card">
          <div className="analysis-card-icon purple">◎</div>
          <h3>ATS Score</h3>
          <strong>--</strong>
          <p>Upload your resume to calculate</p>
        </div>

        <div className="analysis-card">
          <div className="analysis-card-icon blue">✦</div>
          <h3>Skills</h3>
          <strong>--</strong>
          <p>Skills will appear here</p>
        </div>

        <div className="analysis-card">
          <div className="analysis-card-icon green">✓</div>
          <h3>Suggestions</h3>
          <strong>--</strong>
          <p>AI recommendations</p>
        </div>
      </div>
    </div>
  );
}

/* ================================
   JOB MATCH
================================ */

function JobMatch() {
  return (
    <div className="tool-page">
      <div className="tool-header">
        <div>
          <p className="eyebrow">JOB MATCH</p>

          <h1>Match your resume with a job</h1>

          <p>
            Paste a job description and ResumeIQ will compare it with your
            resume.
          </p>
        </div>

        <div className="ai-badge">⚡ Smart Matching</div>
      </div>

      <div className="job-match-grid">
        <div className="job-input-card">
          <label>Job Description</label>

          <textarea
            placeholder="Paste the job description here...

Example:
We are looking for a Software Developer with experience in Python, React, SQL, Git and AWS..."
          ></textarea>

          <button
            className="primary-button"
            onClick={() =>
              alert("Connect this button to your Job Match FastAPI endpoint.")
            }
          >
            ⚡ Analyze Job Match
          </button>
        </div>

        <div className="match-result-card">
          <p className="eyebrow">MATCH RESULT</p>

          <div className="big-score">--%</div>

          <h2>Upload a resume first</h2>

          <p>
            Your matching skills, missing skills and recommendations will
            appear here.
          </p>

          <div className="match-placeholder">
            <span>✓</span>
            Matching skills
          </div>

          <div className="match-placeholder">
            <span>!</span>
            Missing skills
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================
   MY RESUMES
================================ */

function MyResumes() {
  const resumes = [
    {
      name: "Software Developer Resume",
      date: "Created recently",
      score: "87%",
    },
    {
      name: "Python Developer Resume",
      date: "Created recently",
      score: "78%",
    },
    {
      name: "General Resume",
      date: "Created recently",
      score: "71%",
    },
  ];

  return (
    <div className="tool-page">
      <div className="tool-header">
        <div>
          <p className="eyebrow">MY RESUMES</p>

          <h1>Your resume collection</h1>

          <p>
            Keep track of your resumes and their ATS performance.
          </p>
        </div>
      </div>

      <div className="resume-list">
        {resumes.map((resume) => (
          <div className="resume-list-card" key={resume.name}>
            <div className="document-icon">▤</div>

            <div className="resume-details">
              <h3>{resume.name}</h3>
              <p>{resume.date}</p>
            </div>

            <div className="resume-score">
              <span>ATS</span>
              <strong>{resume.score}</strong>
            </div>

            <button className="outline-button">View →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================
   SMALL COMPONENTS
================================ */

function Step({ number, text, active }) {
  return (
    <div className={`step ${active ? "active" : ""}`}>
      <div className="step-number">{number}</div>
      <span>{text}</span>
    </div>
  );
}

function Input({ label, placeholder, type = "text" }) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input type={type} placeholder={placeholder} />
    </div>
  );
}

function TextArea({ label, placeholder }) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <textarea placeholder={placeholder}></textarea>
    </div>
  );
}

export default App;