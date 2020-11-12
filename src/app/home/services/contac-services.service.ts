import {Injectable} from '@angular/core';
import {Contact} from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class ContacService {

    contacts: Contact[];

    constructor() {
        this.contacts = [{
            id: 1,
            image: 'https://spoiler.bolavip.com/__export/1596120429620/sites/bolavip/img/2020/07/30/ester_exposito_video_viral_instagram_elite_serie_netflix_crop1596120427160.jpeg_1005196607.jpeg',
            name: 'Ester'
        }, {
            id: 2,
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Gal_Gadot_cropped_lighting_corrected_2b.jpg',
            name: 'Gal Gadot'
        }, {
            id: 3,
            image: 'https://www.merca2.es/wp-content/uploads/2019/07/Scarlett-Johansson-3.jpg',
            name: 'Scarlett'
        }, {
            id: 4,
            image: 'https://files.rcnradio.com/public/2018-06/paulina_vega_d_2_0.jpg',
            name: 'Paulinita'
        }];
    }

    findAll() {
        return this.contacts;
    }

    addContact(data: Contact) {
        this.contacts.push(data);
    }

}
