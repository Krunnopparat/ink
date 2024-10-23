import Link from "next/link";

export default function LandingMain(){
    return(
      <section className="relative bg-cover bg-center bg-no-repeat bg-[url('/modern-printing.jpg')] bg-gray-950/30 bg-blend-multiply min-h-screen">
          <div className="h-screen p-5 text-center lg:text-start py-20 lg:py-56 flex justify-center  bg-gradient-to-t from-zinc-950">
            <div className="flex flex-col justify-center">
              <h1 className="mb-5 text-2xl tracking-tight leading-none md:text-5xl lg:text-4xl text-white">
                Software for Calculating Flexographic Ink Consumption
              </h1>
              <h1 className="mb-2 text-2xl font-bold tracking-tight leading-none md:text-5xl lg:text-4xl text-white">
                โปรแกรมคำนวณ
              </h1>
              <h1 className="mb-6 text-2xl font-bold tracking-tight leading-none md:text-5xl lg:text-4xl text-white">
                ปริมาณหมึกพิมพ์เฟล็กโซกราฟี
              </h1>
              <p className="mb-8 text-sm font-normal lg:text-xl text-gray-50">
                เว็บไซต์นี้จะเป็นตัวช่วยให้ผู้ประกอบการสามารถคำนวณปริมาณหมึกพิมพ์
                ในการพิมพ์งานได้ดียิ่งขึ้น ทำให้สามารถลดต้นทุนที่ไม่จำเป็นได้
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                <Link
                
                  href="http://xink.kunadev.net/"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white border-2 rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  Get started
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
    )
}