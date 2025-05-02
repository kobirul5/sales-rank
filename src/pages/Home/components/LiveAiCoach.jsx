import React from 'react';
import {
    MdSend,
} from 'react-icons/md';
import { AiFillAudio, AiOutlineDislike, AiOutlineLike, AiOutlineReload } from "react-icons/ai";
import { FaChartArea, FaClipboard, FaFileAlt, FaMicrophoneAlt } from 'react-icons/fa';

const LiveAICoach = () => {
    const qna = [
        'How to handle objections?',
        'Get more confident in closing',
        'Closing strategies',
        'Suggestions for script',
    ]
const icons = [<AiOutlineReload/>, <AiOutlineLike />,<AiOutlineDislike />, <FaClipboard/>, <AiFillAudio/>]
    return (
        <div className="bg-gradient-to-br from-blue-900 mt-14 to-blue-700 text-white px-6 py-[60px] flex justify-center">
            <div className='container mx-auto'>
                <div className='space-y-5 mb-[60px]'>
                    <h6 className='text-[#FCE38A]'>Live Ai Coach</h6>
                    <h3 className='text-[60px]'>Take a Suggestion Coaching </h3>
                </div>
                <div className="w-full  grid grid-cols-1 md:grid-cols-[1fr_auto_350px] gap-6">
                    {/* Left Panel - Chat */}
                    <div className="bg-white text-black rounded-3xl shadow-lg py-6 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl  font-bold text-blue-800 mb-4 px-6">AI Sales Coach</h2>
                            <div className=" bg-[#CDCDCD] p-4 h-[400px]  mb-6 text-sm">
                                <div className='flex gap-5'>
                                    <img src="" alt="hello" className='h-12 w-12 rounded-full bg-gray-100' />
                                    <p className='bg-white px-24 py-8 max-w-[80%] rounded-2xl'> Hello! I'm your AI sales coach. How can I help you improve your sales performance today?</p>
                                </div>
                            </div>
                            {/* Suggestions */}
                            <div className="flex flex-wrap gap-3 mb-6 px-6">
                                {qna?.map((item, i) => (
                                    <button
                                        key={i}
                                        className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full hover:bg-blue-200 transition"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Input Box */}
                        <div className="flex items-center border mx-6  border-gray-300 rounded-full overflow-hidden">
                            <input
                                type="text"
                                placeholder="Type anything you need..."
                                className="flex-1 px-4 py-2 text-sm outline-none"
                            />
                            <button className="bg-blue-600 p-3 hover:bg-blue-700 text-white">
                                <MdSend size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Middle - Vertical Toolbar */}
                    <div className="hidden md:flex flex-col items-center justify-center gap-6 px-2 ">
                        <div className='bg-white max-h-[328px] flex flex-col gap-5 rounded-3xl p-[14px]'>
                        {icons.map((icon, i) => (
                            <button
                                key={i}
                                className="bg-white text-blue-800 hover:text-blue-600 p-3 rounded-full  transition text-xl"
                            >
                                {icon}
                            </button>
                        ))}
                        </div>
                    </div>

                    {/* Right Panel - Analysis & Actions */}
                    <div className="flex flex-col gap-6">
                        {/* Real-time Analysis */}
                        <div className="bg-[#EFEFEF] h-[328px] text-black rounded-3xl shadow-lg p-6">
                            <h3 className="text-[32px] font-semibold  mb-4">Real-time Analysis</h3>
                            <div className='bg-white p-[18px] rounded-2xl'>
                                <p className="text-[18px]  font-medium mb-1">Confidence Level</p>
                                <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-2">
                                    <div className="bg-green-500 h-3 w-[82%]"></div>
                                </div>

                            </div>
                            <div className='bg-white p-[18px] rounded-2xl mt-[20px]'>
                                <p className="text-xs flex items-center text-[18px]  font-medium mb-5"><FaChartArea /> Confidence Level</p>
                                <p className="text-xs ">83% improvement in objection handling</p>

                            </div>

                        </div>
                        {/* Quick Actions */}
                        <div className="bg-[#EFEFEF] text-black rounded-3xl shadow-lg p-6">
                            <h3 className="text-[32px] font-semibold  mb-4">Quick Actions</h3>
                            <div className="flex flex-col gap-4">
                                <button className="flex flex-col items-start gap-3   px-4 py-2 rounded-xl bg-white">
                                    <FaFileAlt className='text-2xl' />
                                    <span className="text-[18px] font-medium">Generate Script</span>
                                </button>
                                <button className="flex flex-col items-start gap-3   px-4 py-2 rounded-xl bg-white">
                                    <FaMicrophoneAlt className='text-2xl' />
                                    <span className="text-[18px] font-medium">Practice Pitch</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LiveAICoach;
