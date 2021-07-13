import { isDevMode } from '@angular/core';

export abstract class BaseService {
    protected base_url: string = '';
    protected base_controller_url: string = '';

    constructor() {
        this.setBaseUrl();
    }

    private setBaseUrl(): void {
        if (isDevMode()) {
          this.base_url = 'http://localhost:5000/api';
          //this.base_url = 'http://avian-bap-api.azurewebsites.net/api';
        } else {
          this.base_url = '';
        }
    }

    public setController(controller: string): void {
        this.base_controller_url = `${this.base_url}/${controller}`;
    }

    public endPoint(action: string = ''): string {
        return `${this.base_controller_url}/${action}`;
    }

    public endPointValue(action: string = '', value: string = ''): string {
        return `${this.base_controller_url}/${action}/${value}`;
    }
}
