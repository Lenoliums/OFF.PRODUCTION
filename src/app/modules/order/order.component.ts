import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { YmService } from 'src/app/shared/services/yandex-metrica/ym.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-order',
    templateUrl: 'order.component.html',
    styleUrls: ['order.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, NgxMaskModule, HttpClientModule],
    providers: [YmService]
})

export class OrderPageComponent {
    private http = inject(HttpClient);

    constructor(private ymService: YmService){}

    public orderForm = new FormGroup({
        phone: new FormControl("", [Validators.required, Validators.pattern("[0-9]{10}")]),
        name: new FormControl("", Validators.required),
        checkboxPolicy: new FormControl(false, Validators.requiredTrue),
        checkboxAds: new FormControl(false),
    });

    protected async submit() {
        const respons = await this.http.get('https://api.telegram.org/bot7222790815:AAGC2Xn4SJ4ew_lFYgeCY1KLCpVvnzz4VMA/getUpdates').subscribe(console.log);
        if (this.orderForm.valid) {
            try {
                const formData = {
                    phone: this.orderForm.get('phone')?.value,
                    name: this.orderForm.get('name')?.value,
                    url: window.location.href,
                    adsArgeement: this.orderForm.get('checkboxAds')?.value
                };

                const response = await this.http.post('/.netlify/functions/telegram-form', formData).toPromise();
                
                console.log('Данные отправлены в Telegram:', response);
                
                this.ymService.reachGoal('order-Submit');
                
                this.orderForm.reset();
                alert('Ваша заявка отправлена!');
                
            } catch (error) {
                console.error('Ошибка при отправке:', error);
                alert('Произошла ошибка при отправке заявки');
            }
        }
    }
}