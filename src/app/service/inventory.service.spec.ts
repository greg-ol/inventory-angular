import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { InventoryService } from "./inventory.service";
import { TestBed } from "@angular/core/testing";
import { provideHttpClient } from "@angular/common/http";
import { UpdateResponse } from "../models/inventory.models";

describe('inventory service', () => {

    let service: InventoryService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideHttpClientTesting()]
        });
        service = TestBed.inject(InventoryService);
        http = TestBed.inject(HttpTestingController);
    });

    afterEach(() => http.verify()); 

    it('post request for inventory update and returns response' , () => {
        const request = {items: [{name: 'Normal Item', sellIn: 3, quality: 20}], date: '2026-11-11', days: 1};

        const response: UpdateResponse = {
            inventoryDate: '2026-11-12', items: [{name: 'Normal Item', sellIn: 2, quality: 19}]
        }

        let received: UpdateResponse | undefined;
        service.updateInvewntory(request).subscribe(result => (received = result));

        const req = http.expectOne('/api/v1/inventory/updateinventory');
        expect(req.request.method).toBe('POST');
        expect(req.request.body).toEqual(request);
        req.flush(response);
        expect(received).toEqual(response);
    });
});