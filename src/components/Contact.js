import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-toastify';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Contact() {
  const [agreed, setAgreed] = useState(false)
  const [state, handleSubmit] = useForm("mzbqwyla");
  const [initialSubmit, setInitialSubmit] = useState(false); // New line

  useEffect(() => {
    if (initialSubmit) { // Checking if the form has been submitted initially
      if (state.succeeded) {
        
        toast.success('Il tuo messaggio è stato inviato!');
      } else if (state.errors.length > 0) {
        toast.error('Qualcosa è andato storto, riprova più tardi!');
      }
    }
  }, [state.succeeded, initialSubmit]); // Added initialSubmit to the dependencies

  const onSubmit = async (event) => { // New onSubmit method

    if (!agreed) {
      toast.error('Devi accettare la privacy policy per inviare il messaggio!');
      return;
    }
    setInitialSubmit(true); // Setting the initial submit to true when submit button is clicked
    handleSubmit(event); // Calling your handleSubmit method
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contattami">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">Contattami</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        "Sei interessato a collaborare o vuoi saperne di più sul mio lavoro? Non esitare a contattarmi! Sarei felice di rispondere a qualsiasi domanda tu possa avere e di discutere su come posso contribuire al tuo progetto."
        </p>
      </div>
      <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nome
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ValidationError 
                prefix="First-name" 
                field="first-name"
                errors={state.errors}
                className="text-red-500"
                
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Cognome
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ValidationError 
                prefix="Last-name" 
                field="last-name"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Azienda
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Numero di telefono
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Nazione
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>IT</option>
                  <option>US</option>
                  <option>CA</option>
                  <option>ES</option>
                  <option>BR</option>
                  <option>JP</option>
                  <option>FR</option>
                  <option>DE</option>
                  <option>UK</option>
                  <option>ALTRO</option>

                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ValidationError 
                prefix="Phone-number" 
                field="phone-number"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Messaggio
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
            Selezionando questo, accetti le nostre{' '}
            </Switch.Label>
            <a href="https://www.freeprivacypolicy.com/live/a53a17f1-2f4d-4de3-958e-7ef25a77f23a" className="font-semibold text-indigo-600" target="_blank" rel="noreferrer">
                privacy&nbsp;policy
              </a>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
              disabled={state.submitting}
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
              Invia!
          </button>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl text-center font-semibold text-gray-900">Oppure</h2>
        </div>

        {/* CREAMI un componente per whatsapp business */}
        <div className="mt-10 mx-auto max-w-2xl text-center">
          <a href="https://wa.me/message/BR5B37F2EG4EH1" className="block rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" target="_blank" rel="noreferrer">
            Contattami su Whatsapp
          </a>
        </div>
      </form>



    </div>
  )
}

export default Contact
