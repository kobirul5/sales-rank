import bannerImg from "../../../assets/image.png"
import robotImg from "../../../assets/image-1.png"
import bannerIcon1 from "../../../assets/atr.png"
import bannerIcon2 from "../../../assets/backup_table.png"
const Banner = () => {
    return (
        <section className="mt-[82px] md:p-12">
            <div className="container mx-auto flex justify-between gap-32 ">
                {/* Left Section */}
                <div className="space-y-6 ">
                    <h1 className="text-4xl md:text-[80px] text-gray-800">
                        Your AI- <br />Powered<br /> Sales Coach
                    </h1>


                    <div className="grid grid-cols-3 items-center gap-4 mt-6">
                        <div className=" rounded-xl p-4  flex flex-col items-center text-center">
                            <img src={robotImg} alt="Protection Icon" className="w-full mb-2" />
                        </div>
                        <p className=" max-w-md col-span-2">
                            Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-5">
                            <img src={bannerIcon1} alt="" />
                            <div>
                                <p className="text-[40px] extra-color ">2000+</p>
                                <p className="">Your protection</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <img src={bannerIcon2} alt="" />
                            <div>
                                <p className="text-[40px] extra-color">7001+</p>
                                <p>Provide tailored</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative pl-20">
                    <img
                        src={bannerImg}
                        alt="AI Robot"
                        className="max-w-[583px] rounded-xl "
                    />
                    <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg max-w-[467px]">
                        <div className="flex text-[50px] items-center justify-between mb-2">
                            <p className=" extra-color  font-bold">721+</p>
                            <p className=" extra-color  font-bold">1000+</p>
                        </div>
                        <p className=" font-semibold text-[30px] mb-1">Growth is our priority.</p>
                        <p className=" mt-[40px]">
                            As a full-service business agency, we specialize in helping companies of all sizes optimize their operations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Banner;
