import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";

export default function DSlicerHomePage() {
  return (
    <>
      <Helmet>
        <title>Parshana's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <header className="flex justify-center items-center w-full p-[15px] bg-teal-900">
          <div className="flex flex-row justify-center w-full mx-auto md:px-5 max-w-[1394px]">
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <div className="flex flex-row justify-center items-start w-[25%] md:w-full">
                <button><Img src="images/img_vector.svg" alt="vector_one" className="h-[39px] mt-px" /></button>
                <button><Img
                  src="images/img_vector_white_a700.svg"
                  alt="vector_three"
                  className="h-[38px] mt-[3px] ml-[33px] sm:ml-5"
                /></button>
                <button><Img
                  src="images/img_vector_white_a700_33x32.svg"
                  alt="vector_five"
                  className="h-[33px] w-[32px] mt-1 ml-[33px] sm:ml-5"
                /></button>
                <div className="h-[38px] w-[38px] ml-[33px] sm:ml-5 relative">
                  <button><Img
                    src="images/img_vector_white_a700_23x30.svg"
                    alt="vector_seven"
                    className="h-[23px] right-0 top-0 m-auto absolute"
                  /></button>
                  <button><Img
                    src="images/img_vector_white_a700_28x31.svg"
                    alt="vector_nine"
                    className="h-[28px] bottom-0 left-0 m-auto absolute"
                  /></button>
                </div>
                <div className="h-[9px] w-[9px] mt-3.5 ml-9 sm:ml-5 rotate-[-90deg] bg-white-A700 rounded" />
                <div className="h-[9px] w-[9px] mt-3.5 ml-[9px] rotate-[-90deg] bg-white-A700 rounded" />
                <div className="h-[9px] w-[9px] mt-3.5 ml-[9px] rotate-[-90deg] bg-white-A700 rounded" />
              </div>
              <div className="flex flex-row sm:flex-col justify-center items-start w-[40%] md:w-full sm:gap-5">
                <Img src="images/img_search.svg" alt="search_one" className="h-[34px] w-[35px] mt-2.5 sm:mt-0" />
                {/* <div className="h-[54px] w-[62%] ml-[18px] sm:ml-0 bg-blue_gray-100" /> */}
                {/* <div class="form-container"> */}
              <form class="form" className="h-[54px] w-[62%] ml-[18px] sm:ml-0 bg-blue_gray-100">
                  <input id="search" type="text" class="input"/>
                  
              </form>
              {/* </div> */}
                <div className="h-[41px] w-[41px] mt-[5px] ml-[39px] sm:ml-5 sm:mt-0 relative">
                  <button><Img
                    src="images/img_vector_white_a700_41x41.svg"
                    alt="vector"
                    className="justify-center h-[41px] w-[41px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  /></button>
                  <div className="h-[4px] w-[4px] bottom-[17%] right-0 left-0 m-auto bg-white-A700 absolute rounded-[50%]" />
                </div>
                <div className="h-[47px] w-[9%] md:w-full ml-[34px] sm:ml-5 relative">
                  <button><Img
                    src="images/img_vector_white_a700_16x16.svg"
                    alt="vector"
                    className="justify-center h-[16px] w-[16px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  /></button>
                  <button><Img
                    src="images/img_vector_white_a700_47x45.svg"
                    alt="vector"
                    className="justify-center h-[47px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  /></button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[15px] md:gap-5 md:px-5 max-w-[1428px]">
          <div className="flex flex-col items-center justify-start w-[27%] md:w-full p-[13px] bg-gray-600">
            <div className="flex flex-col items-center justify-start w-[98%] md:w-full mt-[37px] gap-[37px]">
              <div className="flex flex-row justify-start items-center w-[66%] md:w-full gap-[23px]">
                <div className="h-[48px] w-[48px] relative">
                  <button><Img
                    src="images/img_vector_white_a700_48x48.svg"
                    alt="vector"
                    className="justify-center h-[48px] w-[48px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  /></button>
                  <div className="flex flex-row justify-end items-start w-[80%] right-[4%] top-[2%] m-auto absolute">
                    <button><Img src="images/img_vector_white_a700_33x9.svg" alt="vector" className="h-[33px] z-[1]" /></button>
                    <button><Img
                      src="images/img_vector_white_a700_5x31.svg"
                      alt="vector"
                      className="h-[5px] mt-[9px] ml-[-2px]"
                    /></button>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[69%] bottom-[6%] left-[5%] m-auto absolute">
                    <button><Img src="images/img_vector_white_a700_5x31.svg" alt="vector" className="h-[4px]" />
                    <div className="h-[31px] w-px bg-white-A700" /></button>
                  </div>
                </div>
                <Heading as="h1" className="!text-white-A700">
                  3D Slicer
                </Heading>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-[45px] p-[15px] bg-blue_gray-100">
                <div className="flex flex-row justify-center w-full mt-3">
                  <div className="flex flex-col items-center justify-start w-full gap-[38px]">
                    <Heading as="h2" className="text-center">
                      Welcome
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="h-[44px] w-[75%] bg-blue_gray-100" />
                          <Button shape="square" className="w-full mt-[-43px] sm:px-5">
                            Add Data
                          </Button>
                          <Button shape="square" className="w-full sm:px-5">
                        Download Data
                      </Button>
                      <Button shape="square" className="w-full sm:px-5">
                        Explore Data
                      </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[99%] md:w-full pb-3.5 bg-white-A700">
                  <div className="flex flex-col items-center justify-start w-full gap-[21px]">
                    <div className="flex flex-row justify-start w-full p-[15px] bg-gray-600">
                      <Text as="p" className="mt-0.5 ml-[5px] !text-white-A700 text-center">
                        Data Probe
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                      <div className="h-[17px] w-full relative">
                        <div style={{ width: "0%" }} className="h-full absolute" />
                      </div>
                      <div className="flex flex-row justify-between items-start w-[62%] md:w-full mt-[5px] ml-[5px] md:ml-0">
                        <Text size="xs" as="p" className="mt-[5px]">
                          Sp: 1.0
                        </Text>
                        <Text size="xs" as="p" className="w-[47%]">
                          <>
                            R 84.5
                            <br />A 0.0
                            <br />S 123.3
                          </>
                        </Text>
                      </div>
                      <Text as="p" className="w-[88%] mt-[55px] ml-[5px] md:ml-0">
                        <>
                          L None
                          <br />F None
                          <br />B None
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[73%] md:w-full gap-[15px] grid-cols-2 md:grid-cols-1 md:gap-5 grid">
            <div className="flex flex-row justify-start w-full pb-[381px] md:pb-5 bg-blue_gray-100">
              <div className="flex flex-row justify-center w-full p-2.5 bg-red-A700">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[98%] gap-[11px] sm:gap-5">
                  <button><Img src="images/img_vector_white_a700_44x44.svg" alt="vector_one" className="h-[44px] w-[44px]" /></button>
                  <div className="h-[19px] w-[79%] md:w-full relative">
                    <div className="h-[5px] w-full top-[34%] right-0 left-0 m-auto bg-blue_gray-100 relative">
                      <div style={{ width: "56%" }} className="h-full bg-cyan-200 absolute" />
                    </div>
                    <div className="h-[19px] w-[4%] right-[44%] bottom-0 top-0 m-auto bg-white-A700 absolute rounded-sm" />
                  </div>
                  <button><Img src="images/img_vector_white_a700_37x37.svg" alt="vector_three" className="h-[37px] w-[37px]" /></button>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end w-full pb-[381px] md:pb-5 bg-blue_gray-100">
              <div className="flex flex-row justify-center w-full p-2.5 bg-blue-900">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[98%] gap-[11px] sm:gap-5">
                  <button><Img src="images/img_vector_white_a700_44x44.svg" alt="vector_one" className="h-[44px] w-[44px]" /></button>
                  <div className="h-[19px] w-[79%] md:w-full relative">
                    <div className="h-[5px] w-full top-[34%] right-0 left-0 m-auto bg-blue_gray-100 relative">
                      <div style={{ width: "56%" }} className="h-full bg-cyan-200 absolute" />
                    </div>
                    <div className="h-[19px] w-[4%] right-[44%] bottom-0 top-0 m-auto bg-white-A700 absolute rounded-sm" />
                  </div>
                  <button><Img src="images/img_vector_white_a700_37x37.svg" alt="vector_three" className="h-[37px] w-[37px]" /></button>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full bg-blue_gray-100">
              <div className="flex flex-row justify-center w-full mb-[385px] p-2.5 bg-green-800">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[98%] gap-[11px] sm:gap-5">
                  <button><Img src="images/img_vector_white_a700_44x44.svg" alt="vector_one" className="h-[44px] w-[44px]" /></button>
                  <div className="h-[19px] w-[79%] md:w-full relative">
                    <div className="h-[5px] w-full top-[34%] right-0 left-0 m-auto bg-blue_gray-100 relative">
                      <div style={{ width: "56%" }} className="h-full bg-cyan-200 absolute" />
                    </div>
                    <div className="h-[19px] w-[4%] right-[44%] bottom-0 top-0 m-auto bg-white-A700 absolute rounded-sm" />
                  </div>
                  <button><Img src="images/img_vector_white_a700_37x37.svg" alt="vector_three" className="h-[37px] w-[37px]" /></button>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end w-full bg-blue_gray-100">
              <div className="flex flex-row justify-center w-full mb-[385px] p-2.5 bg-yellow-A700">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[98%] gap-[11px] sm:gap-5">
                  <button><Img src="images/img_vector_white_a700_44x44.svg" alt="vector_one" className="h-[44px] w-[44px]" /></button>
                  <div className="h-[19px] w-[79%] md:w-full relative">
                    <div className="h-[5px] w-full top-[34%] right-0 left-0 m-auto bg-blue_gray-100 relative">
                      <div style={{ width: "56%" }} className="h-full bg-cyan-200 absolute" />
                    </div>
                    <div className="h-[19px] w-[4%] right-[44%] bottom-0 top-0 m-auto bg-white-A700 absolute rounded-sm" />
                  </div>
                  <button><Img src="images/img_vector_white_a700_37x37.svg" alt="vector_three" className="h-[37px] w-[37px]" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
