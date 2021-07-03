import { Component, OnInit, Inject } from '@angular/core';
import { FlightsDataService } from '../services/flights-data.service';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {

  constructor(private flightsData: FlightsDataService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  tabIndex = this.data.tab;

  ngOnInit(): void {
    // console.log(this.tabIndex)
  }

  selectedImage: any;
  showingImage:boolean=false;
  id = this.flightsData.RecommendationList.length;
  alerts: any[] = [];
  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0].name;
    this.selectedImage = '../../assets/images/' + this.selectedImage;
    this.showingImage = true;
   
    // console.log(this.selectedImage);
  }

  onSubmit(data:any){
    // console.log(data)
    // console.log(this.id);
    const listFromInput = [
      {
        id: this.id+1,
        imageLink: this.selectedImage,
        city: data.value.flight_to,
        price: data.value.flight_fare

      }
    ];
    if(this.tabIndex === 0){
      this.flightsData.RecommendationList.push(listFromInput[0]);
    }
    else if(this.tabIndex === 1){
      this.flightsData.BestSellerList.push(listFromInput[0]);
    }
    else{
      this.flightsData.FavouritesList.push(listFromInput[0]);
    }
    listFromInput.splice(0, listFromInput.length);
    data.resetForm(); 
    this.showingImage = false;
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'New Flight Successfully Added'
    });
    setTimeout(() => {
      this.closeAlert(this.alerts);
    }, 2000);
  } 
  closeAlert(alert: any) {
    this.alerts.splice(0, this.alerts.length);
  }

}
