import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  catalogoGrupos = [{
      titulo: "Bella Ciao",
      imagen: "../../assets/img/grupo1.jpg",
      grupo: "Modena City Ramblers",
      video: "../../assets/img/bella_ciao.mp4",
    },
    {
      titulo: "Humo",
      imagen: "../../assets/img/grupo2.jpg",
      grupo: "Jarabe de Palo",
      video: "../../assets/img/humo.mp4" 
    },
    {
      titulo: "Friday i'm in Love",
      imagen: "../../assets/img/grupo3.jpg",
      grupo: "The Cure",
      video: "../../assets/img/the_cure.mp4" 
    } ,{
      titulo: "Chan Chan",
      imagen: "../../assets/img/grupo4.jpg",
      grupo: "Buena Vista Social Club",
      video: "../../assets/img/chan_chan.mp4"
    },
    {
      titulo: "Guantanamera",
      imagen: "../../assets/img/grupo5.jpg",
      grupo: "Compay Segundo",
      video: "../../assets/img/guantanamera.mp4"
    },
    {
      titulo: "Pastillas de Freno",
      imagen: "../../assets/img/grupo6.jpg",
      grupo: "Estopa",
      video: "../../assets/img/pastillas_de_freno.mp4"
    },
   ]



  constructor() {}

}
