import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    className="text-base font-medium text-yellow-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-yellow-900 focus:ring-offset-2"
  >
    {children}
  </Link>
);

const HeroSection = () => (
  <section className="pt-12 bg-yellow-50 sm:pt-16 h-full">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="px-6 text-lg text-yellow-600 ">
          Easy and Fast Note Sharing for Students
        </h1>
        <p className="py-8 text-4xl font-bold leading-tight text-yellow-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
          The easiest way to share notes across devices
          <span className="relative inline-flex sm:inline">
            <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
            <span className="relative"> for students </span>
          </span>
        </p>

        <Link href={"/note"} className="w-fit">
          <Button className="rounded-full w-fit" size={"lg"}>
            Open NoteBeam <ArrowRight className="w-4 h-4 ms-2" />
          </Button>
        </Link>

        <p className="mt-8 text-base text-yellow-700">
          Simple, secure, and seamless note sharing
        </p>
      </div>
    </div>

    <div className="py-12 px-4 bg-white">
      <div className="relative">
        <div className="absolute inset-0 h-2/3 bg-yellow-50"></div>
        <div className="relative mx-auto">
          <div className="lg:max-w-4xl lg:mx-auto relative">
            <div className="top-0 left-0 right-0 bottom-0 absolute z-20" />
            <div className="border-4 border-primary-foreground rounded-2xl overflow-hidden shadow-xl">
              <Image
                priority
                className="w-full bg-yellow-200 h-auto rounded-2xl"
                width={2560}
                height={1600}
                src="/images/demo-image.png"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App = () => (
  <div className="overflow-x-hidden bg-yellow-50 h-full">
    <HeroSection />
  </div>
);

export default App;
