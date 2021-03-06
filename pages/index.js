import Page from '../components/page';
import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Notification from '../components/notification';
import { MediaQueryConsumer } from '../components/media-query';

import Intro from '../components/home/intro';
import STO from '../components/home/STO';
import Advantages from '../components/home/advantages';
import How from '../components/home/howitworks';
import Demo from '../components/home/demo';
import Features from '../components/home/features';
import Customers from '../components/home/customers';
import Learn from '../components/home/learn';
import Team from '../components/home/team';
import SocialMeta from '../components/social-meta';

export default () => (
  <Page title="CRESTO">
    <SocialMeta
      image={'/static/twitter-cards/home.jpg'}
      title="CRESTO"
      url="https://cresto.now.sh"
      description="Real Estate Meets Blockchain: A Novel Way of Fundraising and Investing"
    />
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={32}
          offset={-32}
          distance={32}
          shadow
          active={isMobile ? 32 : 160}
        >
          <Notification
            href="/blog/next-7"
            title="Cresto 1.0 is out!"
            titleMobile="Cresto 1.0 is out!"
          >
            Cresto 1.0 is out! — Real Estate Meets Blockchain: A Novel Way of
            Fundraising and Investing. Saturday, December 22nd 2018
          </Notification>
          <Navbar hideLogo={!isMobile} />
        </Header>
      )}
    </MediaQueryConsumer>
    <Intro />
    <STO />
    <Advantages />
    <Learn />
    <How />
    <Team />
    {/*<Demo />
    <Features />
    <Customers />
    */}
    <Footer />
  </Page>
);
