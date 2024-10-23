"use client";
import DimentionCal from "@/components/DimentionCal";
import FilmWidthCal from "@/components/FilmWidthCal";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = ( option ) => {
    setSelectedOption(option);
  }

  return (
    <>
      <main className="mx-4 md:mx-10 mt-8">
        
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-2 text-2xl md:text-4xl text-gray-900 dark:text-white">
            คำนวณปริมาณหมึกพิมพ์
          </h1>
          <ul className="w-full flex flex-row justify-center mx-auto">
            
            <li className="px-1 md:px-3 w-full">
              <input
                type="checkbox"
                id="dimention-option"
                value="Label Dimention"
                className="hidden peer"
                onChange={() => handleOptionChange('Label Dimention')}
                checked={selectedOption === 'Label Dimention'}
              />
              <label
                htmlFor="dimention-option"
                className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border-2 border-gray-200 hover:border-blue-600 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-lg">Label  Dimention</div>
                </div>
              </label>
            </li>
            <li className="px-1 md:px-3 w-full">
              <input
                type="checkbox"
                id="film-option"
                value="Film Width"
                className="hidden peer"
                onChange={() => handleOptionChange('Film Width')}
                checked={selectedOption === 'Film Width'}
              />
              <label
                htmlFor="film-option"
                className="inline-flex items-center justify-center w-full p-5 text-gray-500 hover:text-gray-950 bg-white border-2 border-gray-200 hover:border-blue-600 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-lg">Film Width</div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div className="mt-5 w-full">
          {selectedOption === 'Film Width' && (
            <FilmWidthCal/>
          )}
          {selectedOption === 'Label Dimention' && (
            <DimentionCal/>
          )}
        </div>
      </main>
    </>
  );
}
