import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-appointment-calendar',
  standalone: true,
  imports: [],
  templateUrl: './appointment-calendar.component.html',
  styleUrl: './appointment-calendar.component.scss'
})

export class AppointmentCalendarComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    this.renderer.setAttribute(script, 'src', 'https://assets.calendly.com/assets/external/widget.js');
    this.renderer.setAttribute(script, 'type', 'text/javascript');
    this.renderer.setAttribute(script, 'async', 'true');
    this.renderer.appendChild(document.body, script);

    script.onload = () => {
      console.log('Calendly script loaded');
      setTimeout(() => this.initializeCalendlyWidget(), 100); // Delay initialization
    };

    script.onerror = () => {
      console.error('Error loading Calendly script');
    };
  }

  initializeCalendlyWidget() {
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/alexowensemail/30min?text_color=1c2b35&primary_color=2081c3',
        parentElement: document.querySelector('.calendly-inline-widget')
      });
    } else {
      console.error('Calendly library not found');
    }
  }
}