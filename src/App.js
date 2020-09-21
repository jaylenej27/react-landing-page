/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from 'react';
import { jsx, css } from '@emotion/core';
import logo from './images/logo.png';

const centeredContainerStyles = css`
  max-width: 100%;
  text-align: center;
  justify-content: center;
  display: block;
`;

const headerStyles = css`
  background: white;
  color: #515762;
  font-size: 0.9375rem;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 10px;
  transition: transform 0.5s ease;
  border-bottom: 2px solid #f2f3f4;
  margin-bottom: 2px;
  transition: transform 0.5s ease;
`;

const logoStyles = css`
  text-align: left;
  padding: 0 0.625rem 0 0.85rem;
  display: flex;
`;

const navBar = css`
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transition: outline-offset 0.15s ease-out;

  &:hover {
    background-image: linear-gradient(#bfbfbf, #bfbfbf);
    background-size: 100% 4px;
    background-position-x: 50%;
  }

  button {
    background-color: transparent;
    padding: calc(0.75rem - 2px) 1rem calc(0.5rem - 2px);
    border: 1px solid #515762;
    position: absolute;
    right: 0.85rem;
    min-width: 0;
    display: block;
    line-height: 1;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &:hover {
      transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
      background-color: #e7e8e9;
    }
  }
`;

const videoContainer = css`
  ${centeredContainerStyles}
`;

const videoDisplay = css`
  position: relative;
  max-width: 100%;
  object-fit: contain;
  display: block;
  margin-top: 80px;
  z-index: -1;

  @media (min-width: 768px) {
    overflow: hidden;
    max-height: 78vh;
  }
`;

const quizButton = css`
  background-color: #dd2e3e;
  border: 2px solid transparent;
  cursor: pointer;
`;

const firstSectionStyle = css`
  ${centeredContainerStyles}
`;

const secondSectionStyle = css`
  ${centeredContainerStyles}
`;

const thirdSectionStyle = css`
  ${centeredContainerStyles}
`;

const fourthSectionStyle = css`
  ${centeredContainerStyles}
`;

const fifthSectionStyle = css`
  ${centeredContainerStyles}
`;

function App() {
  return (
    <>
      <div>
        <header css={headerStyles}>
          <div>
            <a href="a#">
              <img css={logoStyles} src={logo} alt="Stitchfix logo" />
            </a>
            <nav css={navBar}>
              <a href="a#">Men </a>
              <a href="a#">Women </a>
              <a href="a#">Kids </a>
              <a href="a#">Style </a>
              <a href="a#">Guide </a>
              <a href="a#">FAQ </a>
              <a href="a#">Gift Cards </a>
              <button>Sign In</button>
            </nav>
          </div>
        </header>

        <section css={videoDisplay}>
          <video
            src="https://d3ss0gp3e5d7m3.cloudfront.net/assets/images/gateway-stitch-fix-video.10yH0.mp4"
            muted
            loop
            playsInline
            autoPlay
          ></video>
        </section>

        <section css={videoContainer}>
          <h1>Personal styling for everybody</h1>
          <button css={quizButton}>Take your style quiz</button>
        </section>

        <section css={firstSectionStyle}>
          <h2>We'll Find Style For Your Life</h2>
          <p>
            With clothing hand selected by our expert stylists for your unique
            size & style, you’ll always look and feel your best. No subscription
            required.
          </p>
          <img alt="" />
          <img alt="" />
          <img alt="" />
        </section>

        <section css={secondSectionStyle}>
          <h2>How Stitch Fix works</h2>
          <ul>
            <ol>
              Tell us your price range, size & style. You’ll pay just a $20
              styling fee, which gets credited toward pieces you keep.
            </ol>
            <ol>
              Get a Fix when you want. Try on pieces at home before you buy.
              Keep your favorites, send back the rest.
            </ol>
            <ol>
              Free shipping, returns & exchanges—a prepaid return envelope is
              included. There are no hidden fees, ever.
            </ol>
          </ul>
          <p>
            No subscription required. Try Stitch Fix once or set up automatic
            deliveries.
          </p>
        </section>

        <section css={thirdSectionStyle}>
          <h2>Endless styles for your best fit</h2>
          <p>
            Your stylist gets to know you, discovering your perfect fit from
            limitless style options.
          </p>
        </section>

        <section css={fourthSectionStyle}>
          <h2>1,000+ top brands</h2>
          <p>
            Women’s sizes 0-24W (XS-3X)—Plus, Petite and Maternity Men’s sizes
            XS-3XL, waists 28-48ʺ and inseams 28-36ʺ—including Big & Tall
          </p>
        </section>

        <section css={fifthSectionStyle}>
          <h2>Ready to get started?</h2>
          <button css={quizButton}>Take your style quiz</button>
          <p>Already have an account? Sign in</p>
        </section>

        <section></section>

        <section></section>

        <section></section>

        <footer></footer>
      </div>
    </>
  );
}

export default App;
