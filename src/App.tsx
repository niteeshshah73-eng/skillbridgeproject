import { useState } from 'react';
import './App.css';
type Page = 'home' | 'login' | 'register';
function App() {
  const [page, setPage] = useState<Page>('home');
  const [loginRole, setLoginRole] = useState('Student');
  const [registerRole, setRegisterRole] = useState('Student');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      'The login interface is ready. Connect the backend to authenticate your account.'
    );
  }
  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    if (registerRole !== 'Student') {
      setMessage(
        'This role requires approval. Account creation will be available after the backend is connected.'
      );
      return;
    }
    setMessage(
      'Registration form validated! Connect the backend to create your student account.'
    );
  }
  function openPage(nextPage: Page) {
    setMessage('');
    setPage(nextPage);
  }
  // LOGIN PAGE
  if (page === 'login') {
    return (
      <div className="auth-page">
        <div className="auth-brand">
          <h1>SkillBridge<span>.</span></h1>
          <p>
            Connecting academic learning with industry opportunities.
          </p>
          <div className="brand-features">
            <p>✓ AI-powered skill mapping</p>
            <p>✓ Internship and placement opportunities</p>
            <p>✓ Personalized career development</p>
          </div>
        </div>
        <div className="auth-card">
          <button
            className="back-button"
            onClick={() => openPage('home')}
          >
            ← Back to Home
          </button>
          <h2>Welcome Back!</h2>
          <p className="auth-subtitle">
            Sign in to continue to SkillBridge.
          </p>
          <form onSubmit={handleLogin}>
            <label htmlFor="loginRole">Login as</label>
            <select
              id="loginRole"
              value={loginRole}
              onChange={(event) => setLoginRole(event.target.value)}
              required
            >
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
              <option value="TPO">Training & Placement Officer</option>
              <option value="Industry">Industry / Recruiter</option>
              <option value="Admin">Administrator</option>
            </select>
            <label htmlFor="loginEmail">Email Address</label>
            <input
              id="loginEmail"
              type="email"
              placeholder="Enter your email"
              autoComplete="username"
              required
            />
            <label htmlFor="loginPassword">Password</label>
            <input
              id="loginPassword"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            <div className="auth-options">
              <label className="remember-option">
                <input type="checkbox" />
                Remember me
              </label>
              <button
                type="button"
                className="text-button"
                onClick={() =>
                  setMessage('Password recovery will be added with the backend.')
                }
              >
                Forgot password?
              </button>
            </div>
            <button className="primary-button" type="submit">
              Sign In →
            </button>
          </form>
          {message && <p className="status-message">{message}</p>}
          <p className="auth-switch">
            New to SkillBridge?{' '}
            <button
              className="text-button"
              onClick={() => openPage('register')}
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    );
  }
  // REGISTRATION PAGE
  if (page === 'register') {
    return (
      <div className="auth-page">
        <div className="auth-brand">
          <h1>SkillBridge<span>.</span></h1>
          <p>
            Start your journey from academic learning to career success.
          </p>
          <div className="brand-features">
            <p>✓ Build your professional profile</p>
            <p>✓ Discover your skill gaps</p>
            <p>✓ Explore internships and placements</p>
          </div>
        </div>
        <div className="auth-card">
          <button
            className="back-button"
            onClick={() => openPage('login')}
          >
            ← Back to Login
          </button>
          <h2>Create Account</h2>
          <p className="auth-subtitle">
            Join the SkillBridge community.
          </p>
          <form onSubmit={handleRegister}>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              autoComplete="name"
              required
            />
            <label htmlFor="registerEmail">Email Address</label>
            <input
              id="registerEmail"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
            <label htmlFor="registerRole">Register as</label>
            <select
              id="registerRole"
              value={registerRole}
              onChange={(event) => {
                setRegisterRole(event.target.value);
                setMessage('');
              }}
              required
            >
              <option value="Student">Student</option>
              <option value="Faculty">Faculty — approval required</option>
              <option value="TPO">TPO — approval required</option>
              <option value="Industry">
                Industry / Recruiter — approval required
              </option>
              <option value="Admin">
                Administrator — restricted access
              </option>
            </select>
            <label htmlFor="registerPassword">Password</label>
            <input
              id="registerPassword"
              type="password"
              placeholder="Create a password (min. 8 characters)"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
            />
            <button className="primary-button" type="submit">
              Create Account →
            </button>
          </form>
          {message && <p className="status-message">{message}</p>}
          <p className="auth-switch">
            Already registered?{' '}
            <button
              className="text-button"
              onClick={() => openPage('login')}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    );
  }
  // HOMEPAGE
  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">
          SkillBridge<span>.</span>
        </h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#opportunities">Opportunities</a>
        </div>
        <div className="nav-buttons">
          <button
            className="login-button"
            onClick={() => openPage('login')}
          >
            Login
          </button>
          <button
            className="register-button"
            onClick={() => openPage('register')}
          >
            Get Started
          </button>
        </div>
      </nav>
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="badge">
              🎓 Bridging Education & Industry
            </span>
            <h1>
              Build Your Skills.
              <br />
              <span>Shape Your Future.</span>
            </h1>
            <p>
              Connect academic learning with industry demands. Discover
              your skill gaps, improve your abilities, and prepare for
              your dream career with SkillBridge.
            </p>
            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => openPage('login')}
              >
                Explore Opportunities →
              </button>
              <a className="secondary-button" href="#features">
                Discover Features
              </a>
            </div>
            <div className="stats">
              <div>
                <h3>AI-Powered</h3>
                <p>Skill Mapping</p>
              </div>
              <div>
                <h3>Career Ready</h3>
                <p>Learning Paths</p>
              </div>
              <div>
                <h3>Industry</h3>
                <p>Connections</p>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-top">
              <span>📊</span>
              <div>
                <h3>My Skill Dashboard</h3>
                <p>Your career at a glance</p>
              </div>
            </div>
            <h4>Skill Readiness</h4>
            <div className="progress">
              <div className="progress-fill"></div>
            </div>
            <p className="progress-text">75% Career Readiness</p>
            <div className="skill">
              <span>Web Development</span>
              <strong>85%</strong>
            </div>
            <div className="progress">
              <div className="skill-fill skill-one"></div>
            </div>
            <div className="skill">
              <span>Problem Solving</span>
              <strong>70%</strong>
            </div>
            <div className="progress">
              <div className="skill-fill skill-two"></div>
            </div>
            <div className="skill">
              <span>Communication</span>
              <strong>60%</strong>
            </div>
            <div className="progress">
              <div className="skill-fill skill-three"></div>
            </div>
            <div className="recommendation">
              💡 <span><strong>Recommended:</strong> Complete a real-world project to improve your profile.</span>
            </div>
          </div>
        </section>
        <section className="features" id="features">
          <div className="section-heading">
            <span>WHAT WE OFFER</span>
            <h2>Everything You Need to Succeed</h2>
            <p>
              A smarter way to connect your education with your career goals.
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI Skill Mapping</h3>
              <p>
                Identify your strengths and discover the skills you need
                to develop.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Internships & Jobs</h3>
              <p>
                Explore career opportunities aligned with your skills
                and interests.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Progress Tracking</h3>
              <p>
                Track your learning progress and improve your career readiness.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3>Industry Connect</h3>
              <p>
                Bring students, faculty, placement teams, and companies together.
              </p>
            </article>
          </div>
        </section>
        <section className="about" id="about">
          <h2>Your Journey from Classroom to Career</h2>
          <p>
            SkillBridge helps students understand industry expectations,
            develop relevant skills, and prepare for placement opportunities.
          </p>
          <button
            className="primary-button"
            onClick={() => openPage('register')}
          >
            Start Your Journey →
          </button>
        </section>
      </main>
      <footer id="opportunities">
        <h2>SkillBridge<span>.</span></h2>
        <p>Connecting academic learning with industry opportunities.</p>
        <p className="copyright">© 2026 SkillBridge. Academic Project.</p>
      </footer>
    </div>
  );
}
export default App;