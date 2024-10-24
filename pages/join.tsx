import React from 'react'
import Image from '../node_modules/next/image';
import {NavBar} from '../src/components/NavBar';
import {Footer} from '../src/components/Footer';

const join = () => {
  return (
    <div className="bg-white text-black">
      <div className="fixed z-40 w-full">
        <NavBar />
      </div>

      <div className="flex h-max justify-center bg-white p-10 md:p-10"></div>

      <div className="flex flex-col bg-white font-source md:flex-row">
        <div className="pb-10 pl-10 pr-10 pt-5 md:w-1/2 md:pb-20 md:pl-20">
          <a className="font-bebas text-5xl">Interested in joining us?</a>
          <div className="pb-5 pt-5">
            <div>
              Dues are $25 per semester and $40 for a year. Indicate your
              interest by joining our Discord for further events!
            </div>
            <button className="mt-5 rounded border bg-sky-700 bg-opacity-75 px-4 py-2 text-white hover:bg-sky-700 hover:text-white">
              <a href="https://linktr.ee/tamusase">Sign up here!</a>
            </button>
            {/* Discord Embed */}
            <div className="mt-5">
              <iframe
                src="https://ptb.discord.com/widget?id=700058132076036248&theme=dark"
                width="350"
                height="500"
                allowTransparency={true}
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
          <div className="self-center pb-5 pl-10 pr-10 md:w-1/2 md:pt-5">
            <img
              className="w-full rounded-xl"
              src="/squad.jpg"
              width={1080}
              height={810}
              alt="Wintermelon Social"
            />
          </div>
        </div>

        <div className="flex h-max justify-center bg-white p-10 pt-20 md:p-20"></div>

        <div>
          <a className="pl-10 pr-5 pt-20 font-bebas text-5xl md:pl-20">
            some past events :)
          </a>

          <section
            id="projects"
            className="grid justify-center gap-5 bg-white py-10 pl-10 pr-10 font-source text-lg text-black md:flex-row md:pl-20 md:pr-20 lg:flex"
          >
            <div className="w-100 card bg-base-100 shadow-lg md:w-96">
              <figure>
                <img src="/NCNC.jpg" alt="NC" />
                <div className="text-shadow-md absolute inset-0 z-10 flex justify-center rounded-2xl pt-10 font-bebas text-3xl text-white opacity-0 duration-300 hover:bg-black hover:bg-opacity-25 hover:opacity-100">
                  SASE @ NC
                </div>
              </figure>
              <div className="card-body bg-white">
                <p className="pb-10">
                  Our officer board and scholarship recipients are SASE's
                  National Conference, hosted in Atlanta, GA!
                </p>
              </div>
            </div>

            <div className="w-100 card bg-base-100 shadow-lg md:w-96">
              <figure>
                <img src="/winty.jpg" alt="Wintermelon Social" title="Social" />
                <div className="text-shadow-md absolute inset-0 z-10 flex justify-center rounded-2xl pt-10 font-bebas text-3xl text-white opacity-0 duration-300 hover:bg-black hover:bg-opacity-25 hover:opacity-100">
                  SASE squad social!
                </div>
              </figure>
              <div className="card-body bg-white">
                <p className="pb-10">
                  A fun day out at Century Square with our SASE Squads!
                </p>
              </div>
            </div>

            <div className="w-100 card bg-base-100 shadow-lg md:w-96">
              <figure>
                <img src="/ging.jpg" alt="SASE's Gingerbread House Social" />
                <div className="text-shadow-md absolute inset-0 z-10 flex justify-center rounded-2xl pt-10 font-bebas text-3xl text-white opacity-0 duration-300 hover:bg-black hover:bg-opacity-25 hover:opacity-100">
                  Winter Social
                </div>
              </figure>
              <div className="card-body bg-white">
                <p className="pb-10">SASE's Winter Social!</p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex h-max justify-center bg-white p-10 pt-20 md:p-20"></div>
      </div>

      <div className="block flex h-96 items-center justify-center bg-white bg-sweet bg-cover bg-fixed bg-center md:hidden"></div>
      <div className="flex hidden h-96 items-center justify-center bg-white bg-meow bg-cover bg-fixed bg-center md:block"></div>
      <Footer />
    </div>
  );
}

export default join