import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlAlgoritmo = "https://b63e-189-240-194-242.ngrok.io/api/recomendaciones";
  private urlWeb = "http://192.168.100.2:5000/api/";

  constructor(private http: HttpClient){}

  recomendaciones() {
    return this.http.get(`${this.urlAlgoritmo}`);
  }
}
