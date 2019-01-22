import React from 'react';
import Container from '../container';
import { Card, Icon, Image, Divider } from 'semantic-ui-react';

const CardExampleCard = () => (
  <Container small center right="true" padding role="region">
    <div className="campaign no-drag no-tap-highlight">
      <h1 align="center" className="fw3">
        TEAM
      </h1>
      <br />
      <br />
    </div>
    <Card.Group itemsPerRow={2} stackable={true}>
      <Card>
        <Image src="/static/team/Mariia.jpg" centered />
        <Card.Content>
          <Card.Header>Mariia</Card.Header>
          <Card.Meta>
            <span className="date">Business Strategy</span>
          </Card.Meta>
          <Card.Description>
            Above 10 years of experience in commercial real estate markets in
            UAE, Spain & Russia Above 8 years of entrepreneurial experience, 2
            startups successfully launched IESE / CEIBS MBA
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/mariakutkina">
            <Icon name="linkedin" />
            Linkedin
          </a>
        </Card.Content>
      </Card>

      <Card>
        <Image src="/static/team/awaitingpic.jpg" centered />
        <Card.Content>
          <Card.Header>Ben</Card.Header>
          <Card.Meta>
            <span className="date">Legal</span>
          </Card.Meta>
          <Card.Description>
            Founding Partner at GPS McQuhae LLP – legal firm with expertise in
            fintech and blockchain compliance Conducted a few ICOs and STOs for
            real asset backed securities in different jurisdictions
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="linkedin" />
            Linkedin
          </a>
        </Card.Content>
      </Card>

      <Card>
        <Image src="/static/team/awaitingpic.jpg" centered />
        <Card.Content>
          <Card.Header>Ahmed John</Card.Header>
          <Card.Meta>
            <span className="date">Technology</span>
          </Card.Meta>
          <Card.Description>
            Co-Founder & CTO at OBORCHAIN Blockchain enthusiast and developer 15
            years of software development experience. Information security
            professional Computer Science Lecturer at a University and PhD
            candidate
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/aruzikulov">
            <Icon name="linkedin" />
            Linkedin
          </a>
          <a href="https://github.com/aruzikulov" style={{ margin: '20px' }}>
            <Icon name="github" />
            github
          </a>
        </Card.Content>
      </Card>

      <Card>
        <Image src="/static/team/Mobin.jpg" centered />
        <Card.Content>
          <Card.Header>Mobin</Card.Header>
          <Card.Meta>
            <span className="date">Technology</span>
          </Card.Meta>
          <Card.Description>
            8 years of experiences in software development (Machine learning,
            Blockchain, App development) Holds degrees in computer engineering,
            computer science and electronics & biotechnology White Hat Hacker.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://www.linkedin.com/in/mobinarablou">
            <Icon name="linkedin" />
            Linkedin
          </a>
          <a href="https://github.com/Mobinlion" style={{ margin: '20px' }}>
            <Icon name="github" />
            github
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
    <br />
    <br />
    <br />
    <div className="campaign no-drag no-tap-highlight">
      <Divider horizontal>ADVISORS</Divider>
      <br />
    </div>

    <Card.Group itemsPerRow={2} stackable={true}>
      <Card>
        <Image src="/static/team/Carles.jpg" centered />
        <Card.Content>
          <Card.Header>Carles Vergara</Card.Header>
          <Card.Meta>
            <span className="date">Finance</span>
          </Card.Meta>
          <Card.Description>
            Associate professor of finance at IESE Business school PhD in
            Business Administration (Finance and Real Estate) from the
            University of California, Berkeley Financial engineer in hedge fund
            and investment backing.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="linkedin" />
            Linkedin
          </a>
        </Card.Content>
      </Card>

      <Card>
        <Image src="/static/team/Brian.jpg" centered />
        <Card.Content>
          <Card.Header>Brian</Card.Header>
          <Card.Meta>
            <span className="date">Finance</span>
          </Card.Meta>
          <Card.Description>
            Member of STO committee in real estate private equity firm (China)
            Above 7 years of experience in real estate investments, development
            projects & asset management EIBS MBA & CFA level 3.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="linkedin" />
            Linkedin
          </a>
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
);

export default CardExampleCard;
