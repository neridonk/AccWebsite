import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
/**
 * First lazy Loaded Component
 */
@Component({
  moduleId: module.id,
  selector: 'sd-ScrollEx',
  templateUrl: 'scrollEx.component.html',
  styleUrls: ['scrollEx.component.css'],
})
export class ScrollExComponent implements OnInit, AfterViewInit
{



  constructor() { }

  //done creating the component.
  ngOnInit()
  {

  }

  ngAfterViewInit()
  {

    var $isAnimatedSecond = jQuery('.second .is-animated'),
      $isAnimatedSecondSingle = jQuery('.second .is-animated__single'),
      $isAnimatedThird = jQuery('.third .is-animated'),
      $isAnimatedThirdSingle = jQuery('.third .is-animated__single'),
      $isAnimatedFourth = jQuery('.fourth .is-animated'),
      $isAnimatedFourthSingle = jQuery('.fourth .is-animated__single');


    jQuery('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage'],
      sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
      scrollBar: true,
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['First page', 'Second page', 'Third and last page'],

      onLeave: function (index, nextIndex, direction)
      {

            // first animation
        if (index == 1 && nextIndex == 2)
        {
          $isAnimatedSecond.addClass('animated fadeInUpBig');
          $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
          $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
          $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
          $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
        }

         // second animation
        else if ((index == 1 || index == 2) && nextIndex == 3)
        {
          $isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s');
          $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
          $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
        }

        // third animation
        else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4)
        {
          $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
          $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
          $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function ()
          {
            $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
          });

    });
  }


}
