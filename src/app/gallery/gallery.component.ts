import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GallerySwiperComponent } from '../gallery-swiper/gallery-swiper.component';
import { LightboxGalleryComponent } from '../lightbox-gallery/lightbox-gallery.component';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    GallerySwiperComponent,
    LightboxGalleryComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GalleryComponent {
  webImages = [
    {
      imgSrc: "/gallery-images/website-rexburg-air-show.webp",
      imgAlt: "Screenshot of the landing page of the Rexburg Air Show's website.",
      imgLink: "https://rexburg-air-show.vercel.app/"
    },
    {
      imgSrc: "/gallery-images/website-madisonhealth.webp",
      imgAlt: "Screenshot of the landing page of Madisonhealth's website.",
      imgLink: "https://madison-health-m33v0blhj-alex-owens-projects.vercel.app"
    },
    {
      imgSrc: "/gallery-images/website-underdog.webp",
      imgAlt: "Screenshot of the landing page of Underdog Kennels' website.",
      imgLink: "https://underdog-kennels.vercel.app/"
    },
    {
      imgSrc: "/gallery-images/website-rets.webp",
      imgAlt: "Screenshot of the landing page of the Real Estate Tax Summit's website.",
      imgLink: "https://real-estate-tax-summit.vercel.app/"
    }
  ]

  aiImages = [
    {
      imgSrc: "/gallery-images/ai-line-art-tetons-02.png",
      imgAlt: "AI generated line art of the grand tetons mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-map-background-01.webp",
      imgAlt: "AI generated line art of topographical map of mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-geo-mountain-01.png",
      imgAlt: "AI generated geometric mountain."
    },
    {
      imgSrc: "/gallery-images/ai-mountain-line-art-01.jpg",
      imgAlt: "AI generated minimalist line art of a mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-line-art-tetons-01.png",
      imgAlt: "AI generated line art of the grand tetons mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-tetons.webp",
      imgAlt: "AI generated line art of the grand tetons mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-map-background-02.png",
      imgAlt: "AI generated line art of topographical map of mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-mountain-line-art-03.jpg",
      imgAlt: "AI generated minimalist line art of a mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-mountain-line-art-02.jpg",
      imgAlt: "AI generated minimalist line art of a mountain range."
    }
  ]

  photoImages = [   
    {
      imgSrc: "/gallery-images/photo-mist-on-lake.jpg",
      imgAlt: "Photo of a mist on top of a lake, among pine trees, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-albo-syngonium.jpg",
      imgAlt: "Photo of a rare plant at AA Planthouse, a plant shop I founded."
    },
    {
      imgSrc: "/gallery-images/photo-yellowstone-river.webp",
      imgAlt: "Photo of a majestic river and pine trees in Yellowstone National Park"
    },
    {
      imgSrc: "/gallery-images/photo-swans.jpg",
      imgAlt: "Photo of a family of swans among lily pads in a pond near Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-winter-henrys-lake.webp",
      imgAlt: "Photo of a father and daughter walking on the ice of Henry's Lake at winter time, in Island Park, Idaho. The backdrop is a gorgeous range of mountains covered in snow."
    }, 
    {
      imgSrc: "/gallery-images/photo-deer-1.webp",
      imgAlt: "Photo of a buck deer among pine trees, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-yellowstone-stream.webp",
      imgAlt: "Photo of a windy stream in a pond area in Yellowstone National Park"
    },
    {
      imgSrc: "/gallery-images/photo-tetons-at-sunset.webp",
      imgAlt: "Photo of the Grand Teton Mountain Range within Grand Tetons National Park at sunset."
    },
    {
      imgSrc: "/gallery-images/photo-lab-dog.jpg",
      imgAlt: "Photo of a chocolate brown Labrador Retriever puppy among green grasses, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-grand-teton-peak-closeup.webp",
      imgAlt: "Photo of a close up of the center peak, the Grand Teton, in Grand Tetons National Park"
    },
    {
      imgSrc: "/gallery-images/photo-yellowstone-reflection.webp",
      imgAlt: "Photo of geyser water's reflection of the cloudy sky in Yellowstone National Park"
    },
    {
      imgSrc: "/gallery-images/photo-robins.jpg",
      imgAlt: "Photo of a robins among pine trees, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-peacock.webp",
      imgAlt: "Moody Photo of a saphire colored peacock among trees, in Idaho Falls, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-pelican.webp",
      imgAlt: "Photo of a pelican floating on top of a lake, in Island Park, Idaho."
    }, 
    {
      imgSrc: "/gallery-images/photo-cache-valley-vista.webp",
      imgAlt: "Photo of the mountains of Cache Valley, Utah."
    },
    {
      imgSrc: "/gallery-images/photo-aa-planthouse.webp",
      imgAlt: "Photo of AA Planthouse, a plant shop I founded."
    },  
    {
      imgSrc: "/gallery-images/photo-geyser-reflection.webp",
      imgAlt: "Photo of runoff of water from a nearby geyser, reflecting the sky, in Yellowstone National Park."
    },
    {
      imgSrc: "/gallery-images/photo-flowers.jpg",
      imgAlt: "Photo of a group of daisy flowers among pine trees, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-yellowstone-lake.webp",
      imgAlt: "Photo of a beach shore of Yellowstone Lake among pine trees, in Yellowstone National Park."
    },
    {
      imgSrc: "/gallery-images/photo-horse.webp",
      imgAlt: "Photo of a curious horse in St. Anthony, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-yellowstone-madison-junction.webp",
      imgAlt: "Photo of a Mountain Range within burned trees near Madison Junction in Yellowstone National Park"
    },
    {
      imgSrc: "/gallery-images/photo-landscape-mountain-01.jpg",
      imgAlt: "Photo of distant mountains from a field in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-tetons-cold-50.webp",
      imgAlt: "Photo of the Grand Teton Mountain Range from Idaho at sunrise, while -50F Degrees."
    }
    
  ]
}
