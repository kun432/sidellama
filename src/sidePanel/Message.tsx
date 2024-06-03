import { ReactNode } from 'react';
import Markdown from 'react-markdown';
import { Box } from '@chakra-ui/react';

const Ul = ({ children }: { children: ReactNode }) => (
  <ul style={{ paddingLeft: '2rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>{children}</ul>
);
const P = ({ children }: { children: ReactNode }) => (
  <p style={{ paddingTop: 0, paddingBottom: '0.2rem', wordBreak: 'break-word' }}>{children}</p>
);
const Pre = ({ children }: { children: ReactNode }) => (
  <pre style={{ overflow: 'scroll', paddingLeft: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', margin: '1rem 0', background: 'var(--text)', color: 'var(--bg)', borderRadius: '16px', maxWidth: '80vw' }}>{children}</pre>
);

const Code = ({ children }: { children: ReactNode }) => (
  <code style={{ color: 'var(--bg)', background: 'var(--text)', padding: '2px 7px', borderRadius: '6px' }}>{children}</code>
);

const A = ({ children, ...props }: { children: ReactNode }) => (
  <a {...props} style={{ color: 'var(--text)', textDecoration: 'underline', padding: '2px 7px', borderRadius: '6px' }} target="_blank">{children}</a>
);

export const Message = ({ m = '', i = 0 }) => (
  <Box
    background={i % 2 !== 0 ? 'var(--bg)' : 'var(--active)'}
    border="2px"
    borderColor={i % 2 !== 0 ? 'var(--text)' : 'var(--text)'}
    borderRadius={16}
    className="chatMessage"
    color={i % 2 !== 0 ? 'var(--text)' : 'var(--text)'}
    fontSize="md"
    fontStyle="bold"
    fontWeight={600}
    maxWidth="calc(100% - 3rem)"
    ml={2}
    pb={1}
    pl={4}
    pr={4}
    pt={2}
    sx={{ textAlign: 'left' }}
  >
    <Markdown components={{ ul: Ul, ol: Ul, p: P, pre: Pre, code: Code, a: A }}>{m}</Markdown>
  </Box>
);
