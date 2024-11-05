/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "gray-20": "#F8F4FB",
          "gray-50": "EFE6E6",
          "gray-100": "#DFCCCC",
          "gray-500": "#5E0000",
          "primary-100": "#FFE1E0",
          "primary-300": "#FFA6A3",
          "primary-500": "#FF6B66",
          "secondary-400": "#FFCD58",
          "secondary-500": "#FFC132",
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        backgroundImage: (theme) => ({
          "gradient-yellowred":
            "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
          "mobile-home": "url('./assets/HomePageGraphic.png')",
        }),
        fontFamily: {
          dmsans: ["DM Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
        },
        content: {
          evolvetext: "url(./assets/EvolveText.png)",
          abstractwaves: "url(./assets/AbstractWaves.png)",
          sparkles: "url(./assets/Sparkles.png)",
          circles: "url(./assets/Circles.png)",
        },
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
    plugins: [],
  };
  // "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  // "./src/**/*.{html,ts,tsx}", "*.{html,ts,tsx}"
  


  <ul
          className={`absolute top-[100%] right-0 flex flex-col gap-0 origin-top-right lg:flex lg:flex-row lg:gap-[3.5rem] lg:items-center lg:static ${
            isNavShowing ? "flex" : "hidden"
          }`}
        >
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top'>
            <Link
              className={`${
                currentPath === "/"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[0.9rem]"
                  : ""
              } transition-all hover:text-secondary h-full w-full flex items-center pt-[1rem] pr-[5rem] pb-[1rem] ps-[3rem] lg:p-0`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-200'>
            <Link
              className={`${
                currentPath === "/about"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[0.9rem]"
                  : ""
              }  transition-all hover:text-secondary`}
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-[400ms]'>
            <Link
              className={`${
                currentPath === "/gallery"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[0.9rem]"
                  : ""
              }  transition-all hover:text-secondary`}
              href={"/gallery"}
            >
              Gallery
            </Link>
          </li>
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-[600ms]'>
            <Link
              className={`${
                currentPath === "/plans"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[0.9rem]"
                  : ""
              }  transition-all hover:text-secondary`}
              href={"/plans"}
            >
              Plan
            </Link>
          </li>
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-[800ms]'>
            <Link
              className={`${
                currentPath === "/trainers"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[0.9rem]"
                  : ""
              }  transition-all hover:text-secondary`}
              href={"/trainers"}
            >
              Trainers
            </Link>
          </li>
          <li className='h-[4rem] w-full shadow-[-2rem_2rem_5rem_rgba(0,0,0,0.5)] animate-navAnimation rotate-[90deg] opacity-0 origin-top delay-[1s]'>
            <Link
              className={`${
                currentPath === "/contact"
                  ? "lg:relative lg:after:content-[''] lg:after:block lg:after:w-[1.2rem] lg:after:h-[1.2rem] lg:after:bg-primary lg:after:absolute lg:after:left-[calc(50%-0.6rem)] lg:after:rotate-45 lg:after:mt-[0.9rem]"
                  : ""
              }  transition-all hover:text-secondary`}
              href={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>