import { motion } from "framer-motion";

function Body() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <div className="bg-gradient-to-tr from-[#133456] to-[#876423] min-h-[456px] min-h-screen p-10 flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, x: 120, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          className="mb-10 text-gray-200 text-6xl font-bold md:text-8xl"
        >
          THE TOMIO.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          className="text-xl mt-6 text-gray-200 font-light pt-5 md:text-2xl"
        >
          The fast track to Solana's Ecosystem
        </motion.p>
      </div>
      {/* ABOUT */}
      <div
        id="about"
        className=" text-black min-h-screen flex items-center py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className=" w-full space-y-8 ">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-4xl sm:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            The Legend of Tomio
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="space-y-6 text-lg sm:text-xl"
          >
            <p>
              In the vibrant and rapidly expanding Solana ecosystem, a new token
              emerged: Tomio.
            </p>
            <p>
              <span className="font-semibold text-blue-400">The Origin:</span>{" "}
              Tomio was born from a vision of seamless connection and
              empowerment. A group of developers, deeply inspired by Solana's
              speed and scalability, sought to create a token that could bridge
              communities and unlock new possibilities. They envisioned a
              digital currency that reflected the agility and dynamism of the
              Solana network itself.
            </p>
            <p>
              <span className="font-semibold text-blue-400">The Mission:</span>
              Tomio's mission is to foster a thriving, interconnected world
              within the Solana blockchain. It's designed to be more than just a
              token; it's a key that opens doors to decentralized applications,
              community governance, and innovative financial solutions.
            </p>
            <p className="font-semibold text-blue-400">The Values:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Speed:</span> Built on Solana,
                Tomio transactions are lightning-fast, reflecting the network's
                unparalleled performance.
              </li>
              <li>
                <span className="font-semibold">Community:</span> Tomio is for
                the people, designed to empower and connect users within the
                Solana ecosystem.
              </li>
              <li>
                <span className="font-semibold">Innovation:</span> Tomio is a
                catalyst for new ideas and groundbreaking projects on Solana,
                pushing the boundaries of what's possible.
              </li>
              <li>
                <span className="font-semibold">Accessibility:</span> Tomio aims
                to be user-friendly and accessible to everyone, whether they're
                seasoned crypto enthusiasts or newcomers to the world of
                blockchain.
              </li>
            </ul>
            <p>
              <span className="font-semibold text-blue-400">The Future:</span>
              Tomio is poised to play a vital role in the ever-evolving Solana
              landscape. As more projects and communities join the network,
              Tomio will be there, facilitating connections, driving growth, and
              empowering users to shape the future of decentralized finance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-4 p-10 bg-gray-200 text-gray-700">
        <h2 className="text-2xl font-bold"> How it works</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          repudiandae quam ipsa! Expedita maiores officiis aperiam maxime
          molestias error voluptates adipisci odio nostrum provident libero
          iusto veritatis nesciunt quam cupiditate voluptas corporis repudiandae
          assumenda voluptatem, rerum doloremque illum? Earum, voluptatem.
        </p>
      </div> */}

      {/* MORE INFO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 bg-gray-100 text-gray-700">
        <div className="border-2 border-gray-300 p-4 rounded-lg shadow-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ex iusto
          eveniet velit sequi sunt.
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-lg shadow-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ex iusto
          eveniet velit sequi sunt.
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-lg shadow-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ex iusto
          eveniet velit sequi sunt.
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-lg shadow-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ex iusto
          eveniet velit sequi sunt.
        </div>
        <div className="border-2 border-gray-300 p-4 rounded-lg shadow-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ex iusto
        </div>
      </div>
    </main>
  );
}
export default Body;
