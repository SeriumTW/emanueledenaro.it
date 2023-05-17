import React, { useEffect } from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import AOS from 'aos';
import 'aos/dist/aos.css'; // puoi anche utilizzare un file CSS personalizzato se preferisci

export default function Cv() {

  useEffect(() => {
    AOS.init({
      // puoi configurare `aos` qui. Ad esempio:
      duration: 1000, // durata dell'animazione in millisecondi
      delay: 0, // ritardo dell'animazione in millisecondi
    });
  }, []);

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8  lg:mx-44">
      <div data-aos="zoom-in" className="px-4 sm:px-0">
        <h1 className=" font-bold leading-7 text-white">Curriculum abbreviativo</h1>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Informazioni Professionali</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div data-aos="zoom-in" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Nome Completo</dt>
            <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">Emanuele Denaro</dd>
          </div>
          <div data-aos="zoom-in" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Figura professionale</dt>
            <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">Frontend Developer / FullStack Developer</dd>
          </div>
          <div data-aos="zoom-in" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Indirizzo Email</dt>
            <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">edenaro14@gmail.com</dd>
          </div>
          <div data-aos="zoom-in" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Conoscenze</dt>
            <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">
                Prima di iniziare la mia esperienza lavorativa, ho frequentato Aulab, una rinomata istituzione di formazione nel campo dello sviluppo software. Durante il mio percorso presso Aulab, ho seguito con impegno il corso Hackademy, un bootcamp intensivo della durata di 3 mesi. Questa formazione approfondita mi ha fornito una solida base di conoscenze e competenze per intraprendere la mia carriera come programmatore.
                Durante il corso Hackademy, ho avuto l'opportunità di ampliare le mie competenze in diverse tecnologie e pratiche di sviluppo. Ho approfondito i miei studi su HTML5, CSS (SCSS/SASS), ReactJS, Angular, Java, C# e MySQL, imparando a utilizzare queste tecnologie in modo efficace per creare applicazioni web e software. Il corso mi ha anche fornito una comprensione approfondita dei principi di sviluppo software, metodologie di lavoro agili e best practices per la scrittura di codice pulito e manutenibile.
                Grazie alla mia partecipazione ad Aulab e al completamento del corso Hackademy, ho acquisito una base solida e un'ampia gamma di competenze che mi hanno preparato per il successo nel mondo del lavoro come sviluppatore. Sono grato per l'esperienza formativa che ho avuto e sono pronto ad applicare le mie conoscenze e competenze acquisite per affrontare sfide sempre più complesse nel campo dello sviluppo software.
            </dd>
          </div>
          <div data-aos="zoom-in" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Esperienza Lavorativa</dt>
            <dd className="mt-1 text-sm leading-6 text-white sm:col-span-2 sm:mt-0">
                Presso Gis International Srl, ho lavorato come full stack developer per un periodo di 3 mesi. Durante il mio impiego, ho avuto l'opportunità di contribuire allo sviluppo di progetti software per l'azienda. La mia responsabilità principale era quella di lavorare su entrambi i lati dello sviluppo, sia sul front end che sul back end, utilizzando una varietà di tecnologie e linguaggi di programmazione.
                Successivamente, ho iniziato a lavorare presso Lynx Spa a partire da settembre 2022 come front end developer specializzato in Angular. In questa posizione, mi sono concentrato principalmente sullo sviluppo del front end delle applicazioni web utilizzando Angular come framework principale. Ho collaborato con il team di sviluppo per creare interfacce utente intuitive e interattive, garantendo un'esperienza utente di alta qualità.
                Oltre alle mie esperienze lavorative, ho anche acquisito esperienza come programmatore indipendente. Ho sviluppato un server di gioco futuristico di nome Metropolis su una piattaforma chiamata FiveM, che ha uno stile Cyberpunk. Questa esperienza mi ha permesso di migliorare le mie abilità di programmazione e di lavorare in modo autonomo su un progetto complesso.
            </dd>
          </div>
          <div data-aos="zoom-in" className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-white">Attachments</dt>
            <dd className="mt-2 text-sm text-white sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">curriculum.pdf</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
