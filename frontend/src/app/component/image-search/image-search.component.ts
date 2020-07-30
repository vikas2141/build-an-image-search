import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.scss']
})
export class ImageSearchComponent implements OnInit {

  imageForm: FormGroup;
  imglist: any;
  filterData: any;
  items: any[] = [];
  pageSize: any;
  pageNumber: any;
  paginatedData: any[] = []

  constructor(
    private _imageService: ImageService,
    private _router: Router
  ) {
    this.filterData = [];
    this.pageSize = 2;
    this.pageNumber = 1
  }

  ngOnInit() {
    this.getImage(this._router.url);
  }

  getImage(pageUrls) {
    this._imageService.getImage(pageUrls).subscribe(data => {
      console.log('this is the data:', data)
      this.imglist = data
      this.filterData = this.imglist;
      this.onPagination(this.filterData);
      this.getItemsAsPerPageNumber(event, this.pageNumber)
    })

  }
  onSerClick(event) {
    this.filterData = this.imglist.filter(img => img.altText.startsWith(event.target.value))
    this.onPagination(this.filterData);
    this.getItemsAsPerPageNumber(event, this.pageNumber)  
  }
  onPagination(list) {
    this.items = []
    for (let i = 1; i <= Math.ceil(list.length / this.pageSize); i++) {
      this.items.push(i)
    }
  }

  getItemsAsPerPageNumber(event, pageNumber) {
    if (event)
      event.preventDefault();
    let startIndex = (pageNumber - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize
    this.paginatedData = this.filterData.slice(startIndex, endIndex)
  }

  onPreClick(event){
    event.preventDefault()
    if(this.pageNumber>1){
      this.pageNumber--
      this.getItemsAsPerPageNumber(event, this.pageNumber)
    }
  }

  onNextClick(event){
    event.preventDefault()
    if(this.pageNumber<Math.ceil(this.filterData.length/this.pageSize)){
      this.pageNumber++
      this.getItemsAsPerPageNumber(event, this.pageNumber)
    }

  }

}