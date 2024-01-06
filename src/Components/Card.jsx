const Card = () => {
  return (
    <div className="md:flex h-screen w-full items-center justify-center">
      <div className="bg-white shadow-lg shadow-light-lavender/70 md:rounded-2xl overflow-hidden w-fit h-fit md:flex items-center justify-evenly ">
        {/* Result */}
        <div className="bg-gradient-to-b from-light-slate-blue to-light-royal-blue md:rounded-2xl rounded-b-2xl py-4 px-10 md:w-[17em] md:h-[23em] h-[50%] w-full text-center flex flex-col items-center justify-around md:gap-0 gap-4">
          <h1 className="text-light-lavender text-lg font-[700]">
            Your Result
          </h1>
          <div className="bg-gradient-to-b p-7 w-32 h-32 rounded-full from-violet-blue to-persian-blue flex flex-col items-center justify-center ">
            <p className="text-5xl text-white font-[800]">76</p>
            <p className="text-light-lavender/70 text-sm font-[500]">of 100</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-[700] text-white">Great</h1>
            <p className="font-[500] text-light-lavender text-sm md:pb-0 pb-4">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-transparent md:w-[17em] md:h-[23em] h-[50%] w-full flex items-center justify-evenly">
          <div className="w-full py-4 px-10 flex flex-col gap-6">
            <h1 className="text-dark-gray-blue font-[800] text-lg">Summary</h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between bg-light-red/5 md:p-2 p-3 rounded-md">
                <div className="flex gap-2 ">
                  <img src="/icon-reaction.svg" alt="reaction-icon" />
                  <p className="text-light-red font-[700] text-sm">Reaction</p>
                </div>
                <div>
                  <p className="text-dark-gray-blue/60  font-[700]">
                    <span className="font-[700] text-dark-gray-blue">80</span> /
                    100
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-orangey-yellow/5 md:p-2 p-3 rounded-md">
                <div className="flex gap-2">
                  <img src="/icon-memory.svg" alt="memory-icon" />
                  <p className="text-orangey-yellow font-[700] text-sm">
                    Memory
                  </p>
                </div>
                <div>
                  <p className="text-dark-gray-blue/60  font-[700]">
                    <span className="font-[700] text-dark-gray-blue">92</span> /
                    100
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-green-teal/5 md:p-2 p-3 rounded-md">
                <div className="flex gap-2">
                  <img src="/icon-verbal.svg" alt="verbal-icon" />
                  <p className="text-green-teal font-[700] text-sm">Verbal</p>
                </div>
                <div>
                  <p className="text-dark-gray-blue/60  font-[700]">
                    <span className="font-[700] text-dark-gray-blue">61</span> /
                    100
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-cobalt-blue/5 md:p-2 p-3 rounded-md">
                <div className="flex gap-2">
                  <img src="/icon-visual.svg" alt="visual-icon" />
                  <p className="text-cobalt-blue font-[700] text-sm">Visual</p>
                </div>
                <div>
                  <p className="text-dark-gray-blue/60  font-[700]">
                    <span className="font-[700] text-dark-gray-blue">72</span> /
                    100
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center transition-all duration-200">
              <button className="md:py-2 py-3 px-2 w-full rounded-full bg-dark-gray-blue text-white hover:bg-gradient-to-b from-light-slate-blue to-light-royal-blue transition-all duration-200 text-sm font-[700]">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
