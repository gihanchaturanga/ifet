import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  // For image slider
  _imgList: string[] = ["https://wallpapercave.com/wp/wp4385860.jpg",
    "https://www.njacac.org/wp-content/uploads/NJACAC-Blog-Post-Images-College-Key-NFP.jpg",
    "https://wallpaperaccess.com/full/8111956.jpg",
    "https://www.wallpapertip.com/wmimgs/49-493380_students-images-hd-png.jpg",
    "https://kosherinparis.com/wp-content/uploads/2019/06/Se%CC%81jour-spe%CC%81cial-e%CC%81tudiant.jpg"
  ];
  _slider: HTMLElement | null = document.getElementById("section");
  _count: number = 3;

  // For fade-in fade-out animations
  opacity: number = 0;

  ngOnInit(): void {
    this.imageSlider();
  }

  imageSlider() {
    setInterval(() => {
      this._slider = document.getElementById("section");
      if (this._count <= 5 && this._slider != null) {
        this._slider.style.backgroundImage = "url('" + this._imgList[this._count - 1] + "')";
        console.log(this._count);
        this._count++;
        if (this._count == 6) {
          this._count = 1;
        }
      } else {
        console.log("count: " + this._count + " Null.....");
      }
    }, 5000);
  }

  fadeOut(img: HTMLElement) {
    let intervalId:any;
    intervalId = setInterval((img) => {
      this.opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
      if (this.opacity > 0) {
        this.opacity = this.opacity - 0.1;
        img.style.opacity = this.opacity + "";
        console.log(this.opacity);
      } else {
        clearInterval(intervalId);
      }
    }, 2000);
  }

  fadeIn(img: HTMLElement) {
    let intervalId:any;
    intervalId = setInterval((img) => {
      this.opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
      if (this.opacity < 1) {
        this.opacity = this.opacity + 0.1;
        img.style.opacity = this.opacity + "";
        console.log(this.opacity);
      } else {
        clearInterval(intervalId);
      }
    }, 2000);
  }

  hide(img: HTMLElement) { }
}
