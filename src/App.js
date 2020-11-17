/** @jsx jsx */
/** @jsxFrag React.Fragment */
// eslint-disable-next-line
import React from 'react';
import { jsx, css } from '@emotion/core';
import logo from './images/logo.png';
import fb from './images/fb.png';
import insta from './images/insta.png';

const centeredContainerStyles = css`
  max-width: 100%;
  text-align: center;
  justify-content: center;
  display: block;
  position: relative;
`;

const headerStyles = css`
  background: white;
  font-weight: medium;
  color: #515762;
  font-size: 0.9375rem;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: transform 0.5s ease;
  border-bottom: 2px solid #f2f3f4;
  margin-bottom: 2px;
  transition: transform 0.5s ease;
  z-index: 10;
  max-height: 44px;
`;

const navBar = css`
  top: 0;
  cursor: pointer;
  display: flex;
`;

const navULLeft = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  height: 100%;
  top: 0;
  justify-content: flex-start;
  transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transition: outline-offset 0.15s ease-out;
  align-items: center;

  a {
    margin-right: 20px;
    text-decoration: none;
    color: #4a4a4a;
    transition: color 0.2s;
    line-height: 31px;
    transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    background-position-y: 100%;

    &:hover {
      background-image: linear-gradient(#bfbfbf, #bfbfbf);
      background-size: 100% 4px;
      background-position-x: 50%;
      background-repeat: no-repeat;
    }
  }

  img {
    text-align: left;
    padding: 0 0.625rem 0 0.85rem;
    display: flex;
    margin: 0;
    align-items: top;
    max-height: 141px;
  }
`;

const navULRight = css`
  display: flex;
  justify-content: flex-end;
  transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transition: outline-offset 0.15s ease-out;
  margin-left: auto;
  align-items: center;

  a {
    margin-right: 20px;
    text-decoration: none;
    color: #4a4a4a;
    transition: color 0.2s;
    line-height: 31px;
    transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    background-position-y: 100%;

    &:hover {
      background-image: linear-gradient(#bfbfbf, #bfbfbf);
      background-size: 100% 4px;
      background-position-x: 50%;
      background-repeat: no-repeat;
    }
  }
`;

const signInButton = css`
  background-color: transparent;
  font-family: 'Cabin';
  font-size: 15px;
  padding: 10px 16px 6px;
  border: 1px solid #515762;
  min-width: 0;
  /* display: flex; */
  line-height: 1;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  /* justify-content: flex-end; */
  /* align-self: center; */

  &:hover {
    transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    background-color: #e7e8e9;
  }
`;

const videoContainer = css`
  ${centeredContainerStyles}
  position: absolute;
  text-align: center;
  padding: 2rem 0.5rem;
  align-items: center;
  margin: 0;
  left: 30%;

  h1 {
    color: #ffffff;
    max-width: 40rem;
    font-size: 64px;
    margin-bottom: 1.5rem;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

const videoDisplay = css`
  position: relative;
  max-width: 100%;
  object-fit: contain;
  display: block;
  margin-top: 0px;
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
  padding: 14px 22px 10px;
  color: white;
  font-size: 14px;
  display: inline-block;
  transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    background-color: #cd243b;
  }
`;

const firstSectionStyle = css`
  ${centeredContainerStyles}
  margin: 40px 280px;
  padding: 0 24px;
`;

const categoryImageHolder = css`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  /* position: relative;
  text-align: center; */

  img {
    max-width: 19.75rem;
    margin: 0 0.75rem;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
  }

  button {
    bottom: 8px;
    left: 16px;
    background-color: grey;
    color: blue;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
  }
`;

const secondSectionStyle = css`
  ${centeredContainerStyles}
  border: 1px solid #e7e8e9;
  margin: 0 110px;
  padding: 30px 0;

  ul {
    display: flex;
    text-align: center;
    margin: 30px 0;
    list-style: none;

    li {
      padding: 10px, 32px;
      margin: ;
      border-right: 1px solid #e7e8e9;
    }
  }
`;

const highlight = css`
  strong {
    background-image: linear-gradient(#fef399, #fef399);
    background-position-x: 80%;
    background-repeat: no repeat;
  }
`;

const thirdSectionStyle = css`
  ${centeredContainerStyles}
`;

const fourthSectionStyle = css`
  ${centeredContainerStyles}
`;

const fifthSectionStyle = css`
  ${centeredContainerStyles}
  max-width: 44rem;
  border: 1px solid #e7e8e9;
  margin: 20px 25rem;
  box-shadow: 10px 10px #e7e8e9;
`;

const footer = css`
  border-top: 1px solid #d9d9d9;
  display: flex;
  transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transition: outline-offset 0.15s ease-out;

  a {
    text-decoration: none;
    color: #25282d;
    transition: color 0.2s;
    transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    background-position-y: 100%;

    &:hover {
      background-image: linear-gradient(#000000, #000000);
      background-size: 100% 0.5px;
      background-position-x: 0;
      background-repeat: no-repeat;
    }
  }
`;

const finalDiv = css`
  ${centeredContainerStyles}
  margin: 0 280px;
  padding: 0 24px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  text-align: left;

  /* div {
    min-width: 85px;
  } */
`;

const bottomLinks = css`
  display: flex;
  flex-direction: column;
`;

const trademark = css`
  border-top: 1px solid #d9d9d9;
  font-size: 13px;
  color: #25282d;
  transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;

  a {
    text-decoration: none;
    color: #25282d;
    transition: color 0.2s;
    transition: background-size 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    background-position-y: 100%;

    &:hover {
      background-image: linear-gradient(#000000, #000000);
      background-size: 100% 0.5px;
      background-position-x: 50%;
      background-repeat: no-repeat;
    }
  }

  > div {
    margin-right: 0;
  }

  div:nth-child(2) {
    margin-left: 0;
  }
`;

function App() {
  return (
    <>
      <div>
        <header css={headerStyles}>
          <nav css={navBar}>
            <div css={navULLeft}>
              <img src={logo} alt="Stitchfix logo" />

              <a href="a#">Men </a>
              <a href="a#">Women </a>
              <a href="a#">Kids </a>
            </div>
            <div css={navULRight}>
              <a href="a#">Style Guide</a>

              <a href="a#">FAQ </a>
              <a href="a#">Gift Cards </a>
              <button css={signInButton}>Sign In</button>
            </div>
          </nav>
        </header>

        <section css={videoContainer}>
          <h1>Personal styling for everybody</h1>
          <button css={quizButton}>Take your style quiz</button>
        </section>
        <section css={videoDisplay}>
          <video
            src="https://d3ss0gp3e5d7m3.cloudfront.net/assets/images/gateway-stitch-fix-video.10yH0.mp4"
            muted
            loop
            playsInline
            autoPlay
          />
        </section>

        <section css={firstSectionStyle}>
          <h2>We'll Find Style For Your Life</h2>
          <p>
            With clothing hand selected by our expert stylists for your unique
            size & style, you’ll always look and feel your best. No subscription
            required.
          </p>
          <div css={categoryImageHolder}>
            <a href="a#">
              <img
                src="https://d3ss0gp3e5d7m3.cloudfront.net/assets/images/desktop-womens-plus-size-inclusive@1x.2GQbi.jpg"
                alt="Stitch Fix plus-size clothing outfit including a plus-size navy and white printed jumpsuit with white tee."
              />
              <button>Women</button>
            </a>
            <div css={categoryImageHolder}>
              <a href="a#">
                <img
                  src="https://d3ss0gp3e5d7m3.cloudfront.net/assets/images/desktop-mens-casual-outdoor@1x.Ar-ie.jpg"
                  alt="Stitch Fix men’s outfit including a pink tee, tan windbreaker jacket and black jogger sweatpants."
                />
                <button>Men</button>
              </a>
            </div>
            <div css={categoryImageHolder}>
              <a href="a#">
                <img
                  src="https://d3ss0gp3e5d7m3.cloudfront.net/assets/images/desktop-kids-activewear@1x.1L_Lm.jpg"
                  alt="Stitch Fix Kids blue ombre hoodie sweatshirt with palm tree graphic."
                />
                <button>Kids</button>
              </a>
            </div>
          </div>
        </section>

        <section css={secondSectionStyle}>
          <h2>How Stitch Fix works</h2>
          <ul>
            <li>
              Tell us your price range, size & style. You’ll pay just a $20
              styling fee, which gets credited toward pieces you keep.
            </li>
            <li>
              Get a Fix when you want. Try on pieces at home before you buy.
              Keep your favorites, send back the rest.
            </li>
            <li>
              Free shipping, returns & exchanges—a prepaid return envelope is
              included. There are no hidden fees, ever.
            </li>
          </ul>
          <p css={highlight}>
            <strong>No subscription required.</strong> Try Stitch Fix once or
            set up automatic deliveries.
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

        <footer css={footer}>
          <div css={finalDiv}>
            <div>Logo & Location</div>
            <div css={bottomLinks}>
              <h3>Service</h3>
              <a href="a#">Iphone App</a>
              <a href="a#">Plus Sizes</a>
              <a href="a#">Gift Cards</a>
              <a href="a#">Maternity</a>
              <a href="a#">Petite</a>
              <a href="a#">Big & Tall</a>
              <a href="a#">Women's Jeans</a>
              <a href="a#">Business Casual</a>
            </div>
            <div css={bottomLinks}>
              <h3>The Company</h3>
              <a href="a#">About Us</a>
              <a href="a#">Press</a>
              <a href="a#">Investor Relations</a>
              <a href="a#">Careers</a>
              <a href="a#">Tech Blog</a>
            </div>
            <div css={bottomLinks}>
              <h3>Questions?</h3>
              <a href="a#">FAQ's</a>
              <a href="a#">Help</a>
            </div>
            <div>
              <img src={fb} alt="Facebook" />
              <img src={insta} alt="Instagram" />
              <img alt="Pinterest" />
              <img alt="Twitter" />
            </div>
          </div>
        </footer>
        <div css={trademark}>
          <div>
            <p>Stitch Fix and Fix are trademarks of Stitch Fix, Inc.</p>
          </div>
          <div>
            <p>
              <a href="#a">Terms of Use</a> - <a href="#a">Privacy Policy</a> -{' '}
              <a href="#a">Supply Chain Information</a> -{' '}
              <a href="#a">Ad Choices</a> -{' '}
              <a href="#a">CA Notice at Collection</a> -{' '}
              <a href="#a">Cookies Settings</a> - <a href="#a">Sitemap</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
