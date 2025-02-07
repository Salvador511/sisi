import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p style={{ display: 'none' }}>
      01000101 01110011 01110100 01100101 00100000 01110100 01100001 01101101 01110000 01101111 01100011 01101111 00100000 01100101 01110011 00100000 01100101 01101100 00100000 01100011 01101111 01100100 01101001 01100111 01101111
      </p>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            The answer is in  <code>UR Life/</code>.
          </li>
          <li style={{ display: 'none' }}>01001100 01100001 00100000 01110010 01100101 01110011 01110000 01110101 01100101 01110011 01110100 01100001 00100000 01100101 01110011 01110100 01100001 00100000 01100011 01100101 01110010 01100011 01100001</li>
          <li>Save and see your changes instantly.</li>
        </ol>
        
        <p style={{ display: 'none' }}>
        01000101 01110011 01110100 01100101 00100000 01101110 01101111 00100000 01100101 01110011 00100000 01100101 01101100 00100000 01100011 01101111 01100100 01101001 01100111 0110111
        </p>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://media.tenor.com/AM2wDAZ-TVMAAAAi/cat-pointing.gif"
            target="_blank"
            rel="noopener noreferrer"
          >
          <p style={{ display: 'none' }}>
          01000101 01110011 01110100 01100101 00100000 01101101 01100101 01101110 01101111 01110011
          </p>
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://media.tenor.com/AM2wDAZ-TVMAAAAi/cat-pointing.gif"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <p style={{ display: 'none' }}>
      01001001 01101110 01110100 01100101 01101110 01110100 01100001 00100000 01100100 01100101 00100000 01101110 01110101 01100101 01110110 01101111
      </p>
      <footer className={styles.footer}>
        <a
          href="https://media.tenor.com/AM2wDAZ-TVMAAAAi/cat-pointing.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <p style={{ display: 'none' }}>
        01010011 01101001 01100111 01110101 01100101 00100000 01100010 01110101 01110011 01100011 01100001 01101110 01100100 01101111
        </p>
        <a
          href="https://media.tenor.com/AM2wDAZ-TVMAAAAi/cat-pointing.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p style={{ display: 'none' }}>
          01010000 01101001 01100101 01101110 01110011 01100001 00100000 01100100 01101001 01100110 01100110 01100101 01110010 01100101 01101110 01110100 01100101
          </p>
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <p style={{ display: 'none' }}>
        01000101 01101100 00100000 01100011 01101111 01100100 01101001 01100111 01101111 00100000 01100101 01110011 01110100 01100001 00100000 01100101 01101110 00100000 01110100 01110101 00100000 01100011 01101111 01110010 01100001 01111010 01101111 01101110
        </p>
        <a
          href="https://media.tenor.com/AM2wDAZ-TVMAAAAi/cat-pointing.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p style={{ display: 'none' }}>
          01101010 01111001 01100110 01101001 01101000
          </p>
          
           <p style={{ display: 'none' }}>
           01001110 01101111 00100000 01110100 01100101 00100000 01110010 01101001 01101110 01100100 01100001 01110011 00101100 00100000 01110011 01101001 01100111 01110101 01100101 00100000 01101001 01101110 01110100 01100101 01101110 01110100 01100001 01101110 01100100 01101111
           </p>
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
        <p style={{ display: 'none' }}>
        01000011 01100001 01110011 01101001 00100000 01101100 01101111 00100000 01110100 01101001 01100101 01101110 01100101 01110011 00101100 00100000 01110000 01100101 01110010 01101111 00100000 01101110 01101111
        </p>
      </footer>
    </div>
  );
}