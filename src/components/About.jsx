import React from "react";
import { SiHiveBlockchain,SiStrapi ,SiFsecure} from "react-icons/si";
import { VscServerProcess} from "react-icons/vsc";
const About = () => {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div>
          <h1 className="py-4">A Growing Protocol ecosystem</h1>
          <p className="py-4 text-xl">
            Growing Protocol ecosystem Growing Protocol ecosys Growing Protocol
            ecosystem Growing Protocol ecosystem tem
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col border text-left rounded-3xl py-12 px-8">
              <div>
                <div className="bg-[#00d8ff] inline-flex p-2 rounded-full">
                  <SiHiveBlockchain size={40} className="text-slate-900" />
                </div>
                <h3 className="text-xl font-bold py-4">Growing Protocol ecosystem tem</h3>
                <p>
                  Growing Protocol ecosystem Growing Growing Protocol ecosystem
                  tem Protocol ecosys Growing Protocol ecosystem Growing
                  Protocol ecosystem tem
                </p>
              </div>
            </div>

            <div className="flex flex-col border text-left rounded-3xl py-12 px-8">
              <div>
                <div className="bg-[#00d8ff] inline-flex p-2 rounded-full">
                  <SiStrapi size={40} className="text-slate-900"/>
                </div>
                <h3 className="text-xl font-bold py-4">Growing Protocol ecosystem tem</h3>
                <p>
                  Growing Protocol ecosystem Growing Growing Protocol ecosystem
                  tem Protocol ecosys Growing Protocol ecosystem Growing
                  Protocol ecosystem tem
                </p>
              </div>
            </div>

            <div className="flex flex-col border text-left rounded-3xl py-12 px-8">
              <div>
                <div className="bg-[#00d8ff] inline-flex p-2 rounded-full">
                  <SiFsecure size={40} className="text-slate-900"/>
                </div>
                <h3 className="text-xl font-bold py-4">Growing Protocol ecosystem tem</h3>
                <p>
                  Growing Protocol ecosystem Growing Growing Protocol ecosystem
                  tem Protocol ecosys Growing Protocol ecosystem Growing
                  Protocol ecosystem tem
                </p>
              </div>
            </div>

            <div className="flex flex-col border text-left rounded-3xl py-12 px-8">
              <div>
                <div className="bg-[#00d8ff] inline-flex p-2 rounded-full">
                  <VscServerProcess size={40} className="text-slate-900"/>
                </div>
                <h3 className="text-xl font-bold py-4">Growing Protocol ecosystem tem</h3>
                <p>
                  Growing Protocol ecosystem Growing Growing Protocol ecosystem
                  tem Protocol ecosys Growing Protocol ecosystem Growing
                  Protocol ecosystem tem
                </p>
              </div>
            </div>
             
          </div>
          <div>
             <button className="m-2 bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-blue)] px-7 py-3 rounded-3xl mt-6">
            Use Defi
          </button>
             </div>
        </div>
      </div>
    </div>
  );
};

export default About;
