export const Explanation = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src="./sup.svg" class="max-w-sm rounded-lg" />
          <div>
            <h1 class="text-5xl font-bold">Medical Support</h1>
            <p class="py-6 text-lg  font-mono break-all">
              E-Medic is an advanced medical industry in Bangladesh. E-Medic
              provides an smart solution for doctor and patient. E-Medic ensure
              best healthcare in bangladesh. This is the first time in
              bangladesh where patient can easily search for doctors and store
              their previous prescription where doctor can see them when
              attending a patient for check up. Doctor can also provide
              prescription by our site. All prescription will be stored in
              patient profile. E-Medic also provide fastest medicine commerce
              site in bangladesh. Everyone can buy medicine from our shop
            </p>
            <div className="flex flex-row gap-3">
              <button class="btn btn-outline btn-info">Chest</button>
              <button class="btn btn-outline btn-success">Medicine</button>
              <button class="btn btn-outline btn-warning">Eye</button>
              <button class="btn btn-outline btn-error">Phycology</button>
            </div>
          </div>
        </div>
      </div>
      <div class="hero h-[80vh] mt-[-5rem] bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="./sci.svg" class="max-w-sm rounded-lg h-96" />
          <div>
            <h1 class="text-5xl font-bold">Medical Research</h1>
            <p class="py-10 font-mono text-lg break-all">
              We have the best research team who always works hard to give the
              best experience for our users.
            </p>
            <div className="flex flex-row gap-3">
              <button class="btn btn-outline btn-info">Chest</button>
              <button class="btn btn-outline btn-success">Medicine</button>
              <button class="btn btn-outline btn-warning">Eye</button>
              <button class="btn btn-outline btn-error">Phycology</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
