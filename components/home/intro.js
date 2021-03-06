import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import Logo from '../logo';
import Container from '../container';
import Button from '../button';
import Popover from '../popover';
import Campaign from './campaign';

import { links } from '../../site-manifest';
import { backgroundImages } from 'polished';

const LOGO_TOP = 170;

function easing(t) {
  return 1 + --t * t * t * t * t;
}

export default class extends React.PureComponent {
  state = {
    scroll: 0
  };

  onScroll = () => {
    const scroll = window.scrollY || document.body.scrollTop;
    this.setState({ scroll });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const { scroll } = this.state;

    return (
      <Container
        role="main"
        wide
        center
        dotBackground
        minHeight={564}
        mobileStyle={
          'min-height: 460px;background-image: url("/static/images/background.png"); background-size: 100%;background-repeat: no-repeat; background-position: center center; background-size: auto; '
        }
        style={{
          display: 'flex',
          alignItems: 'flex-end'
        }}
      >
        <Container>
          <div className="intro-container">
            <style jsx>{`
              .button_wrap {
                text-align: center;
              }
              .button_wrap a {
                cursor: pointer;
                width: 160px;
                height: 40px;
                border-radius: 50px;
                background: linear-gradient(90deg, #ff7200 0%, #de6327 100%);
                flex-direction: row;
                justify-content: center;
                align-items: center;
                font-size: 15px;
                overflow: hidden;
                display: inline-table;
                text-align: center;
                color: #e2eaf3;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 1em;
                text-decoration: none;
                margin: 0 15px;
                margin-bottom: 25px;
              }
              .button_wrap a span {
                display: table-cell;
                vertical-align: middle;
              }
              .intro-container {
                margin: 0 0 2rem 0;
                overflow: hidden;
              }
              h2 {
                margin-top: 1rem;
                margin-bottom: 2rem;
              }
              .main-button {
                margin-bottom: 2rem;
              }
              .links {
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .links > * {
                padding: 0 0.5rem;
              }
              .campaign {
                width: 100%;
                letter-spacing: -0.02rem;
                overflow: hidden;
                pointer-events: none;
                cursor: default;
                z-index: -1;
              }
              .f-xs-0 {
                font-size: 2.887rem; /* 2.566rem; /* 2.281rem; */
              }
              .f-xs-1 {
                font-size: 2.027rem; //.566rem;
              }
              .logo-main {
                position: fixed;
                display: flex;
                justify-content: center;
                color: #0076ff;
                left: 0;
                right: 0;
                width: 200px;
                margin: auto;
                z-index: 1000;
              }
              .logo-main .version {
                width: 0;
                // margin-left: -0.2rem;
                margin-top: 0.4rem;
                cursor: pointer;
              }
              .version.hide {
                opacity: 0;
              }
              a.version {
                color: #0076ff;
              }
              .version .tip {
                color: #111;
                white-space: nowrap;
              }
              .title-1 {
                font-size: 1.802032470703125em;
                color: #ff7200;
                letter-spacing: 2px;
              }
              .title-2 {
                font-size: 2.887rem;
                margin-top: -4.2rem;
                margin-bottom: 0;
              }
              .campaign {
                margin: 1rem 0 1.6rem;
                margin-bottom: 100px;
              }
              .campaignButton {
                margin: 1rem 0 1.6rem;
                margin-bottom: 100px;
              }
              // CSS only media query for mobile
              @media screen and (max-width: 640px) {
                .logo-main {
                  display: none;
                }
                .title-1 {
                  font-size: 1.423828125em;
                  color: #de6327;
                }
                .title-2 {
                  font-size: 1.802032470703125em;
                  margin-top: -2.4rem;
                }
                .campaign {
                  margin: 0px 0 0rem;
                }
                .campaigndiv {
                  margin-top: 200px;
                }
                .campaignButton {
                  margin: 1rem 0 1.6rem;
                  padding-top: 80px;
                }
              }
            `}</style>
            <div
              className="logo-main f4 fw6"
              style={{
                top: Math.max(LOGO_TOP - scroll, 7),
                willChange: `transform`,
                transform: `scale(${Math.max(easing(1 - scroll / LOGO_TOP), 0) *
                  0.325 +
                  0.625}) translate3d(0, 0, 0)`,
                transformOrigin: 'top'
              }}
            >
              <Link href="/blog/next-7">
                <a
                  className="version no-tap-highlight no-drag"
                  style={{
                    opacity: Math.max(1 - (scroll * 3) / LOGO_TOP, 0),
                    visibility: scroll * 3 > LOGO_TOP ? 'hidden' : 'visible'
                  }}
                />
              </Link>
            </div>

            <div className="campaigndiv">
              <div className="campaign no-drag no-tap-highlight">
                <h1 className={classNames('title-1', 'fw4')}>
                  REAL ESTATE MEETS BLOCKCHAIN
                </h1>
                <h3 className={classNames('fw3')}>
                  CRESTO is a platform for issuing, selling and governing
                  digital securities on private real estate market
                </h3>
              </div>
              {/*<div className="campaign no-drag no-tap-highlight">
                  <h1  className={classNames('title-1', 'fw4')} >
                  REALESTATE MEETS BLOCKCHAIN
                  </h1>
                  <h2 className={classNames('title-2', 'fw7')}>
                    <Campaign />
                  </h2>
                  </div>*/}

              <div className="campaignButton button_wrap">
                <a href="#Invest">
                  <span>Invest</span>
                </a>
                <a href="#RaiseCapital">
                  <span>Raise Capital</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    );
  }
}
