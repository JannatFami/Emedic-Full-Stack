import { Carosule } from "../../components/Carosule/Carosule";
import { Contact } from "../../components/Contact/Contact";
import { Explanation } from "../../components/Explanation/Explanation";
import { Faq } from "../../components/Faq/Faq";
import { Hero } from "../../components/Hero/Hero";

export const Homepage = () => {
  return (
    <>
      <Carosule />
      <Explanation />
      <Hero />
      <Contact />
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">An user successfully logout</h3>
          <div class="modal-action">
            <label for="my-modal" class="btn">
              OK
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
