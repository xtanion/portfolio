import React from "react";
import { animate, motion } from "framer-motion";

const fadeUpAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
  },
};

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="mr-0 ml-0 w-svw min-h-svh flex flex-col items-center  md:grid md:grid-cols-[max-content_max-content_1fr_max-content_max-content] md:grid-rows-[1fr_max-content_1fr] justify-between flex-1 content-center z-10"
    >
      <div className="max-w-[800px] md:border-[0.5px] bg-black/60 md:bg-transparent md:backdrop-blur-md md:p-12 p-8 border-[#ffffff40] md:col-end-5 md:row-start-2 md:my-0 my-auto mx-auto">
        <span className="text-xl font-mono text-teal-400">04.</span>
        <span className="flex-shrink mx-4 text-xl font-bold text-slate-200 min-w-max">
          What&apos;s next
        </span>
        <hr className="h-px w-full my-3 bg-slate-600/60 border-0 max-w-64"></hr>
        <div className=" justify-center">
          <h3 className="font-bold text-teal-50 text-xl mt-4">Get in touch</h3>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <a className="font-mono border text-teal-300 border-teal-300 py-3 px-5 mt-12 hover:bg-teal-300 hover:text-teal-950 transition-colors duration-200">
            Say Hello
          </a>
          <div className="h-12 icons grid grid-flow-col mx-8 py-24">
            <a className="github" href="https://github.com/xtanion">
              <svg
                className="group w-full h-8 fill-teal-300 p-1 hover:h-9 hover:p-0 transition-color duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                id="Github"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
                  stroke="none"
                  fill="none"
                  className="stroke-slate-300 group-hover:fill-white group-hover:stroke-none"
                ></path>
              </svg>
            </a>
            <a className="linkedin">
              <svg
                className="w-full h-8 fill-slate-300 hover:fill-[#0077b5] p-1 hover:h-9 hover:p-0 transition-all duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="linkedin"
              >
                <path d="M3 6.002c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM5.5 24.002h-5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5zm-4.5-1h4v-14H1v14zM23.5 24.002h-5a.5.5 0 0 1-.5-.5v-9c0-1.135-.473-1.987-1.299-2.336-.853-.362-1.894-.14-2.701.556v10.78a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .484.375c1.604-1.154 4.276-1.796 6.413-1.064 1.613.553 3.546 2.073 3.603 6.183v10.007a.5.5 0 0 1-.5.499zm-4.5-1h4v-9.5c-.038-2.785-1.051-4.601-2.927-5.243-2.33-.798-5.266.407-6.183 1.555a.501.501 0 0 1-.89-.312v-.5H9v14h4v-10.5a.5.5 0 0 1 .151-.358c1.118-1.086 2.667-1.436 3.939-.899 1.214.514 1.91 1.701 1.909 3.257v8.5z"></path>
              </svg>
            </a>
            <a className="twitter">
              <svg
                className="w-full h-8 fill-slate-300 hover:fill-[#1DA1F2] p-1 hover:h-9 hover:p-0 transition-all duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="twitter"
              >
                <path d="M8.145 21.449c-2.15 0-4.638-.552-7.39-2.097-.208-.117-.304-.364-.23-.59s.297-.375.533-.342c1.814.208 3.795-.217 5.275-1.086-1.695-.398-3.065-1.499-3.788-3.098a.499.499 0 0 1 .08-.536c.13-.148.334-.205.522-.148.218.067.435.113.644.138-1.287-.768-2.665-2.238-2.665-4.441a.5.5 0 0 1 .814-.389c.16.13.331.239.508.325a5.362 5.362 0 0 1-.869-1.817c-.332-1.282-.139-2.582.557-3.756a.501.501 0 0 1 .821-.057c1.472 1.839 4.088 4.061 8.294 4.466-.078-1.331.322-3.512 2.16-4.585 2.261-1.32 4.436-1.15 6.305.487.828-.184 2.135-.752 2.406-.941a.5.5 0 0 1 .77.538c-.125.471-.408.995-.76 1.463.279-.083.514-.167.639-.231a.5.5 0 0 1 .652.711c-.588.93-1.539 1.796-2.174 2.266.343 4.225-2.126 8.946-6.089 11.577-1.47.975-3.886 2.143-7.015 2.143zM3.15 19.406c5.351 2.195 9.403.428 11.456-.935 3.756-2.494 6.067-6.988 5.62-10.929a.498.498 0 0 1 .222-.474c.269-.177.68-.502 1.094-.905-.407.088-.802.147-1.089.148-.276-.033-.447-.169-.492-.405a.498.498 0 0 1 .306-.559c.283-.113.665-.454.995-.872-.566.219-1.178.413-1.628.478a.497.497 0 0 1-.413-.131c-1.578-1.482-3.362-1.658-5.306-.524-1.745 1.02-1.784 3.397-1.6 4.148a.499.499 0 0 1-.513.619C7.331 8.829 4.427 6.719 2.68 4.773a3.808 3.808 0 0 0-.132 2.344c.294 1.133 1.034 2.002 1.596 2.33a.5.5 0 0 1-.153.922 3.106 3.106 0 0 1-1.752-.185c.521 2.085 2.689 3.067 3.299 3.135a.501.501 0 0 1 .268.879c-.437.369-1.091.547-1.828.51.836 1.114 2.132 1.754 3.681 1.788a.5.5 0 0 1 .323.872c-1.228 1.1-2.99 1.823-4.832 2.038z"></path>
              </svg>
            </a>
            <a className="psf">
              <svg
                className="group stroke-2 w-full h-8 p-1 hover:h-9 hover:p-0 transition-color duration-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <path
                  className="l1 stroke-slate-300 group-hover:fill-[#319bd8] group-hover:stroke-none"
                  d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                />
                <path
                  className="l2 stroke-slate-300 group-hover:fill-[#FFC107] group-hover:stroke-none"
                  d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="left-divider h-[1px] w-[7.5rem] bg-transparent col-start-1 row-start-2 mt-auto mb-auto hidden lg:block"></div>
      <div className="rgt-divider h-[1px] w-[7.5rem] bg-white/30 col-start-5 row-start-2 mt-auto mb-auto hidden xl:block"></div>

    </section>
  );
};

export default Contacts;
