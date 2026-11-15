import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { UpdateRequest, UpdateResponse } from "../models/inventory.models";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class InventoryService {

    private readonly httpService = inject(HttpClient);
    private readonly url = '/api/v1/inventory/updateinventory'

    updateInvewntory(request: UpdateRequest): Observable<UpdateResponse> {
        return this.httpService.post<UpdateResponse>(this.url, request);
    }
}