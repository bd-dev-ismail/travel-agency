
import { FaCalendarAlt, FaRegMoneyBillAlt, FaUsers, IconName } from "react-icons/fa";
const TourInformation = () => {
    return (
      <div>
        <div>
          <h3 className="text-4xl">Austria, Swizerland</h3>
          <p className="text-gray-700">
            {" "}
            <span className="text-primary"> $560</span> per person
          </p>
        </div>
        <div>
          <p className="text-gray-700">
            This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor,
            nisi elit consequat ipsum, nec sagittis sem nibh id elit. vulputate
            cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
            a odio tincidunt auctor a ornare. Sed non mauris vitae erat
            consequat auctor eu in elit. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Mauris in erat
            justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.
            Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
            fermentum nuam pharetra, erat sed fermentum feugiat, velit mauris
            egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci
            enim. neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
            nuam pharetra, erat sed fermentum feugiat neque elit. Sed ut
            imperdiet nisi. Proin condimentum fermentum nuam pharetra, erat sed
            fermentum feugiat
          </p>
        </div>
        <div>
          <div className="flex items-center text-gray-700">
            <FaCalendarAlt className="mr-1 text-primary" />
            <p>13 Days</p>
          </div>
          <div className="flex items-center text-gray-700">
            <FaUsers className="mr-1 text-primary" />
            <p>5+ Age</p>
          </div>
          <div className="flex items-center text-gray-700">
            <FaRegMoneyBillAlt className="mr-1 text-primary" />
            <p>On Budget</p>
          </div>
          <div className="flex items-center text-gray-700">
            <FaCalendarAlt className="mr-1 text-primary" />
            <p>13 Days</p>
          </div>
        </div>
      </div>
    );
};

export default TourInformation;