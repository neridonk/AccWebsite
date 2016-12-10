import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
/**
 * First lazy Loaded Component
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css'],
})
export class IndexComponent implements OnInit, AfterViewInit
{



  constructor() { }

  //done creating the component.
  ngOnInit()
  {

  }

  ngAfterViewInit()
  {
    jQuery('#pw1').parallax({
      imageSrc: 'http://blogmedia.avanade.com/avanade-insights/2015/07/Technology-Company.jpg'
    });

    jQuery('#pw2').parallax({
      imageSrc: 'http://media.cylex.de/companies/5014/761/images/1323602846-DATAFOX-EVO-2-8-imgZeit-Zutrittsterminal_404868_large.jpg',
      naturalWidth: 600,
      naturalHeight: 400
    });
  }


}
