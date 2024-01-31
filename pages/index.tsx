import { NowPlaying } from "../components";
import Image from "next/image";
import Banners from "../components/Banner";

const name = "Aditya Tiwari";
const belowLink = "@notstoicc"
const bio = "Bhagavad Gita 11.55 | nirvairah"

const twitter = "https://twitter.com/Aditya80Tiwari?t=jg3tglMOmizj6mcsyP3ESg&s=09";
const instagram = "https://instagram.com/adityxtiwari";
const spotify = "https://open.spotify.com/user/317qeapt42gcgh5c4nm5o4zsaerq?si=0iNxYgQTTXmnKCxVX4gQOw";
const telegram = "http://t.me/notstoicc";
const mail = "mailto:aditya80.tiwari@gmail.com?cc=aaditya80.tiwari@gmail.com&bcc=adityaanimearchives@gmail.com&subject=An%20Email%20to%20Aditya%20%3A&body=Dear%20Aditya%2C%0AI%20wanted%20to%20tell%20you%20that";
const discord = "https://discord.com/user/840214353646845974";
const discordTag = "/user/notstoicc#2806";

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-primary flex min-h-screen flex-col">
          <div
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            className="bg-banner h-60 w-full"
          />
          <div className="mx-auto -mt-20 flex w-full max-w-2xl flex-1 flex-col items-center px-0 sm:px-10">
            <div className="relative mb-6 flex w-full flex-col justify-center bg-opacity-90 px-2 sm:min-h-full sm:rounded-lg sm:px-6">
              <div className="flex flex-col items-center justify-center rounded-md p-2 py-4">
                <div className="relative">
                  <Image
                    className="bg-primary border-primary h-64 w-64 rounded-full border-4 border-solid object-cover"
                    src="/pfp.png"
                    alt="pfp"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="relative flex flex-row items-center justify-center">
                  <div className="mb-1 flex flex-col">
                    <div className="mt-1 flex flex-row items-center justify-center">
                      <span className="flex text-center text-2xl font-bold leading-tight text-zinc-300">
                        {name}
                      </span>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-1 h-5 w-5 text-indigo-600"
                        >
                          <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                      <a
                        // rel="noopener noreferrer nofollow"
                        // target="_blank"
                        href="https://instagram.com/notstoicc?igshid=NGExMmI2YTkyZg=="
                      >
                      {belowLink}
                      </a>
                    </p>
                    <div className="mt-3 flex flex-col">
                      <p className="inline-block whitespace-pre-wrap text-center text-sm text-gray-500 dark:text-gray-400">
                        <a
                        href="https://www.holy-bhagavad-gita.org/chapter/11/verse/55"
                      >
                    {bio}
                          </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <Banners />
                </div>
                <div className="mt-1 rounded pt-2">
                  <div>
                    <div className="flex flex-row flex-wrap  items-center justify-center">
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={twitter}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-6 fill-current text-blue-400 transition-all"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Twitter</title>
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={instagram}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-6 fill-current text-pink-400 transition-all"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Instagram</title>
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={spotify}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-6 fill-current text-green-400"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Spotify</title>
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={telegram}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-7 w-7"
                          xmlns="http://www.w3.org/2000/svg"
                          height="800"
                          width="1200"
                          viewBox="-36 -60 312 360"
                        >
                          <defs>
                            <linearGradient
                              gradientUnits="userSpaceOnUse"
                              y2="51.9"
                              y1="11.536"
                              x2="28.836"
                              x1="46.136"
                              id="a"
                            >
                              <stop offset="0" stopColor="#37aee2" />
                              <stop offset="1" stopColor="#1e96c8" />
                            </linearGradient>
                          </defs>
                          <g transform="scale(3.4682)">
                            <circle
                              fill="url(#a)"
                              r="34.6"
                              cx="34.6"
                              cy="34.6"
                            />
                            <path
                              fill="#fff"
                              d="M14.4 34.3l23.3-9.6c2.3-1 10.1-4.2 10.1-4.2s3.6-1.4 3.3 2c-.1 1.4-.9 6.3-1.7 11.6l-2.5 15.7s-.2 2.3-1.9 2.7c-1.7.4-4.5-1.4-5-1.8-.4-.3-7.5-4.8-10.1-7-.7-.6-1.5-1.8.1-3.2 3.6-3.3 7.9-7.4 10.5-10 1.2-1.2 2.4-4-2.6-.6l-14.1 9.5s-1.6 1-4.6.1c-3-.9-6.5-2.1-6.5-2.1s-2.4-1.5 1.7-3.1z"
                            />
                          </g>
                          <title>Telegram</title>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={mail}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 text-gray-700 dark:text-gray-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                          <title>Email</title>
                        </svg>
                      </a>
                      <div className="flex items-center">
                        <div className="mx-auto inline-block">
                          <div id="snackbar">Copied to clipboard</div>
                          <div
                            onClick={myFunction}
                            // onClick={() => {
                            //   navigator.clipboard.writeText(discordTag);
                            // }}
                            onClickCapture={() => {
                              navigator.clipboard.writeText(discordTag);
                            }}
                            className="flex cursor-pointer items-center justify-center space-x-2 rounded-full border-white border-opacity-10 px-2 py-2 hover:bg-white hover:bg-opacity-5"
                          >
                            <svg
                              className="h-5 fill-current text-indigo-500"
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Discord</title>
                              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                            </svg>
                            <p className="text-sm font-medium text-indigo-100">
                              {/* <a href={discord}>{discordTag}</a> */}
                              {discordTag}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="max-w-s mt-1 w-full space-y-2">

                        
                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="https://stoicc-git-main-notstoicc.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 
                                      01)
                                    </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      Personal Website
                                    </span>
                                    <span
                                      title="https://stoicc-git-main-notstoicc.vercel.app/"
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      About me..
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>


                          <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="https://nodownload.org/tools/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 02) </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      Web Toolbox
                                    </span>
                                    <span
                                      title="Web toolbox"
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      400+ Web Apps, Ad-free.
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div> 


                     <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="https://nodownload.org/image/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 03) </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      Image Hosting 
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      Limit : 4Mb (provides link)
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>

                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="https://www.photopea.com/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 04) </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      Portable Photoshop
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      Hosted on web
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>

                        
                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="https://i.imgflip.com/6zi91p.jpg"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 05) </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="OF"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      My OnlyFans
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      for free 💲
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>

                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="https://www.instagram.com/reel/C2mDHqKvlVx/?igsh=MzRlODBiNWFlZA=="
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 06 </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      Message from my girl 💗
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      for every other girl 
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>
{/*
                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> - </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      -
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      -
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>

                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> - </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      -
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      -
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>

                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> - </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      -
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      -
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>

                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> - </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      -
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      -
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>

                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> - </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      -
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      -
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>

                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> - </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="Nothing"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      -
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      -
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>   
                            </div>
                          </a>
                        </div>

*/}
                        
                      </div>
                    </div>
                    <div className="mb-4 flex justify-center">
                      <div className="bg-primary text-banner flex items-center justify-center rounded-full bg-opacity-90 text-xs font-medium"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 flex justify-center">
            <div className="bg-primary text-banner flex items-center justify-center rounded-full bg-opacity-90 text-xs font-medium">
              <NowPlaying />
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
