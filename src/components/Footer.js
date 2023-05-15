import React from "react";

const Footer = () => {
    return ( 
        <footer className="rounded-lg shadow bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src="https://media.discordapp.net/attachments/1105244250901319694/1107433418368761956/output-onlinepngtools.png?width=1412&height=1012" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">emanueledenaro.it</span>
                    </a>

                    <p className="text-white font-semibold">Progetto creato utilizzando Reactjs e Tailwind.</p>
                </div>
                <hr class="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">emanueledenaro.it</a> All Rights Reserved.</span>
            </div>
        </footer>


    );
    }

export default Footer;