import{o as a,c as b,w as o,r as x,a as S,b as i,F as f,d as _,t as r,e,f as t,g as n,C as v,h as w,_ as y,u}from"./index.d8ee7cec.js";const l={__name:"Subheading",props:{as:{type:String,default:"h1"},size:{type:String,default:"xl"}},setup(s){return(m,c)=>(a(),b(S(s.as),{class:"text-xl text-neutral-600 mb-5"},{default:o(()=>[x(m.$slots,"default")]),_:3}))}},k={class:"pl-5 md:pl-0 list-disc"},h={__name:"List",props:["data"],setup(s){return(m,c)=>(a(),i("ul",k,[(a(!0),i(f,null,_(s.data,d=>(a(),i("li",{class:"font-serif text-neutral-500",key:d},r(d),1))),128))]))}},D={class:"mb-20 md:mb-20 md:pb-20 px-10 md:pt-0 md:border-b border-neutral-400"},L={class:"md:flex"},M=e("div",{class:"hidden md:block w-2/6"},"\xA0",-1),P={class:"w-full md:w-2/6 md:flex md:justify-end md:pr-5"},A={class:"hidden md:block md:w-2/6 pl-5"},C={class:"flex pt-5 border-neutral-400"},I=e("div",{class:"hidden md:block w-2/6"},"\xA0",-1),j={class:"w-full md:w-3/6 md:flex"},H={key:0,class:"md:w-1/2 md:pr-10"},T=n("Projects"),R={class:"pl-5 md:pl-0 list-disc"},$={key:1,class:"w-full md:w-1/2 md:pl-5"},J=n("Technology"),K={class:"pl-5 md:pl-0 list-disc"},V=e("div",{class:"hidden md:block w-1/6 pl-5"}," \xA0 ",-1),F={__name:"ExperienceItem",props:["company","title","year","location","description","projects","tech"],setup(s){return(m,c)=>(a(),i("div",D,[e("div",L,[M,e("div",P,[e("div",null,[t(l,{as:"h3",class:"md:text-right"},{default:o(()=>[e("b",null,r(s.company),1),n(" \u2013 "+r(s.title),1)]),_:1}),t(v,{class:"text-justify"},{default:o(()=>[n(r(s.description),1)]),_:1})])]),e("div",A,[t(l,{as:"aside",class:"text-yellow-600"},{default:o(()=>[n(r(s.year),1)]),_:1}),t(v,{class:"text-yellow-600"},{default:o(()=>[e("em",null,r(s.location),1)]),_:1})])]),e("div",C,[I,e("div",j,[s.projects&&s.projects.length?(a(),i("div",H,[t(l,{as:"h4",class:""},{default:o(()=>[T]),_:1}),e("ul",R,[(a(!0),i(f,null,_(s.projects,d=>(a(),i("li",{class:"font-serif text-neutral-500 mb-5",key:d},r(d),1))),128))])])):w("",!0),s.tech&&s.tech.length?(a(),i("div",$,[t(l,{as:"h4",class:""},{default:o(()=>[J]),_:1}),e("ul",K,[(a(!0),i(f,null,_(s.tech,d=>(a(),i("li",{class:"font-serif text-neutral-500 mb-2",key:d},r(d),1))),128))])])):w("",!0)]),V])]))}},N={infrastructure:["Kubernetes, Helm, Docker","Terraform, Ansible","Teleport, Keycloak","Linux, Bash","AWS"],web:["React, Vue, Angular, StencilJS","Keystone, Strapi, Contentful","NextJS, Nuxt, ExpressJS","Wordpress, Laravel","Flask, Django, Falcon"],data:["Dremio, Minio/S3, SQL, Elastic","Parquet, Spark, Ray","Luigi, Airflow, Kubeflow, DBT","Kafka, Redis, RabbitMQ","Jupyter, SciPy, Pandas, NLP","Superset, Dash, Plotly, D3"],tools:["Python, Javascript, PHP","Git / Version Control","VSCode, Vim","Sketch, XD, Zeplin"]},B=[{company:"HLK",title:"Technical Integration Director",year:"2022",location:"St. Louis, MO",description:"The Technical Integration Director role at HLK was an extention of my work as Sr. Technology lead. I worked on technical and process-oriented solutions to aid cross-team collaboration. I helped define standards and best practices for developers and product owners along with efficient methods of cooperation between the technology team and other departments at HLK.",projects:["Helped define processes and tools for collaboration between the Technology team and other departments at HLK","Designed tools for automating local environment set up for HLK's Data Solutions team, which worked with a diverse and complex set of technology platforms"],tech:["Git / Version Control","Postgres, MongoDB, MySQL","Python, Jupyter, Airflow, Dask, Ray","Kubernetes, Helm, Harbor, Docker, Terraform","Dremio, Minio/S3, Kafka, Redis, RabbitMQ","Keycloak, Teleport"]},{company:"HLK",title:"Sr. Technology Lead",year:"2018 - 2022",location:"St. Louis, MO",description:"As Sr. Technology Lead, I supported teams of developers, product owners, and designers for multiple clients and projects. I made planning and implementation decisions about technical approach, application design and architecture, tooling, and integration / code use across projects. I worked in a wide variety of technology platforms and disciplines, from data engineering to server-side and frontend development.",projects:["Designed and developed an API framework that reads data from any SQL database and automatically generates filterable, sortable REST endpoints with configurable resource- and role-based authenication","Implemented reusable cross-project solutions for complex user interfaces using React, Vue, and Stencil","Assisted HLK's Data Solutions team in building data pipelines, completing data transformation tasks, and improving cross-team infrastructure and processes"],tech:["Git / Version Control","Postgres, MongoDB, MySQL","Python, Jupyter, Airflow, Dask, Ray","Kubernetes, Helm, Harbor, Docker, Terraform","Dremio, Minio/S3, Kafka, Redis, RabbitMQ","Javascript, NodeJS","Vue, React, Stencil, Web Components","HTML, CSS, CSS preprocessors, Frontend build tools"]},{company:"HLK",title:"Sr. Developer",year:"2016 - 2018",location:"St. Louis, MO",description:"As Sr. Developer, I developed websites and web applications for a wide range of clients. I worked in a wide range of corporate and open-source CMS platforms, frontend frameworks, and server-side technologies.",projects:["Developed websites and web applications for clients such as Bayer and Marriott","Developed APIs, UI design systems, etc."],tech:["Wordpress","Javascript, NodeJS","Vue, React","HTML, CSS, CSS preprocessors","Frontend build tools, Webpack, Rollup"]},{company:"Response Marketing",title:"Sr. Developer",year:"2015 - 2016",location:"New Haven, CT",description:"At Response Marketing, I led the design and development of a custom platform for creating and maintaining complex marketing websites. Using the platform, I developed applications for numerous clients including Guess Watches, Intel Security / McAfee, Avi Networking, and REAN Cloud",projects:["Built a JSON API-driven platform for creating, deploying, and maintaining highly customizable marketing websites quickly and easily"],tech:["Git / Version Control","MySQL, PostgreSQL, MongoDB","Python, PHP, Javascript","Flask (Python MVC Framework)","VueJS (Frontend JS Framework), AngularJS","Express (JS MVC Framework)","Mocha/Karma, py.test","HTML, Css, Sass","Nginx, Apache","Photoshop, Illustrator, AdobeXD, Sketch, Invision"]},{company:"Partisan Records",title:"Freelance Developer",year:"2015",location:"New York, NY",description:"For Partisan Records, I developed interactive applications and websites to advertise record releases.",projects:["Built a custom javascript application that allowed users to remix audio, video, and animated graphics from Sylvan Esso's album 'HSKT'. Users could record and share their creations on social media.","Developed a javascript application that would gather instagram videos with a specific hashtag, manipulate them, and combine them with cover artwork for Heartless Bastards's release 'Restless Ones' in a digital collage/double exposure effect."],tech:["Git / Version Control","MySQL","Python, Javascript","Flask (Python MVC Framework)","AngularJS (Frontend JS Framework)","HTML, Css, Sass","Nginx, Apache","Atom","Photoshop, Illustrator"]},{company:"Atomicdust",title:"Web Developer",year:"2012 - 2015",location:"St. Louis, MO",description:"At Atomicdust I developed websites, single page web applications, and worked on server-side architecture to feed iOS apps. I also built and maintained a deployment framework for Atomicdust Wordpress sites.",projects:[],tech:[]}];var g={expertise:N,experience:B};const E={class:"w-full mx-auto pt-52"},Q={class:"flex px-10 md:px-0"},W=e("div",{class:"hidden md:block w-1/6"},"\xA0",-1),O={class:"w-full md:w-3/6 md:flex md:justify-end md:pr-5"},G=n("Expertise"),U=e("div",{class:"hidden md:block w-2/6 pl-5"},"\xA0",-1),q={class:"pb-10 mb-20 border-neutral-400"},z={class:"container mx-auto md:flex px-10 md:px-0"},X={class:"md:w-1/4 md:flex justify-around pb-5 md:pb-0"},Y=n("Languages & Tools"),Z={class:"md:w-1/4 md:flex justify-around pb-5 md:pb-0"},ee=n("Web Development"),te={class:"md:w-1/4 md:flex justify-around pb-5 md:pb-0"},se=n("Data Engineering"),oe={class:"md:w-1/4 md:flex justify-around pb-5 md:pb-0"},ae=n("Infrastructure"),ne={class:"flex px-10 md:px-0"},ie=e("div",{class:"hidden md:block w-1/6"},"\xA0",-1),de={class:"w-full md:w-3/6 md:flex md:justify-end md:pr-5"},re=n("Experience"),le=e("div",{class:"hidden md:block w-2/6 pl-5"},"\xA0",-1),ce={class:"mb-40 px-10 md:px-0"},pe={class:"flex md:px-0"},me=e("div",{class:"hidden md:block w-1/6"},"\xA0",-1),ue={class:"w-full md:w-3/6 md:flex md:justify-end md:pr-5"},he=n("Education"),fe=e("div",{class:"hidden md:block w-2/6 pl-5"},"\xA0",-1),_e={class:"flex md:px-0"},ye=e("div",{class:"hidden md:block w-1/6"},"\xA0",-1),ve={class:"w-full md:w-3/6 md:flex md:justify-end md:pr-5"},we=n("Washintgon University in St. Louis, BFA in Printmaking 2007"),ge=e("div",{class:"hidden md:block w-2/6 pl-5"},"\xA0",-1),Se={__name:"ResumeView",setup(s){const m=g.experience,c=g.expertise;return(d,be)=>(a(),i("main",null,[e("div",E,[e("div",Q,[W,e("div",O,[t(y,{as:"h2"},{default:o(()=>[G]),_:1})]),U]),e("div",q,[e("div",z,[e("div",X,[e("div",null,[t(l,{as:"h3",class:""},{default:o(()=>[Y]),_:1}),t(h,{data:u(c).tools},null,8,["data"])])]),e("div",Z,[e("div",null,[t(l,{as:"h3",class:""},{default:o(()=>[ee]),_:1}),t(h,{data:u(c).web},null,8,["data"])])]),e("div",te,[e("div",null,[t(l,{as:"h3",class:""},{default:o(()=>[se]),_:1}),t(h,{data:u(c).data},null,8,["data"])])]),e("div",oe,[e("div",null,[t(l,{as:"h3",class:""},{default:o(()=>[ae]),_:1}),t(h,{data:u(c).infrastructure},null,8,["data"])])])])]),e("div",ne,[ie,e("div",de,[t(y,{as:"h2"},{default:o(()=>[re]),_:1})]),le]),(a(!0),i(f,null,_(u(m),p=>(a(),b(F,{company:p.company,title:p.title,year:p.year,location:p.location,description:p.description,projects:p.projects,tech:p.tech},null,8,["company","title","year","location","description","projects","tech"]))),256)),e("div",ce,[e("div",pe,[me,e("div",ue,[t(y,{as:"h2"},{default:o(()=>[he]),_:1})]),fe]),e("div",_e,[ye,e("div",ve,[t(v,null,{default:o(()=>[we]),_:1})]),ge])])])]))}};export{Se as default};
