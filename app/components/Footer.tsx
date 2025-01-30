import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white p-8">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Socials */}
        <div className="space-y-4">
          <Image
            src="/Seecondary Logo copy 1.svg"
            alt="Footer logo"
            width={150}
            height={150}
          />
          <p>
            Tobams Group is an innovative consultancy firm reshaping the future
            of tech talent development in Africa, specializing in talent
            acquisition, internships, and skill development with a global
            perspective.
          </p>
          <div className="flex space-x-4">
            <div className="bg-white rounded-full p-2">
              <Image
                src="/LinkedIn.svg"
                alt="LinkedIn logo"
                width={20}
                height={20}
              />
            </div>
            <div className="bg-white rounded-full p-2">
              <Image
                src="/Instagram.svg"
                alt="Instagram logo"
                width={20}
                height={20}
              />
            </div>
            <div className="bg-white rounded-full p-2">
              <Image src="/X.svg" alt="X logo" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* What we do */}
        <div className="space-y-4">
          <h2 className="font-bold">What We Do</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#">Sustainability Services</Link>
            </li>
            <li>
              <Link href="#">Strategy Planning and Implementation</Link>
            </li>
            <li>
              <Link href="#">Tech Talent Solutions</Link>
            </li>
            <li>
              <Link href="#">Training and Development</Link>
            </li>
            <li>
              <Link href="#">IT Consulting Services</Link>
            </li>
            <li>
              <Link href="#">Social Impact</Link>
            </li>
            <li>
              <Link href="#">Talent Recruitment</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h2 className="font-bold">Company</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Jobs</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Our Founder</Link>
            </li>
            <li>
              <Link href="#">Business Model</Link>
            </li>
            <li>
              <Link href="#">The Team</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
            <li>
              <Link href="#">Testimonials</Link>
            </li>
          </ul>
        </div>

        {/* Solution */}
        <div className="space-y-4">
          <h2 className="font-bold">Solution</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#">Tobams Group Academy</Link>
            </li>
            <li>
              <Link href="#">Help a Tech Talent</Link>
            </li>
            <li>
              <Link href="#">Campus Ambassadors Program</Link>
            </li>
            <li>
              <Link href="#">Join Our Platform</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Book a Consultation</Link>
            </li>
            <li>
              <Link href="#">Join Our Slack Community</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-primary-hover p-4 my-5 rounded-lg">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="font-bold mb-2">Contact Information</h2>
            <div className="flex items-center mb-2">
              <Image
                src="/Email.svg"
                alt="email"
                width={20}
                height={20}
                className="mr-2"
              />
              <p>theteam@tobamsgroup.com</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/Telephone.svg"
                alt="phone"
                width={20}
                height={20}
                className="mr-2"
              />
              <p>+447886600748</p>
            </div>
          </div>

          {/* Registered Offices */}
          <div>
            <h2 className="font-bold mb-2">Registered Offices</h2>
            <div className="space-y-4">
              {/* United Kingdom */}
              <div>
                <h3 className="font-semibold text-secondary">United Kingdom</h3>
                <p>
                  07451196 (Registered by Company House)Vine Cottages, 215 North
                  Street, Romford, Essex, United Kingdom, RM1 4QA
                </p>
              </div>
              {/* Nigeria */}
              <div>
                <h3 className="font-semibold text-secondary">Nigeria</h3>
                <p>
                  RC 1048722 (Registered by the Corporate Affairs Commission)4,
                  Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright, Terms, and Policies */}
      <section className="flex flex-col md:flex-row justify-between text-center items-center border-t border-primary-shade pt-4">
        <div className="flex flex-wrap justify-center space-x-4">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookies Policy</Link>
          <Link href="#">Terms and Conditions</Link>
        </div>
        <p className="mt-2 md:mt-0">
          &copy; 2021 Tobams Group, 2024. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
