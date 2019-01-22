import Code from './code';
import withFrame from './frame';

const IndexFile = () => (
  <Code>{`import Link from 'next/link'

export default () => (
  <div>
    <h1>Hello CRESTO </h1>
    <Link href='/about'><a>About</a></Link>
  </div>
)
`}</Code>
);

const AboutFile = () => (
  <Code>{`import Link from 'next/link'

export default () => (
  <div>
    <p>This is the about page</p>
    <Link href='/'><a>Go home</a></Link>
  </div>
)
`}</Code>
);

const PackageFile = () => (
  <Code lang="json">{`{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  },
  "dependencies": {
    "next": "^7.0.0",
    "react": "^16.5.1",
    "react-dom": "^16.5.1"
  }
}
`}</Code>
);

const IndexPage = withFrame(({ A }) => (
  <div>
    <h1>Hello CRESTO 👋</h1>
    <A tab="https://cresto.now.sh/about">About</A>
  </div>
));

const AboutPage = withFrame(({ A }) => (
  <div>
    <p>This is the about page</p>
    <A tab="https://cresto.now.sh">Go home</A>
  </div>
));

export default {
  type: ['editor', 'browser'],
  tabs: ['Code', 'Website'],
  editor1: {
    editorTabs: ['pages/index.js', 'pages/about.js', 'package.json'],
    editorMapping: {
      'pages/index.js': IndexFile,
      'pages/about.js': AboutFile,
      'package.json': PackageFile
    }
  },
  browser2: {
    browserTabs: ['https://cresto.now.sh', 'https://cresto.now.sh/about'],
    browserMapping: {
      'https://cresto.now.sh': IndexPage,
      'https://cresto.now.sh/about': AboutPage
    }
  },
  note: (
    <>
      <p>
        Cresto will serve each file in <code>/pages</code> under a pathname
        matching the filename.
      </p>
      <p>
        For example, <code>/pages/about.js</code> is served at{' '}
        <code>site.com/about</code>.
      </p>
    </>
  )
};
