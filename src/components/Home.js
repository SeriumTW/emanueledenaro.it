import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faVuejs, faSass, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons'

import AOS from 'aos';
import 'aos/dist/aos.css'; // puoi anche utilizzare un file CSS personalizzato se preferisci


export default function Home() {

  useEffect(() => {
    AOS.init({
      // puoi configurare `aos` qui. Ad esempio:
      duration: 1500, // durata dell'animazione in millisecondi
      delay: 500, // ritardo dell'animazione in millisecondi
    });
  }, []);

  return (
    <div className="bg-gray-800">
      <div className="relative isolate px-6 pt-48 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div data-aos="zoom-in" className="mx-auto max-w-2xl py-32 sm:py-22 lg:py-50">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-100/10 hover:ring-gray-900/20">
               Visita il mio GitHub.{' '}
              <a href="https://github.com/SeriumTW" target="_blank" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Clicca qui <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Benvenuti nel mondo di Emanuele.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
            "Come programmatore Front-End, mi impegno a trasformare il design in esperienze interattive coinvolgenti, sfruttando le mie competenze tecniche e la passione per l'innovazione digitale, per creare soluzioni web intuitive che lasciano un'impronta duratura."
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contattami
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-300">
                Clicca qui <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      <div  className="bg-gray-900 py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p data-aos="fade-up" className="text-center text-xs font-semibold mb-5 text-gray-600">
            "Non sono elencate tutte le mie conoscenze, ma solo quelle che uso più frequentemente. 🙃"
          </p>
          
          <h2 data-aos="fade-up" className="text-center text-lg font-semibold leading-10 text-gray-100">
            Con i migliori strumenti Framework e tecnologie!
          </h2>
          <div data-aos="fade-up" className="mx-auto mt-10 grid max-w-lg grid-cols-6 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" title="Vai alla documentazione di React">
              <FontAwesomeIcon icon={faReact} className="col-span-2 h-12 w-full object-contain lg:col-span-1 text-white hover:text-indigo-600" />
            </a>
            <a href="https://angular.io/" target="_blank" rel="noopener noreferrer" title="Vai alla documentazione di Angular">
              <FontAwesomeIcon icon={faAngular} className="col-span-2 h-12 w-full object-contain lg:col-span-1 text-white hover:text-indigo-600" />
            </a>
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" title="Vai alla documentazione di Vue.js">
              <FontAwesomeIcon icon={faVuejs} className="col-span-2 h-12 w-full object-contain lg:col-span-1 text-white hover:text-indigo-600" />
            </a>
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" title="Vai alla documentazione di Sass">
              <FontAwesomeIcon icon={faSass} className="col-span-2 h-12 w-full object-contain sm:col-start-2 lg:col-span-1 text-white hover:text-indigo-600" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer" title="Vai alla documentazione di HTML5">
              <FontAwesomeIcon icon={faHtml5} className="col-span-2 h-12 w-full object-contain lg:col-span-1 text-white hover:text-indigo-600" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank" rel="noopener noreferrer" title="Vai alla documentazione di JavaScript">
              <FontAwesomeIcon icon={faJsSquare} className="col-span-2 h-12 w-full object-contain lg:col-span-1 text-white hover:text-indigo-600" />
            </a>
          </div>
      </div>
      

    </div>
    </div>

    
  )
}
