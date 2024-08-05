import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GallerySwiperComponent } from '../gallery-swiper/gallery-swiper.component';



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GallerySwiperComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GalleryComponent {
  webImages = [
    {
      imgSrc: "/gallery-images/website-rexburg-air-show.png",
      imgAlt: "Screenshot of the landing page of the Rexburg Air Show's website."
    },
    {
      imgSrc: "/gallery-images/website-madisonhealth.png",
      imgAlt: "Screenshot of the landing page of Madisonhealth's website."
    },
    {
      imgSrc: "/gallery-images/website-underdog.png",
      imgAlt: "Screenshot of the landing page of Underdog Kennels' website."
    },
    {
      imgSrc: "/gallery-images/website-rets.png",
      imgAlt: "Screenshot of the landing page of the Real Estate Tax Summit's website."
    }
  ]

  aiImages = [
    {
      imgSrc: "/gallery-images/ai-geo-mountain-01.png",
      imgAlt: "AI generated geometric mountain."
    },
    {
      imgSrc: "/gallery-images/ai-line-art-tetons-01.png",
      imgAlt: "AI generated line art of the grand tetons mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-line-art-tetons-02.png",
      imgAlt: "AI generated line art of the grand tetons mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-map-background-01.png",
      imgAlt: "AI generated line art of topographical map of mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-map-background-02.png",
      imgAlt: "AI generated line art of topographical map of mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-mountain-line-art-01.jpg",
      imgAlt: "AI generated minimalist line art of a mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-mountain-line-art-02.jpg",
      imgAlt: "AI generated minimalist line art of a mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-mountain-line-art-03.jpg",
      imgAlt: "AI generated minimalist line art of a mountain range."
    },
    {
      imgSrc: "/gallery-images/ai-tetons.webp",
      imgAlt: "AI generated line art of the grand tetons mountain range."
    }
  ]

  photoImages = [   
    {
      imgSrc: "/gallery-images/photo-aa-planthouse.JPG",
      imgAlt: "Photo of AA Planthouse, a plant shop I founded."
    },
    {
      imgSrc: "/gallery-images/photo-albo-syngonium.jpg",
      imgAlt: "Photo of a rare plant at AA Planthouse, a plant shop I founded."
    },
    {
      imgSrc: "/gallery-images/photo-cache-valley-vista.JPG",
      imgAlt: "Photo of the mountains of Cache Valley, Utah."
    },
    {
      imgSrc: "/gallery-images/photo-craters-of-the-moon-flowers.JPG",
      imgAlt: "Photo of rare spring time flowers at Craters of the Moon National Monument and Preserve."
    },
    {
    imgSrc: "/gallery-images/photo-deer.JPG",
    imgAlt: "Photo of a buck deer among pine trees, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-flowers.jpg",
      imgAlt: "Photo of a group of daisy flowers among pine trees, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-geyser-reflection.JPG",
      imgAlt: "Photo of runoff of water from a nearby geyser, reflecting the sky, in Yellowstone National Park."
    },
    {
      imgSrc: "/gallery-images/photo-grand-teton-peak-closeup.JPG",
      imgAlt: "Photo of a close up of the center peak, the Grand Teton, in Grand Tetons National Park"
      },
    {
    imgSrc: "/gallery-images/photo-horse.JPG",
    imgAlt: "Photo of a curious horse in St. Anthony, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-lab-dog.jpg",
      imgAlt: "Photo of a chocolate brown Labrador Retriever puppy among green grasses, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-landscape-mountain-01.jpg",
      imgAlt: "Photo of distant mountains from a field in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-mini-black-poodle.JPG",
      imgAlt: "Photo of a miniature black poodle outdoors."
    },
    {
      imgSrc: "/gallery-images/photo-mist-on-lake.jpg",
      imgAlt: "Photo of a mist on top of a lake, among pine trees, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-moth.JPG",
      imgAlt: "Photo of a vibrant colored moth, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-peacock.JPG",
      imgAlt: "Moody Photo of a saphire colored peacock among trees, in Idaho Falls, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-pelican.JPG",
      imgAlt: "Photo of a pelican floating on top of a lake, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-pond-with-swans-vista.JPG",
      imgAlt: "Photo of a family of swans among lily pads in a pond near Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-robins.jpg",
      imgAlt: "Photo of a robins among pine trees, in Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-swans.jpg",
      imgAlt: "Photo of a family of swans among lily pads in a pond near Island Park, Idaho."
    },
    {
      imgSrc: "/gallery-images/photo-tetons-at-sunset.JPG",
      imgAlt: "Photo of the Grand Teton Mountain Range within Grand Tetons National Park at sunset."
    }
    ,    {
      imgSrc: "/gallery-images/photo-tetons-cold-50.JPG",
      imgAlt: "Photo of the Grand Teton Mountain Range from Idaho at sunrise, while -50F Degrees."
    },

    {
      imgSrc: "/gallery-images/photo-winter-henrys-lake.JPG",
      imgAlt: "Photo of a father and daughter walking on the ice of Henry's Lake at winter time, in Island Park, Idaho. The backdrop is a gorgeous range of mountains covered in snow."
    },
    {
      imgSrc: "/gallery-images/photo-yellowstone-lake.JPG",
      imgAlt: "Photo of a beach shore of Yellowstone Lake among pine trees, in Yellowstone National Park."
    },
    {
      imgSrc: "/gallery-images/photo-yellowstone-madison-junction.JPG",
      imgAlt: "Photo of a Mountain Range within burned trees near Madison Junction in Yellowstone National Park"
    }
    ,    {
      imgSrc: "/gallery-images/photo-yellowstone-reflection.JPG",
      imgAlt: "Photo of geyser water's reflection of the cloudy sky in Yellowstone National Park"
    },
    {
      imgSrc: "/gallery-images/photo-yellowstone-river.JPG",
      imgAlt: "Photo of a majestic river and pine trees in Yellowstone National Park"
    },
    {
      imgSrc: "/gallery-images/photo-yellowstone-stream.JPG",
      imgAlt: "Photo of a windy stream in a pond area in Yellowstone National Park"
    }
    
  ]
}
