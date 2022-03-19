import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlAlgoritmo = "http://172.16.15.77:5000/recomendaciones";
  private urlWeb = "http://192.168.100.2:5000/api/";

  constructor(private http: HttpClient){}

  recomendaciones() {
    return this.http.get(`${this.urlAlgoritmo}`);
  }
}
