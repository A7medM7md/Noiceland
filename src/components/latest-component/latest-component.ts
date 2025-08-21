import { Component } from '@angular/core';
import { IPost } from '../../modules/ipost';

@Component({
  selector: 'app-latest-component',
  imports: [],
  templateUrl: './latest-component.html',
  styleUrl: './latest-component.css'
})
export class LatestComponent {
  LatestPosts: IPost[];
  constructor() {
    this.LatestPosts = [
      {
        url: "/posts/japan-house-opens",
        img: "assets/images/image-15.jpg",
        titleUrl: "/category/illustration",
        title: "Illustration",
        descUrl: "/posts/japan-house-opens",
        desc: "Japan House opens in mountainside to foster peak creativity.",
        authorUrl: "/team-members/reta-torphy",
        author: "Reta Torphy"
      },
      {
        url: "/posts/helmut-lang-celebrates",
        img: "assets/images/image-14.jpg",
        titleUrl: "/category/photography",
        title: "Photography",
        descUrl: "/posts/helmut-lang-celebrates",
        desc: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
        authorUrl: "/team-members/alessandra-ortiz",
        author: "Alessandra Ortiz"
      },
      {
        url: "/posts/bowlcut-launch-a-new-summer-collection",
        img: "assets/images/image-13.jpg",
        titleUrl: "/category/photography",
        title: "Photography",
        descUrl: "/posts/bowlcut-launch-a-new-summer-collection",
        desc: "Bowlcut launch a new summer collection that pays homage to “UK legends”",
        authorUrl: "/team-members/rosanna-ondricka",
        author: "Rosanna Ondricka"
      },
      {
        url: "/posts/thousands-of-previously-unseen-photographs",
        img: "assets/images/image-12.jpg",
        titleUrl: "/category/photography",
        title: "Photography",
        descUrl: "/posts/thousands-of-previously-unseen-photographs",
        desc: "Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
        authorUrl: "/team-members/adonis-lueilwitz",
        author: "Annie Lueilwitz"
      },
      {
        url: "/posts/yinka-ilori",
        img: "assets/images/image-11.jpg",
        titleUrl: "/category/interactive-design",
        title: "Interactive Design",
        descUrl: "/posts/yinka-ilori",
        desc: "London-based Yinka Ilori’s storytelling furniture",
        authorUrl: "/team-members/adonis-lueilwitz",
        author: "Annie Lueilwitz"
      },
      {
        url: "/posts/anonymous-israeli-art-collective",
        img: "assets/images/image-10.jpg",
        titleUrl: "/category/graphic-design",
        title: "Graphic Design",
        descUrl: "/posts/anonymous-israeli-art-collective",
        desc: "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
        authorUrl: "/team-members/simeon-brekke",
        author: "Simeon Brekke"
      },
      {
        url: "/posts/suzanne-saroff",
        img: "assets/images/image-9.jpg",
        titleUrl: "/category/architecture",
        title: "Architecture",
        descUrl: "/posts/suzanne-saroff",
        desc: "Suzanne Saroff’s meticulously arranged photographs alter perceptions",
        authorUrl: "/team-members/reta-torphy",
        author: "Reta Torphy"
      },
      {
        url: "/posts/anu-ambasna",
        img: "assets/images/image-8.jpg",
        titleUrl: "/category/graphic-design",
        title: "Graphic Design",
        descUrl: "/posts/anu-ambasna",
        desc: "Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches",
        authorUrl: "/team-members/leopoldo-bartell",
        author: "Leo Bartell"
      },
      {
        url: "/posts/rudy-guedj",
        img: "assets/images/image-7.jpg",
        titleUrl: "/category/interactive-design",
        title: "Interactive Design",
        descUrl: "/posts/rudy-guedj",
        desc: "Rudy Guedj’s design work sits between “figurative motives and their abstracted representations”",
        authorUrl: "/team-members/albin-waters",
        author: "Simeon Peterson"
      },
      {
        url: "/posts/how-alex-prager",
        img: "assets/images/image-6.jpg",
        titleUrl: "/category/interactive-design",
        title: "Interactive Design",
        descUrl: "/posts/how-alex-prager",
        desc: "How Alex Prager made the world stop and stare",
        authorUrl: "/team-members/misty-legros",
        author: "Michal Legros"
      },
      {
        url: "/posts/new-platform-holdframe",
        img: "assets/images/image-5.jpg",
        titleUrl: "/category/animation",
        title: "Animation",
        descUrl: "/posts/new-platform-holdframe",
        desc: "New platform Holdframe offers animators’ full project files for others to download and explore",
        authorUrl: "/team-members/simeon-brekke",
        author: "Simeon Brekke"
      },
      {
        url: "/posts/july-things",
        img: "assets/images/image-4.jpg",
        titleUrl: "/category/miscellaneous",
        title: "Miscellaneous",
        descUrl: "/posts/july-things",
        desc: "No balls, all books: it’s July Things!",
        authorUrl: "/team-members/rosanna-ondricka",
        author: "Rosanna Ondricka"
      },
      {
        url: "/posts/mc-saatchi-fontsmith",
        img: "assets/images/image-3.jpg",
        titleUrl: "/category/illustration",
        title: "Illustration",
        descUrl: "/posts/mc-saatchi-fontsmith",
        desc: "M & C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas",
        authorUrl: "/team-members/adonis-lueilwitz",
        author: "Annie Lueilwitz"
      },
      {
        url: "/posts/fred-rowson",
        img: "assets/images/image-2.jpg",
        titleUrl: "/category/photography",
        title: "Photography",
        descUrl: "/posts/fred-rowson",
        desc: "Fred Rowson directs film for Years and Years",
        authorUrl: "/team-members/coby-gottlieb",
        author: "Coby Gottlieb"
      },
      {
        url: "/posts/la-design-guide",
        img: "assets/images/image-1.jpg",
        titleUrl: "/category/graphic-design",
        title: "Graphic Design",
        descUrl: "/posts/la-design-guide",
        desc: "Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back",
        authorUrl: "/team-members/alessandra-ortiz",
        author: "Alessandra Ortiz"
      },
      {
        url: "/posts/a-brief-history",
        img: "assets/images/image_large.jpg",
        titleUrl: "/category/graphic-design",
        title: "Graphic Design",
        descUrl: "/posts/a-brief-history",
        desc: "A Brief History of the FIFA World Cup Logo",
        authorUrl: "/team-members/nels-armstrong",
        author: "Clem Onojeghuo"
      }
    ]
  }
}
