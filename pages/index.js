import { useState } from "react";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import { IconArrow } from "../components/Icons";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isCopied, setCopied] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@designhumane.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="my-24">
          <div className="wrapper">
            <Image
              src="/me.png"
              width={320}
              height={240}
              alt="Abhishek"
              objectFit="cover"
            />
          </div>
        </section>

        <section className="my-24">
          <div className="wrapper">
            <h1>Abhishek Kambli</h1>
            <p>
              detail-obsessed product designer with passion for minimalism and
              good user experience.
            </p>

            <div className="spacer"></div>

            <h2>Contact</h2>
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, y: "-50%" }}
                animate={{
                  y: "-50%",
                  scale: isCopied ? 1 : 0.8,
                  opacity: isCopied ? 1 : 0,
                }}
                transition={{ easings: "ease", duration: 0.2 }}
                className={classNames(
                  "absolute py-1 px-2 transition-all bg-white bg-opacity-5 inset-vertical -right-2 rounded-sm font-normal text-sm"
                )}
              >
                Copied!
              </motion.div>
              <p
                onClick={() => copyEmail()}
                className="cursor-pointer pb-1 inline-block border-b border-solid border-white"
              >
                hello@designhumane.com
              </p>
            </div>

            <div className="spacer"></div>

            <h2>Social</h2>
            <div>
              <a
                href="https://www.dribbble.com/_abhiii"
                target="_blank"
                rel="noreferer noopener"
                className="cursor-pointer pb-px inline-block border-b border-solid border-white hover:bg-dribbble hover:bg-opacity-20 hover:border-dribbble"
              >
                Dribbble
              </a>
              <a
                href="https://www.twitter.com/_abhiii"
                target="_blank"
                rel="noreferer noopener"
                className="cursor-pointer pb-px mx-10 inline-block border-b border-solid border-white hover:bg-twitter hover:bg-opacity-20 hover:border-twitter"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/origine/"
                target="_blank"
                rel="noreferer noopener"
                className="cursor-pointer pb-px inline-block border-b border-solid border-white hover:bg-linkedin hover:bg-opacity-20 hover:border-linkedin"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="my-24">
          <div className="wrapper">
            <Image
              src="/tlkn.png"
              width={320}
              height={240}
              alt="tlkn"
              objectFit="cover"
            />
            <h2 className="mt-5 mb-2.5">tlkn</h2>
            <p>
              Based on principle of Privacy by Design I designed entire calling
              experience which inspires people to talk again.
            </p>
          </div>
        </section>

        <section className="my-24">
          <div className="wrapper">
            <Image
              src="/samespace.png"
              width={320}
              height={240}
              alt="Samespace"
              objectFit="cover"
            />
            <h2 className="mt-5 mb-2.5">Samespace</h2>
            <p>
              helped to re-imagine Samespace Dock with new features like AI
              Assistance, Omnichannel Support and CRM Integration.
            </p>
          </div>
        </section>

        <section className="my-24">
          <div className="wrapper">
            <h2 className="mb-2.5">Some Kind words</h2>
            <p>
              Abhi is an extremely talented designer. He was able to quickly
              understand our ideas & concepts for the designs & bring them to
              life, in a way that was much better than we expected.
            </p>
            <div className="flex items-center mt-5">
              <Image
                src="/james.png"
                width={40}
                height={40}
                alt="James Khan"
                objectFit="cover"
              />
              <p className="ml-5">James Khan, Lyra</p>
            </div>
          </div>
        </section>

        <section className="my-24">
          <div className="wrapper">
            <h2 className="mb-2.5">Subscribe to the newsletter</h2>
            <p className="mb-2.5">
              Get emails from me about web development, tech, and early access
              to new articles.
            </p>
            <div className="border-b py-3 border-solid border-white border-opacity-20 relative">
              <input
                className="bg-transparent focus:outline-none outline-none p-0 w-full pr-8 font-light placeholder-white placeholder-opacity-30"
                type="email"
                placeholder="email"
                required
                value={email}
                onChange={(event) => handleEmail(event)}
              />
              <div
                className={classNames(
                  "absolute bg-black cursor-pointer pointer-events-auto right-0 top-0 bottom-0 w-8 flex items-center justify-center",
                  {
                    "opacity-30 pointer-events-none": email === "",
                  }
                )}
              >
                <IconArrow />
              </div>
            </div>
          </div>
        </section>

        <section className="my-24">
          <div className="wrapper">
            <h2 className="mb-2.5">Thanks for taking a look.</h2>
            <p className="mb-5">
              Want to share thoughts, work with me or just be internet friends?
              I’d love to hear from you.
            </p>
            <button className="mb-5 flex items-center justify-center w-full p-3 text-lg font-light bg-white text-white text-opacity-80 bg-opacity-5 transition duration-300 hover:bg-white hover:text-black">
              Copy Email
            </button>

            <button className="flex items-center justify-center w-full p-3 text-lg font-light bg-white text-white text-opacity-80 bg-opacity-5 transition duration-300 hover:bg-white hover:text-black">
              Read Resume
            </button>
          </div>
        </section>
        <footer className="my-24">
          <div className="wrapper">
            <p className="opacity-20 font-light text-base">
              © {new Date().getFullYear()} Design-Humane
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
