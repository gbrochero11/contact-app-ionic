import {Component, OnInit} from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import {Contact} from '../models/models';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ContacService} from '../services/contac-services.service';

@Component({
    selector: 'app-contac-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {

    contact: Contact;

    constructor(private modalController: ModalController, private camera: Camera,
                private toast: ToastController, private service: ContacService) {
        this.contact = {image: 'https://img.icons8.com/pastel-glyph/2x/person-male.png'};
    }

    ngOnInit() {
    }

    close() {
        this.modalController.dismiss({
            dismissed: true
        });
    }

    async openCamera() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            this.contact.image = 'data:image/jpeg;base64,' + imageData;
        }, async (err) => {
            await this.showToast('Ha ocurrido un error', 1000);
        });
    }

    async saveContact() {
        await this.service.addContact(this.contact);
        this.close();
    }

    async showToast(text, time) {
        const toast = await this.toast.create({
            message: text,
            duration: time
        });
        await toast.present();
    }
}
