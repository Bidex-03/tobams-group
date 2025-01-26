import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {};

const Navbar: React.FC = (props: Props) => {
  return (
    <>
      <section>
        <nav className="flex justify-between items-center p-4 bg-white text-black border-b border-primary-shade">
          <div className="flex items-center space-x-4">
            <Image
              src="/Seecondary Logo copy 2.svg"
              alt="navigation logo"
              width={150}
              height={150}
            />
          </div>

          <div className="flex space-x-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover flex items-center gap-2">
              <div className="bg-primary-shade rounded-full p-1">
                <Image src="/user.svg" alt="user icon" width={20} height={20} />
              </div>
              Account
              <ChevronDownIcon className="h-5 w-5" />
            </button>

            <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-hover">
              Take Assessment
            </button>
          </div>
        </nav>
      </section>

      <section>
        <nav className="flex justify-center items-center p-4 bg-white text-black">
          <div className="flex items-center space-x-8">
            <button className="hover:text-primary hover:underline hover:underline-offset-8 flex items-center gap-1">
              About <ChevronDownIcon className="h-5 w-5 text-primary" />
            </button>
            <button className="hover:text-primary hover:underline hover:underline-offset-8 flex items-center gap-1">
              What We Do <ChevronDownIcon className="h-5 w-5 text-primary" />
            </button>
            <button className="hover:text-primary hover:underline hover:underline-offset-8 flex items-center gap-1">
              Jobs <ChevronDownIcon className="h-5 w-5 text-primary" />
            </button>
            <button className="hover:text-primary hover:underline hover:underline-offset-8">
              Projects
            </button>
            <button className="hover:text-primary hover:underline hover:underline-offset-8">
              TG Academy
            </button>
            <button className="hover:text-primary hover:underline hover:underline-offset-8">
              Strategic Partnership
            </button>
            <button className="hover:text-primary hover:underline hover:underline-offset-8">
              Pricing
            </button>
            <button className="hover:text-primary hover:underline hover:underline-offset-8">
              Book a consultation
            </button>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;