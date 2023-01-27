import { Component, OnInit} from '@angular/core';
import { interval, fromEvent, merge, empty, Observable, map, combineLatest, BehaviorSubject,  } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo, take,  } from 'rxjs/operators';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveXJS';




  constructor(private UsersService: UsersService) { }

  public ngOnInit(): void {
    const resultadoContainer = document.getElementById('resultado') as HTMLElement;
    const sumando1Input = document.getElementById('campo1') as HTMLInputElement;
    const sumando2Input = document.getElementById('campo2') as HTMLInputElement;

    function origenValores(input: HTMLInputElement): Observable<number> {
      return fromEvent(input, 'input').pipe(
        map((event: any) => (event.target as HTMLInputElement).value),
        startWith(input.value),
        map(Number),
      )
    }

    const cambioSumando1 : Observable<number> =
      origenValores(sumando1Input);
    const cambioSumando2 : Observable<number> =
      origenValores(sumando2Input);

    const result = combineLatest(
      [cambioSumando1, cambioSumando2],
      (sum1, sum2) => sum1 + sum2
    )

    result.subscribe((result) => {resultadoContainer.textContent = `${result}`});

  const nombresIniciales:string[] = []

    const inputFiltro = document.getElementById('inputFiltro') as HTMLInputElement;
    const agregarNombreBoton = document.getElementById('agregarNombre') as HTMLButtonElement;
    const ordenarBoton = document.getElementById('ordenarBoton') as HTMLButtonElement;

    const tablaNombre = new BehaviorSubject<string[]>(nombresIniciales);

    const filtroCambioValores = fromEvent(inputFiltro, 'input').pipe(
        map(({target}: any) => (target as HTMLInputElement )?.value),
        startWith(inputFiltro.value)
      );


    const cambioOrden = fromEvent(ordenarBoton, 'click').pipe(
      startWith("ASC"),
      scan<any, sortOrder>((acc) => acc === "ASC" ? "DESC" : "ASC", "ASC")
    )


    this.UsersService.getUsers().subscribe(res => {
      console.log(res);

    })
  }
}

