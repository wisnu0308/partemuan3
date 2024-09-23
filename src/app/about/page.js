export default function About() {
    return (
      <>
      <div className="">
        <h1 className="mt-24 text-6xl font-sans md:Apple Color Emoji">Hi, </h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji text-green-600/100 " > I'am Zaky Wisnu </h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji" >Web Designer</h1>
        <div>
          <button className=" mt-20 rounded-lg bg-red-500 w-48 min-h-12 text-white" >Mulai Disisni</button>
        </div>
      </div>
      <div className="bg-black h-auto w-full  p-20  mt-20 ">
        <h1 className="text-orange-500 text-center text-xl">Artikel Terbaru</h1>
        <h1 className="text-white text-center text-4xl font-bold">
        Artikel terbaru dari blog saya.
        </h1>
        <div className=" flex flex-col md:flex-row gap-5 mt-20 text-white">
          <div className="md:w-1/3 bg-gray-900 p-5 rounded-lg">
            <h2 className="text-orange-500 text-sm">Tentang Saya,</h2>
            <h3 className="text-xl font-bold mb-3">
            Perkenalkan Nama Saya Zaky Wisnu,Lahir 08 Maret 2003 tepat 
            di jakarta dan saya berlamat di Tanjung Priok,Jakarta Utara
            </h3>
          </div>
          <div className="md:w-1/3 bg-gray-900 p-5 rounded-lg">
            <h2 className="text-orange-500 text-sm">Pengalaman</h2>
            <h3 className="text-xl font-bold mb-3">
            Saya Pernah Bekerja Di PT.Hollad Bakery selama kurang lebih 1 tahun,
            saya di tempatkan dibagian dapur untuk mengelola bumbu.
            </h3>
          </div>
          <div className="md:w-1/3 bg-gray-900 p-5 rounded-lg">
            <h2 className="text-orange-500 text-sm">Work</h2>
            <h3 className="text-xl font-bold mb-3">
            Dipertimbangkan untuk Peringkat Situs Web yang Lebih Baik
            </h3>
          </div>
          <div className="md:w-1/3 bg-gray-900 p-5 rounded-lg">
            <h2 className="text-orange-500 text-sm">Contact</h2>
            <h3 className="text-xl font-bold mb-3">
            No Tlpn 081-290375261
            </h3>
            </div>
        </div>
      </div>
    </>
    );
}
  