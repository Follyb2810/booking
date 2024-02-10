
import Template from '../Shared/Template'
import { clientsData } from '../../constant'
import { Navigate } from "react-router-dom";

const Portfolio = () => {
    return (
        <Template subTitle='client work with' title='Portfolio'>
            
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {clientsData.map((client) => (
         <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8" onClick={()=><Navigate to={`/${client.id}`} replace={true} />}>
         <img src={client.image} alt={client.name} className="w-full h-32 object-cover" />
         <div className="px-6 py-4">
           <div className="font-bold text-xl mb-2">{client.name}</div>
           <p className="text-gray-700 text-base">{client.details}</p>
         </div>
       </div>
        ))}
      </div>
        </Template>
    )
}

export default Portfolio
