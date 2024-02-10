import { consultantsData } from "../../constant";
import Template from "../Shared/Template";

const Service = () => {
  return (
    <Template subTitle="Service" title="Service">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4" id="service">
        {consultantsData.map((service) => (
          <div key={service.id} className="flex items-center mb-2 p-4 border border-gray-300 rounded">
            <div>
              <p className="text-base font-semibold">{service.title}</p>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Template>
  );
};

export default Service;
