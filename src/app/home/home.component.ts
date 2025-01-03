import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cases } from '../app.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: false
})
export class HomeComponent implements OnInit {
    url: string = '';
    contactId: string = '';
    guid: string = '';
    cases: Cases[] = [];
    clonedCases: { [s: string]: Cases } = {};

    dataParam: string = '';
    constructor(
        private http: HttpClient
    ) {

    }

    ngOnInit() {

        let context = Xrm.Utility.getGlobalContext();
        this.url = context.getClientUrl() + "/api/data/v9.0";
        // this.url = "https://garage-stage.crm4.dynamics.com/api/data/v9.0"
        const parameters = context.getQueryStringParameters();
        this.contactId = this.parseGuid(parameters['id']);
        this.getCases(this.contactId);
        const urlParams = new URLSearchParams(window.location.search);
        this.dataParam = urlParams.get('data') || '';

    }

    getCases(id: string): Promise<any> {
        const params = new HttpParams().set('$select', 'title,description,_primarycontactid_value')
            .set('$filter', `_primarycontactid_value eq ${id}`);
        return this.http.get(`${this.url}/incidents`, { params }).toPromise()
            .then((response: any) => {
                this.cases = response.value.map((item: any) => ({
                    title: item['title'],
                    description: item['description'],
                    id: item['incidentid']
                }));
            });

    }

    parseGuid(id: string) {
        if (id === null || id === 'undefined' || id === '') {
            return '';
        }
        id = id.replace(/[{}]/g, '');
        if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
            return id.toUpperCase();
        }
        else {
            throw Error("Id " + id + " is not a valid GUID");
        }

    }

}