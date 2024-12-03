import { TestBed } from '@angular/core/testing';

import { PeticionService } from './peticion.service';
import { HttpClientModule } from '@angular/common/http';

describe('PeticionService', () => {
  let service: PeticionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[]
    });
    service = TestBed.inject(PeticionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Validar Una peticion POST', (done) => {
    const mokupUrl = "http://localhost:3000/usuarios/Registro"
    const mokuppayload = {}
    const mokupResponse = {state:false, mensaje:"el campo nombre es obligatorio"}


    service.Post(mokupUrl, mokuppayload).then((res:any)=>{
      expect(res).toEqual(mokupResponse)
      done()
    })

  })


  it('Validar Una peticion POST falla si mando solo el nombre', (done) => {
    const mokupUrl = "http://localhost:3000/usuarios/Registro"
    const mokuppayload = {nombre:"Javier"}
    const mokupResponse = {state:false, mensaje:"el campo email es obligatorio"}


    service.Post(mokupUrl, mokuppayload).then((res:any)=>{
      expect(res).toEqual(mokupResponse)
      done()
    })

  })



});
