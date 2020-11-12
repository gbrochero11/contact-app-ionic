import {Component, OnInit} from '@angular/core';
import {Contact} from './models/models';
import {ModalController} from '@ionic/angular';
import {ContactFormComponent} from './contac-form/contact-form.component';
import {ContacService} from './services/contac-services.service';
import {ContactDetailsComponent} from './contact-details/contact-details.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    contacts: Contact[];

    constructor(private modalController: ModalController, private services: ContacService) {

    }

    ngOnInit(): void {
        this.contacts = this.services.findAll();
    }


    async addContact() {
        const modal = await this.modalController.create({
            component: ContactFormComponent,
            cssClass: 'my-custom-class'
        });
        return await modal.present();
    }

    async contactDetails(currentContact: Contact) {
        const modal = await this.modalController.create({
            component: ContactDetailsComponent,
            cssClass: 'my-custom-class',
            componentProps: {
                contact: currentContact
            }
        });
        return await modal.present();
    }


}
