import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Contact} from '../models/models';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';


@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {

    @Input() contact: Contact;
    loading: boolean = false;

    constructor(private modalController: ModalController, private socialSharing: SocialSharing) {
    }

    ngOnInit() {
    }

    close() {
        this.modalController.dismiss({
            dismissed: true
        });
    }

    async shareFacebook() {
        this.setLoading(true);
        this.socialSharing.shareViaFacebook('Te comparto este contacto', this.contact.image)
            .then(data => {
                console.log(data);
                this.setLoading(false);
            })
            .catch(er => {
                console.log(er);
                this.setLoading(false);
            });
    }

    async shareWhatsapp() {
        this.setLoading(true);
        this.socialSharing.shareViaWhatsApp('Te comparto este contacto', this.contact.image, this.contact.image)
            .then(data => {
                console.log(data);
                this.setLoading(false);
            })
            .catch(er => {
                console.log(er);
                this.setLoading(false);
            });
    }

    async shareInstagram() {
        this.setLoading(true);
        this.socialSharing.shareViaInstagram('Te comparto este contacto', this.contact.image)
            .then(data => {
                console.log(data);
                this.setLoading(false);
            })
            .catch(er => {
                console.log(er);
                this.setLoading(false);
            });
    }

    setLoading(state: boolean) {
        this.loading = state;
    }
}
