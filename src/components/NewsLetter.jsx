const NewsLetter = () => {
    return <div  className="rounded-lg m-5 p-5 sm:py-16 sm:my-10 md: bg-black my-10 shadow-md ">
        <h3 className="text-white font-extrabold text-3xl text-left pb-5 ml-5"><span>Tell us about </span> <span> your project </span></h3>
        <div className="bg-white text-black w-28 px-[0.9rem] ml-6 mt-3 font-bold py-[0.2rem] rounded-3xl cursor-pointer">
                Contact us
              </div>
              <hr className="text-white w-[200px] md:w-[620px] lg:w-[880px] xl:w-[1250px] mt-8 ml-4"  />
              <h3 className="text-white font-extrabold text-2xl text-left pb-5 ml-5 mt-6">Our offices</h3>
              <div class="flex flex-col md:flex-row">
  <div class="mt-6 md:mt-0 text-white md:mr-4 ml-4 lg:ml-10 lg:mt-4 xl:ml-7 xl:mt-4">
    <h2 class="font-bold text-xl">Copenhagen</h2>
    <div>
      <p>1 Carlsberg Gate</p>
      <p>1260, København, Denmark</p>
    </div>
  </div>

  <div class="mt-6 ml-4 md:mt-0 text-white md:ml-40 lg:ml-70 lg:mt-4 xl:ml-96 xl:mt-4">
    <h2 class="font-bold text-xl">Billund</h2>
    <div>
      <p>24 Lego Allé</p>
      <p>7190, Billund, Denmark</p>
    </div>
  </div>
</div>

                    </div>


};

export default NewsLetter;