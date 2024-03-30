import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { MdKeyboardCommandKey } from "react-icons/md";

export default function General() {
    return (
        <div className='general px-2 flex flex-col gap-4'>
            <div className="heading-general">
                <h1 className='text-[#686B6E] text-[18px] select-none px-2'>General</h1>
            </div>
            <div className="content-general flex flex-col gap-y-1">
                <div className="search flex flex-row justify-between text-[18px] group hover:bg-transparent hover:bg-gradient-to-tr hover:from-slate-900 hover:to-slate-600 cursor-pointer rounded-lg duration-150 py-3 px-3">
                    <div className="left flex flex-row items-center gap-x-3">
                        <div className="svg text-[#686B6E]">
                            <CiSearch />
                        </div>
                        <div className="text text-[#E8E9E9] select-none">
                            Search
                        </div>
                    </div>
                    <div className="right flex flex-row items-center  text-slate-400 bg-slate-700 rounded-lg p-[2px]">
                        <div className="svg">
                            <MdKeyboardCommandKey />
                        </div>
                        <div className="text-svg select-none ">
                            S
                        </div>
                    </div>
                </div>
                <div className="billing flex flex-row items-center text-[18px] gap-x-3 group hover:bg-transparent hover:bg-gradient-to-tr hover:from-slate-900 hover:to-slate-600 cursor-pointer rounded-lg duration-150 py-3 px-3">
                    <div className="svg text-[#686B6E]">
                        <IoWalletOutline />
                    </div>
                    <div className="text text-[#E8E9E9] select-none">
                        Billing
                    </div>
                </div>
            </div>
        </div>
    )
}
