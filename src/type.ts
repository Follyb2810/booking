import { ReactNode } from "react";

export interface VoidProps {
    handleToggle:()=>void
}
export interface SocialAccountItem {
    name: string;
    // icon: ReactElement<typeof BsWhatsapp | typeof FaLinkedin>;
    icon: ReactNode;
    path: string;
  }

  export interface AboutDataProps  {
    title?:string,
    content?:string,
    tag?:string,
    Img?:string
  }
  export interface SkilDataType {
    id:number,
    name:string,
    level:string
  }
  export interface workDoneProps {
    id:number,
    title:string,
    description:string,
    technologies?:string[],
    year?:number,
  }
  export interface ServicesProps extends workDoneProps {
    icon:string
  }
  export interface SocialAccountProps {
    id:number,
    platform:string,
    link:string,
    icon:ReactNode
  }
  export interface ConsultantService {
    id: number;
    title: string;
    description: string;
  }
  
  export interface ConsultantCardProps {
    consultant: {
      name: string;
      services: ConsultantService[];
    };
  }

  export interface Client {
    id: number;
    name: string;
    image: string;
    details: string;
  }
  
 export interface ClientCardProps {
    client: Client;
  }