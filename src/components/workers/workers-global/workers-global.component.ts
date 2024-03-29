import { Component } from '@angular/core';
import { WorkersListService } from '../../../services/workers-list.service';
import { UpdateWorkerDetailsService } from '../../../services/update-worker-details.service';

@Component({
  selector: 'app-workers-global',
  templateUrl: './workers-global.component.html',
  styleUrls: ['./workers-global.component.css']
})
export class WorkersGlobalComponent {
  workers: any = { data: [] };
  currentDate: Date;

  constructor(
    private WorkersListService: WorkersListService,
    private UpdateWorkerDetailsService: UpdateWorkerDetailsService
  ) {
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.WorkersListService.getFreeWorkers()
      .subscribe((data) => {
        this.workers = data;
      });
  }

  calculateTimeBeforeEnd(endDate: string): string {
    const endDateTime = new Date(endDate).getTime();
    const currentDateTime = new Date(this.currentDate).getTime();

    // Calcul du temps restant en millisecondes
    const timeRemainingMillis = endDateTime - currentDateTime;

    // Conversion en secondes, minutes, heures et jours
    const seconds = Math.floor(timeRemainingMillis / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Calcul du reste pour chaque unité
    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;
    const remainingHours = hours % 24;

    // Création de la chaîne de temps restant
    const timeRemainingString =
      (days > 0 ? days + ' jours ' : '') +
      (hours > 0 ? remainingHours + ' heures ' : '') +
      (minutes > 0 ? remainingMinutes + ' minutes ' : '');

    return timeRemainingString;
  }

  isWorking(endDate: string): boolean {
    return new Date(endDate) > this.currentDate;
  }

  formatDateTime(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
    const formattedDate = new Date(dateString).toLocaleString('fr-FR', options);
    return formattedDate;
  }

  updateWorkerDetails(worker: any): void {
    let { days, hours, minutes, context } = worker;
    if (!context) {
      console.error('Le champ "context" est obligatoire.');
      return;
    }
    if (!days)days=0
    if (!hours)hours=0
    if (!minutes)minutes=0
    const newWorkEnd = this.calculateNewWorkEnd(days, hours, minutes);
    const newWorkContext = worker.context;  // Ajoutez ceci si vous avez également un champ 'context'

    this.UpdateWorkerDetailsService.updateWorkerDetails(worker.worker_id, newWorkContext, newWorkEnd)
      .subscribe(() => {
        // Mettez à jour les données après la mise à jour réussie si nécessaire
        this.WorkersListService.getFreeWorkers()
          .subscribe((data) => {
            this.workers = data;
          });
      });
  }

  calculateNewWorkEnd(days: number, hours: number, minutes: number): string {
    // Vérifier que days, hours et minutes sont des nombres valides
    if (isNaN(days) || isNaN(hours) || isNaN(minutes)) {
      console.error('Invalid input for days, hours, or minutes');
      return ''; // Ou retournez une valeur par défaut
    }

    // Cloner la date actuelle pour ne pas modifier la date originale
    const newWorkEnd = new Date(this.currentDate.getTime());

    // Ajouter les jours, heures et minutes
    newWorkEnd.setDate(newWorkEnd.getDate() + days);
    newWorkEnd.setHours(newWorkEnd.getHours() + hours);
    newWorkEnd.setMinutes(newWorkEnd.getMinutes() + minutes);

    // Formater la nouvelle date selon le format souhaité
    const formattedDate = this.formatDate(newWorkEnd);

    // Retourner la nouvelle date
    return formattedDate;
  }

// Fonction pour formater la date selon le modèle "YYYY-MM-DD HH:mm:ss"
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = this.padNumber(date.getMonth() + 1); // Mois est 0-indexé, donc ajoutez 1
    const day = this.padNumber(date.getDate());
    const hours = this.padNumber(date.getHours());
    const minutes = this.padNumber(date.getMinutes());
    const seconds = this.padNumber(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

// Fonction pour ajouter un zéro devant les chiffres < 10
  private padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

}
