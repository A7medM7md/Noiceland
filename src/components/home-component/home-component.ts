import { Component } from '@angular/core';
import { IPost } from '../../modules/ipost';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [RouterModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  PostsList: IPost[];
  LatestPostsList: IPost[];
  FeaturePostsList: IPost[];

  constructor() {
    this.LatestPostsList = [
      {
        url: "/posts/japan-house-opens",
        img: "assets/images/image-15.jpg",
        titleUrl: "/category/illustration",
        title: "Illustration",
        descUrl: "/posts/japan-house-opens",
        desc: "Japan House opens in mountainside to foster peak creativity. ",
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
        desc: "London-based Yinka Ilori's storytelling furniture",
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
        desc: "Suzanne Saroff's meticulously arranged photographs alter perceptions",
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
      }
    ]

    this.FeaturePostsList = [
      {
        url: "/posts/a-brief-history",
        img: "assets/images/image_large.jpg",
        titleUrl: "/category/graphic-design",
        title: "Graphic Design",
        descUrl: "/posts/japan-house-opens",
        desc: "A Brief History of the FIFA World Cup Logo",
        authorUrl: "/team-members/nels-armstrong",
        author: "Clem Onojeghuo"
      },
      {
        url: "/posts/la-design-guide",
        img: "assets/images/image-1.jpg",
        titleUrl: "/category/graphic-design",
        title: "Graphic Design",
        descUrl: "/posts/la-design-guide",
        desc: "Need a guide to LA's graphic design scene? Shoplifters' new issue has got your back",
        authorUrl: "/team-members/alessandra-ortiz",
        author: "Alessandra Ortiz"
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
        url: "/posts/mc-saatchi-fontsmith",
        img: "assets/images/image-3.jpg",
        titleUrl: "/category/illustration",
        title: "Illustration",
        descUrl: "/posts/mc-saatchi-fontsmith",
        desc: "M &amp;C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas",
        authorUrl: "/team-members/adonis-lueilwitz",
        author: "Annie Lueilwitz"
      }
    ]

    this.PostsList = [
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
      }
    ]

  }
}
