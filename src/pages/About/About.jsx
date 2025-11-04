import HeroImg from "@/assets/images/hero.jpg";


export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full‑Stack Developer, API Designer, Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white"> Hello! I'm Bharath Yadav Puni, a full‑stack developer building reliable, 
                maintainable web apps with React.js on the frontend and Node.js/Express.js on the backend, backed by MongoDB/MySQL.{" "} 
                <span className="font-bold text-white"> Focused on responsive UI, accessibility, and clean component architecture </span> , 
                I design and integrate REST APIs and ship features that improve usability and developer velocity. </p> 
              <p className="text-white"> Recent work includes Samayam Scheduler (constraint‑based timetable generator), 
                a Weather Dashboard using OpenWeatherMap, and a Movie Database with search and pagination. I prioritize mobile‑first design, 
                strong state management with Context API, and clear error handling for resilient user experiences. </p>

              <div className="pt-6"> 
                <blockquote className="border-l-4 border-gray-300 pl-4"> 
                  <p className="text-white"> Continuous learner with hands‑on Git/GitHub, Postman, and Agile collaboration, 
                    turning ideas into working products end‑to‑end—from API design to pixel‑perfect interfaces—while writing clean, accessible code that scales. 
                  </p> 
                </blockquote> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
