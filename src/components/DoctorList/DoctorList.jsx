import { useParams } from "react-router-dom";
import useDoctorlist from "../../hooks/useDoctorlist";
import { DoctorTypeCard } from "./DoctorTypeCard";

export const DoctorList = () => {
  const [doctorlist] = useDoctorlist();
  const prm = useParams();
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div class="max-w-xl mx-auto text-center">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Meet our {prm.typeOfdoctor} doctor
            <strong class="font-extrabold text-red-700 sm:block">
              Experience in 12+ years
            </strong>
          </h1>
          <p class="mt-4 sm:leading-relaxed sm:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <a
              class="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring"
              href="/get-started"
            >
              Meet Doctors
            </a>
          </div>
        </div>
      </div>
      <div class="min-h-screen bg-base-200">
        <h2 className="text-center text-3xl font-extrabold sm:text-5xl mb-10">
          {prm.typeOfdoctor}
        </h2>
        <div className="ml-10 mb-10 flex flex-wrap gap-10">
          {doctorlist
            .filter((eachData) => eachData.department === prm.typeOfdoctor)
            .map((eachData) => (
              <DoctorTypeCard data={eachData} />
            ))}
        </div>
      </div>
    </section>
  );
};
