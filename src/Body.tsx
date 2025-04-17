function Body() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <div className="bg-gradient-to-tr from-[#133456] to-[#876423] min-h-[456px] p-10 flex flex-col justify-end ">
        <h1 className="mb-10 text-gray-200 text-6xl font-bold md:text-8xl">
          THE TOMIO.
        </h1>
        <p className="text-xl mt-6 text-gray-200 font-light pt-5 md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam
          consequuntur fugit autem cumque quia consectetur facere fuga sint
          doloremque.
        </p>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 p-10 bg-gray-200 text-gray-700">
        <h2 className="text-2xl font-bold"> How it works</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          repudiandae quam ipsa! Expedita maiores officiis aperiam maxime
          molestias error voluptates adipisci odio nostrum provident libero
          iusto veritatis nesciunt quam cupiditate voluptas corporis repudiandae
          assumenda voluptatem, rerum doloremque illum? Earum, voluptatem.
        </p>
      </div>

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
