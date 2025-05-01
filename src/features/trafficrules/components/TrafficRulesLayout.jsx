import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { TrafficConeIcon } from "lucide-react";
import AppLayout from "../../../components/AppLayout";

export default function LicenseLayout({
  children,
  title,
  subTitle,
  mainContentTitle,
  heading,
}) {
  const navigate = useNavigate();
  return (
    <>
      <AppLayout>
        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative mt-3 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="absolute top-1/4 left-0 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#E1E6F4] text-[#697C8C] transition-colors hover:bg-[#E5F3FF]"
            >
              <IoIosArrowBack className="h-5 w-5" />
            </button>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-x-2">
                <TrafficConeIcon color="#2389E3" size={30} />
                {heading === "" ? (
                  <h1 className="text-center text-xl font-medium text-[#05243F] md:text-2xl">
                    {title}
                  </h1>
                ) : (
                  <h1 className="text-center text-xl font-medium text-[#05243F] md:text-2xl">
                    <span className="text-[#697B8C]/29">{title}/ </span>
                    <span>{heading}</span>
                  </h1>
                )}
              </div>
              <p className="mt-2 text-center text-sm font-normal text-[#05243F]/40">
                {subTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-4 max-w-4xl rounded-[20px] bg-[#F9FAFC] px-4 pt-6 pb-10 shadow-sm sm:mx-auto sm:px-8">
          <h2 className="mb-5 text-center text-[15px] font-normal text-[#05243F]/71">
            {mainContentTitle}
          </h2>
          {children}
        </div>

        <div className="flex flex-col items-center justify-between gap-y-1 pt-6 text-center text-sm font-normal text-[#05243F]/40">
          <p>
            The Federal Road Safety Corps (FRSC) is the primary agency
            responsible for enforcing traffic rules in Nigeria.
          </p>
          <p>
            It is always advised to check the official FRSC website for the most
            up to date rules and regulations.
          </p>
        </div>
      </AppLayout>
    </>
  );
}
