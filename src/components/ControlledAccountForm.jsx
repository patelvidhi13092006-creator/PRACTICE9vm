import React, { useState } from 'react';

function ControlledAccountForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [accountType, setAccountType] = useState('Savings');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      fullName.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      password.trim() === ''
    ) {
      alert('Please fill all required fields.');
      return;
    }

    if (phone.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (password.length < 6) {
      alert('Password must contain at least 6 characters.');
      return;
    }

    if (!agree) {
      alert('Please accept the terms and conditions.');
      return;
    }

    setSubmitted(true);
  }

  function resetForm() {
    setFullName('');
    setEmail('');
    setPhone('');
    setAccountType('Savings');
    setPassword('');
    setShowPassword(false);
    setAgree(false);
    setSubmitted(false);
  }

  function getPasswordStrength() {
    if (password.length === 0) {
      return {
        text: 'Enter password',
        color: '#94a3b8',
        width: '0%',
      };
    }

    if (password.length < 6) {
      return {
        text: 'Weak',
        color: '#ef4444',
        width: '30%',
      };
    }

    if (password.length < 10) {
      return {
        text: 'Medium',
        color: '#f59e0b',
        width: '65%',
      };
    }

    return {
      text: 'Strong',
      color: '#22c55e',
      width: '100%',
    };
  }

  const passwordStrength = getPasswordStrength();

  let completedFields = 0;

  if (fullName) completedFields++;
  if (email) completedFields++;
  if (phone) completedFields++;
  if (password) completedFields++;
  if (agree) completedFields++;

  const progress = Math.round(
    (completedFields / 5) * 100
  );

  return (
    <div className="account-page">

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .account-page {
          min-height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 35px 15px;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(37, 99, 235, 0.20),
              transparent 30%
            ),

            radial-gradient(
              circle at 90% 90%,
              rgba(124, 58, 237, 0.18),
              transparent 30%
            ),

            linear-gradient(
              135deg,
              #eff6ff,
              #f8fafc,
              #eef2ff
            );
        }

        .account-container {
          width: 100%;
          max-width: 720px;

          overflow: hidden;

          background:
            rgba(255,255,255,0.96);

          border:
            1px solid
            rgba(255,255,255,0.8);

          border-radius: 28px;

          box-shadow:
            0 35px 80px
            rgba(30,64,175,0.15),

            0 10px 25px
            rgba(15,23,42,0.08);

          animation:
            containerEnter 0.7s ease;
        }

        @keyframes containerEnter {
          from {
            opacity: 0;
            transform:
              translateY(35px)
              scale(0.97);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        /* =========================
           TOP BANNER
        ========================= */

        .bank-banner {
          position: relative;

          padding: 30px;

          color: white;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              #1d4ed8,
              #4f46e5,
              #7c3aed
            );
        }

        .bank-banner::before {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          right: -50px;
          top: -80px;

          background:
            rgba(255,255,255,0.10);

          border-radius: 50%;
        }

        .bank-banner::after {
          content: "";

          position: absolute;

          width: 120px;
          height: 120px;

          left: 45%;
          bottom: -80px;

          background:
            rgba(255,255,255,0.08);

          border-radius: 50%;
        }

        .banner-content {
          position: relative;
          z-index: 2;

          display: flex;

          align-items: center;

          gap: 15px;
        }

        .bank-logo {
          width: 62px;
          height: 62px;

          display: flex;

          align-items: center;
          justify-content: center;

          background:
            rgba(255,255,255,0.18);

          border:
            1px solid
            rgba(255,255,255,0.3);

          border-radius: 18px;

          font-size: 30px;

          backdrop-filter:
            blur(10px);

          animation:
            floatLogo 3s ease-in-out infinite;
        }

        @keyframes floatLogo {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        .banner-title {
          margin: 0;

          font-size: 25px;

          font-weight: 900;
        }

        .banner-subtitle {
          margin: 5px 0 0;

          color:
            rgba(255,255,255,0.75);

          font-size: 11px;
        }

        .secure-label {
          position: relative;
          z-index: 2;

          margin-left: auto;

          padding: 8px 12px;

          background:
            rgba(255,255,255,0.15);

          border:
            1px solid
            rgba(255,255,255,0.25);

          border-radius: 30px;

          font-size: 9px;

          font-weight: 900;

          backdrop-filter:
            blur(10px);
        }

        /* =========================
           PROGRESS
        ========================= */

        .progress-section {
          padding: 18px 30px 0;
        }

        .progress-top {
          display: flex;

          justify-content:
            space-between;

          margin-bottom: 7px;

          color: #64748b;

          font-size: 9px;

          font-weight: 800;
        }

        .progress-percent {
          color: #2563eb;
        }

        .progress-background {
          width: 100%;
          height: 7px;

          overflow: hidden;

          background: #e2e8f0;

          border-radius: 20px;
        }

        .progress-fill {
          height: 100%;

          background:
            linear-gradient(
              90deg,
              #2563eb,
              #7c3aed
            );

          border-radius: 20px;

          transition:
            width 0.4s ease;
        }

        /* =========================
           FORM AREA
        ========================= */

        .form-area {
          padding: 25px 30px 30px;
        }

        .section-heading {
          margin: 0;

          color: #172554;

          font-size: 15px;

          font-weight: 900;
        }

        .section-description {
          margin: 5px 0 22px;

          color: #94a3b8;

          font-size: 9px;
        }

        .form-grid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 17px;
        }

        .full-width {
          grid-column:
            1 / -1;
        }

        .form-group {
          position: relative;
        }

        .form-label {
          display: block;

          margin-bottom: 7px;

          color: #334155;

          font-size: 9px;

          font-weight: 900;
        }

        .required {
          color: #ef4444;
        }

        .input-wrapper {
          position: relative;
        }

        .form-input {
          width: 100%;

          padding: 12px 13px;

          color: #1e293b;

          background: #f8fafc;

          border:
            1px solid
            #dbe2ea;

          border-radius: 10px;

          outline: none;

          font-size: 10px;

          transition:
            all 0.25s ease;
        }

        .form-input:hover {
          border-color:
            #93c5fd;
        }

        .form-input:focus {
          background: white;

          border-color:
            #3b82f6;

          box-shadow:
            0 0 0 4px
            rgba(59,130,246,0.09);
        }

        .form-input::placeholder {
          color: #a1aec0;
        }

        .password-input {
          padding-right: 65px;
        }

        .show-password {
          position: absolute;

          right: 8px;
          top: 50%;

          transform:
            translateY(-50%);

          padding: 5px 7px;

          color: #2563eb;

          background: transparent;

          border: none;

          cursor: pointer;

          font-size: 8px;

          font-weight: 900;
        }

        /* =========================
           PASSWORD STRENGTH
        ========================= */

        .password-strength {
          margin-top: 7px;
        }

        .strength-top {
          display: flex;

          justify-content:
            space-between;

          margin-bottom: 5px;

          color: #94a3b8;

          font-size: 7px;
        }

        .strength-value {
          font-weight: 900;
        }

        .strength-background {
          height: 4px;

          background: #e2e8f0;

          border-radius: 20px;

          overflow: hidden;
        }

        .strength-fill {
          height: 100%;

          border-radius: 20px;

          transition:
            all 0.3s ease;
        }

        /* =========================
           ACCOUNT TYPE
        ========================= */

        .account-options {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 10px;
        }

        .account-option {
          position: relative;

          padding: 14px;

          background:
            #f8fafc;

          border:
            1px solid
            #e2e8f0;

          border-radius: 12px;

          cursor: pointer;

          text-align: left;

          transition:
            all 0.25s ease;
        }

        .account-option:hover {
          transform:
            translateY(-3px);

          border-color:
            #93c5fd;

          box-shadow:
            0 8px 18px
            rgba(37,99,235,0.08);
        }

        .account-option.selected {
          background:
            linear-gradient(
              135deg,
              #eff6ff,
              #eef2ff
            );

          border-color:
            #3b82f6;

          box-shadow:
            0 8px 20px
            rgba(37,99,235,0.10);
        }

        .option-icon {
          font-size: 21px;

          margin-bottom: 7px;
        }

        .option-title {
          color: #1e293b;

          font-size: 10px;

          font-weight: 900;
        }

        .option-text {
          margin-top: 3px;

          color: #94a3b8;

          font-size: 7px;

          line-height: 1.4;
        }

        .selected-mark {
          position: absolute;

          top: 8px;
          right: 8px;

          width: 17px;
          height: 17px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: white;

          background: #2563eb;

          border-radius: 50%;

          font-size: 9px;
        }

        /* =========================
           CHECKBOX
        ========================= */

        .terms-box {
          display: flex;

          align-items:
            flex-start;

          gap: 9px;

          margin-top: 19px;

          padding: 12px;

          background:
            #f8fafc;

          border:
            1px solid
            #e2e8f0;

          border-radius: 10px;
        }

        .terms-box input {
          width: 15px;
          height: 15px;

          margin-top: 1px;

          accent-color:
            #2563eb;

          cursor: pointer;
        }

        .terms-text {
          color: #64748b;

          font-size: 8px;

          line-height: 1.5;
        }

        .terms-text strong {
          color: #334155;
        }

        /* =========================
           ACTIONS
        ========================= */

        .action-row {
          display: flex;

          gap: 10px;

          margin-top: 20px;
        }

        .create-button {
          flex: 1;

          padding: 13px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #2563eb,
              #4f46e5
            );

          border: none;

          border-radius: 11px;

          cursor: pointer;

          font-size: 10px;

          font-weight: 900;

          box-shadow:
            0 10px 20px
            rgba(37,99,235,0.20);

          transition:
            all 0.25s ease;
        }

        .create-button:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 14px 28px
            rgba(37,99,235,0.28);
        }

        .reset-button {
          padding: 13px 18px;

          color: #475569;

          background:
            #f8fafc;

          border:
            1px solid
            #cbd5e1;

          border-radius: 11px;

          cursor: pointer;

          font-size: 9px;

          font-weight: 900;

          transition:
            all 0.25s ease;
        }

        .reset-button:hover {
          background:
            #f1f5f9;

          transform:
            translateY(-2px);
        }

        .security-footer {
          margin-top: 20px;

          color: #94a3b8;

          font-size: 7px;

          text-align: center;
        }

        /* =========================
           SUCCESS
        ========================= */

        .success-container {
          padding: 40px 30px;

          text-align: center;

          animation:
            successEnter 0.5s ease;
        }

        @keyframes successEnter {
          from {
            opacity: 0;
            transform:
              scale(0.94);
          }

          to {
            opacity: 1;
            transform:
              scale(1);
          }
        }

        .success-icon {
          width: 78px;
          height: 78px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin: 0 auto 18px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #16a34a,
              #22c55e
            );

          border-radius: 50%;

          font-size: 35px;

          box-shadow:
            0 15px 30px
            rgba(34,197,94,0.25);

          animation:
            successPulse 1.5s infinite;
        }

        @keyframes successPulse {
          0%, 100% {
            box-shadow:
              0 15px 30px
              rgba(34,197,94,0.25);
          }

          50% {
            box-shadow:
              0 15px 35px
              rgba(34,197,94,0.45);
          }
        }

        .success-title {
          margin: 0;

          color: #166534;

          font-size: 22px;

          font-weight: 900;
        }

        .success-description {
          max-width: 400px;

          margin: 8px auto 22px;

          color: #64748b;

          font-size: 9px;

          line-height: 1.6;
        }

        .summary-card {
          max-width: 430px;

          margin: auto;

          padding: 17px;

          text-align: left;

          background:
            #f0fdf4;

          border:
            1px solid
            #bbf7d0;

          border-radius: 14px;
        }

        .summary-heading {
          margin: 0 0 10px;

          color: #166534;

          font-size: 10px;

          font-weight: 900;
        }

        .summary-row {
          display: flex;

          justify-content:
            space-between;

          gap: 15px;

          padding: 8px 0;

          border-bottom:
            1px dashed
            #bbf7d0;

          color: #64748b;

          font-size: 8px;
        }

        .summary-row:last-child {
          border-bottom: none;
        }

        .summary-value {
          color: #166534;

          font-weight: 900;

          text-align: right;
        }

        .another-button {
          margin-top: 20px;

          padding: 12px 22px;

          color: white;

          background:
            linear-gradient(
              135deg,
              #2563eb,
              #4f46e5
            );

          border: none;

          border-radius: 10px;

          cursor: pointer;

          font-size: 9px;

          font-weight: 900;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .account-page {
            padding: 15px 10px;
          }

          .bank-banner {
            padding: 23px 20px;
          }

          .banner-title {
            font-size: 20px;
          }

          .bank-logo {
            width: 50px;
            height: 50px;

            font-size: 24px;
          }

          .secure-label {
            display: none;
          }

          .progress-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .form-area {
            padding: 22px 20px 25px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .full-width {
            grid-column: auto;
          }

          .account-options {
            grid-template-columns: 1fr;
          }

          .action-row {
            flex-direction: column;
          }

          .reset-button {
            width: 100%;
          }

          .success-container {
            padding: 35px 20px;
          }

          .success-title {
            font-size: 19px;
          }
        }

        @media (max-width: 350px) {

          .bank-banner {
            padding: 20px 15px;
          }

          .form-area {
            padding: 18px 15px 22px;
          }

          .banner-subtitle {
            font-size: 9px;
          }
        }

      `}</style>


      <div className="account-container">

        {!submitted ? (

          <>
            {/* =========================
                BANK HEADER
            ========================= */}

            <div className="bank-banner">

              <div className="banner-content">

                <div className="bank-logo">
                  🏦
                </div>

                <div>

                  <h1 className="banner-title">
                    Digital Banking
                  </h1>

                  <p className="banner-subtitle">
                    Secure • Simple • Smart Banking
                  </p>

                </div>

                <div className="secure-label">
                  🔒 100% SECURE
                </div>

              </div>

            </div>


            {/* =========================
                PROGRESS
            ========================= */}

            <div className="progress-section">

              <div className="progress-top">

                <span>
                  Account Setup Progress
                </span>

                <span className="progress-percent">
                  {progress}%
                </span>

              </div>

              <div className="progress-background">

                <div
                  className="progress-fill"
                  style={{
                    width: progress + '%',
                  }}
                />

              </div>

            </div>


            {/* =========================
                FORM
            ========================= */}

            <div className="form-area">

              <h2 className="section-heading">
                Create Your Bank Account
              </h2>

              <p className="section-description">
                Enter your details below to get started
                with digital banking.
              </p>


              <form onSubmit={handleSubmit}>

                <div className="form-grid">

                  {/* NAME */}

                  <div className="form-group">

                    <label className="form-label">
                      Full Name
                      <span className="required">
                        {' '}*
                      </span>
                    </label>

                    <input
                      type="text"
                      value={fullName}
                      onChange={function (e) {
                        setFullName(e.target.value);
                      }}
                      className="form-input"
                      placeholder="Enter your full name"
                    />

                  </div>


                  {/* EMAIL */}

                  <div className="form-group">

                    <label className="form-label">
                      Email Address
                      <span className="required">
                        {' '}*
                      </span>
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={function (e) {
                        setEmail(e.target.value);
                      }}
                      className="form-input"
                      placeholder="example@email.com"
                    />

                  </div>


                  {/* PHONE */}

                  <div className="form-group">

                    <label className="form-label">
                      Mobile Number
                      <span className="required">
                        {' '}*
                      </span>
                    </label>

                    <input
                      type="tel"
                      value={phone}
                      maxLength="10"
                      onChange={function (e) {

                        const value =
                          e.target.value.replace(
                            /[^0-9]/g,
                            ''
                          );

                        setPhone(value);
                      }}
                      className="form-input"
                      placeholder="10 digit mobile number"
                    />

                  </div>


                  {/* PASSWORD */}

                  <div className="form-group">

                    <label className="form-label">
                      Password
                      <span className="required">
                        {' '}*
                      </span>
                    </label>

                    <div className="input-wrapper">

                      <input
                        type={
                          showPassword
                            ? 'text'
                            : 'password'
                        }
                        value={password}
                        onChange={function (e) {
                          setPassword(e.target.value);
                        }}
                        className="form-input password-input"
                        placeholder="Minimum 6 characters"
                      />

                      <button
                        type="button"
                        className="show-password"
                        onClick={function () {
                          setShowPassword(
                            !showPassword
                          );
                        }}
                      >
                        {showPassword
                          ? 'HIDE'
                          : 'SHOW'}
                      </button>

                    </div>


                    <div className="password-strength">

                      <div className="strength-top">

                        <span>
                          Password strength
                        </span>

                        <span
                          className="strength-value"
                          style={{
                            color:
                              passwordStrength.color,
                          }}
                        >
                          {passwordStrength.text}
                        </span>

                      </div>

                      <div className="strength-background">

                        <div
                          className="strength-fill"
                          style={{
                            width:
                              passwordStrength.width,

                            background:
                              passwordStrength.color,
                          }}
                        />

                      </div>

                    </div>

                  </div>


                  {/* ACCOUNT TYPE */}

                  <div className="form-group full-width">

                    <label className="form-label">
                      Choose Account Type
                    </label>

                    <div className="account-options">

                      <button
                        type="button"
                        onClick={function () {
                          setAccountType(
                            'Savings'
                          );
                        }}
                        className={
                          accountType === 'Savings'
                            ? 'account-option selected'
                            : 'account-option'
                        }
                      >

                        {accountType ===
                          'Savings' && (
                          <span className="selected-mark">
                            ✓
                          </span>
                        )}

                        <div className="option-icon">
                          💰
                        </div>

                        <div className="option-title">
                          Savings Account
                        </div>

                        <div className="option-text">
                          Save money and earn
                          interest on your balance.
                        </div>

                      </button>


                      <button
                        type="button"
                        onClick={function () {
                          setAccountType(
                            'Current'
                          );
                        }}
                        className={
                          accountType === 'Current'
                            ? 'account-option selected'
                            : 'account-option'
                        }
                      >

                        {accountType ===
                          'Current' && (
                          <span className="selected-mark">
                            ✓
                          </span>
                        )}

                        <div className="option-icon">
                          💼
                        </div>

                        <div className="option-title">
                          Current Account
                        </div>

                        <div className="option-text">
                          Designed for frequent
                          business transactions.
                        </div>

                      </button>

                    </div>

                  </div>

                </div>


                {/* TERMS */}

                <label className="terms-box">

                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={function (e) {
                      setAgree(
                        e.target.checked
                      );
                    }}
                  />

                  <span className="terms-text">
                    I agree to the
                    {' '}
                    <strong>
                      Terms & Conditions
                    </strong>
                    {' '}
                    and confirm that the
                    information provided is correct.
                  </span>

                </label>


                {/* ACTIONS */}

                <div className="action-row">

                  <button
                    type="submit"
                    className="create-button"
                  >
                    🏦 Create My Account
                  </button>

                  <button
                    type="button"
                    className="reset-button"
                    onClick={resetForm}
                  >
                    Reset
                  </button>

                </div>

              </form>


              <div className="security-footer">
                🔐 Your information is protected with
                secure form validation.
              </div>

            </div>
          </>

        ) : (

          /* =========================
             SUCCESS SCREEN
          ========================= */

          <div className="success-container">

            <div className="success-icon">
              ✓
            </div>

            <h2 className="success-title">
              Account Created Successfully!
            </h2>

            <p className="success-description">
              Welcome to Digital Banking, {fullName}.
              Your registration information has been
              successfully submitted.
            </p>


            <div className="summary-card">

              <h3 className="summary-heading">
                📋 Account Summary
              </h3>

              <div className="summary-row">

                <span>
                  Account Holder
                </span>

                <span className="summary-value">
                  {fullName}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Email
                </span>

                <span className="summary-value">
                  {email}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Mobile
                </span>

                <span className="summary-value">
                  +91 {phone}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Account Type
                </span>

                <span className="summary-value">
                  {accountType}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Status
                </span>

                <span
                  className="summary-value"
                  style={{
                    color: '#16a34a',
                  }}
                >
                  ● Active
                </span>

              </div>

            </div>


            <button
              type="button"
              className="another-button"
              onClick={resetForm}
            >
              + Create Another Account
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default ControlledAccountForm;