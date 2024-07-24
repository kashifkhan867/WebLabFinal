export default function TopPics() {
  return (
    <>
      <h1  className="text-white font-bold my-12 text-center px-64 text-6xl font-skill">
        Top Picks
      </h1>
      <div className=" font-skill px-60 justify-center w-full text-left grid grid-cols-3  gap-5">
        <div  style={{ border: "2px solid " }}>
          <img className="   transition-transform transform hover:scale-105 duration-500 border-white border-l-8 border-t-8"
            src="https://images6.alphacoders.com/133/thumb-1920-1330560.jpeg"
            alt=""
          />
          {/* <h1 className="text-white  ">Alphast 8</h1>
          <p className="text-white  ">Price: 82$</p> */}
          <button className=" hover:bg-white hover:text-black hover:border-black duration-500 px-8 py-5 font-extrabold text-xl border-white w-full   border-b-8 border-r-8 text-white font-skill">Coming Soon!</button>
        </div>
        <div>
          <img className=" transition-transform transform hover:scale-105 duration-500 border-white border-l-8 border-t-8" src="https://images5.alphacoders.com/133/1332400.jpeg" alt="" />
          {/* <h1 className="text-white ">FIFA 24</h1>
          <p className="text-white ">Price: 80$</p> */}
          <button className=" hover:bg-white hover:text-black hover:border-black duration-500 px-8 py-5 font-extrabold text-xl border-white w-full   border-b-8 border-r-8 text-white font-skill">Coming Soon!</button>

        </div>
        <div>
          <img className=" transition-transform transform hover:scale-105 duration-500 border-white border-l-8 border-t-8"
            src="https://images.alphacoders.com/117/thumb-1920-1179971.jpg"
            alt=""
          />
          {/* <h1 className="text-white ">Allan Wake</h1>
          <p className="text-white ">Price: 50$</p> */}
          <button className=" hover:bg-white hover:text-black hover:border-black duration-500 px-8 py-5 font-extrabold text-xl border-white w-full   border-b-8 border-r-8 text-white font-skill">Coming Soon!</button>

        </div>
        <div>
          <img className=" transition-transform transform hover:scale-105 duration-500 border-white border-l-8 border-t-8"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba3d6bf0-f660-4ce1-a12b-6e1505215b69/dfjzff7-82282649-0997-4974-819e-fbc9f9c0328f.jpg/v1/fill/w_1280,h_720,q_75,strp/tekken_8_wallpaper___8k__city_background_by_vgejackler_dfjzff7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYmEzZDZiZjAtZjY2MC00Y2UxLWExMmItNmUxNTA1MjE1YjY5XC9kZmp6ZmY3LTgyMjgyNjQ5LTA5OTctNDk3NC04MTllLWZiYzlmOWMwMzI4Zi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DqY4bRTO4TfNxQH9yAaUxgGVTlUOp_UJ3GJex9snnaQ"
            alt=""
          />
          {/* <h1 className="text-white ">TEKKEN 7</h1>
          <p className="text-white ">Price: 50$</p> */}
          <button className=" hover:bg-white hover:text-black hover:border-black duration-500 px-8 py-5 font-extrabold text-xl border-white w-full   border-b-8 border-r-8 text-white font-skill">Coming Soon!</button>

        </div>
        <div>
          <img className=" transition-transform transform hover:scale-105 duration-500 border-white border-l-8 border-t-8"
            src="https://cdn1.epicgames.com/spt-assets/04d5b86a93514949a3ace614d9e1e417/witchfire-1z0xm.jpg"
            alt=""
          />
          {/* <h1 className="text-white ">Witcher Play</h1>
          <p className="text-white ">Price: 100$</p> */}
          <button className=" hover:bg-white hover:text-black hover:border-black duration-500 px-8 py-5 font-extrabold text-xl border-white w-full   border-b-8 border-r-8 text-white font-skill">Coming Soon!</button>

        </div>
        <div>
          <img className=" transition-transform transform hover:scale-105 duration-500 border-white border-l-8 border-t-8"
            src="https://xxboxnews.blob.core.windows.net/prod/sites/2/2023/05/lotf_preOrderKeyArt_1920x1080_JPG-ff34724a3fd82b4928b2.jpg"
            alt=""
          />
          {/* <h1 className="text-white ">Lords Of Fallen</h1>
          <p className="text-white ">Price: 250$</p> */}
          <button className=" hover:bg-white hover:text-black hover:border-black duration-500 px-8 py-5 font-extrabold text-xl border-white w-full   border-b-8 border-r-8 text-white font-skill">Coming Soon!</button>

        </div>
      </div>
    </>
  );
}
