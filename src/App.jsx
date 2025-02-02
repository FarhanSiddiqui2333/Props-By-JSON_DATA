import React from 'react'
import Card from './components/Card'
import './App.css'
import Img1 from './assets/img1.jpg'
import Img2 from './assets/img2.jpg'
import Img3 from './assets/img3.jpg'
import Img4 from './assets/img4.webp'
import Img5 from './assets/img5.jpg'
import Img6 from './assets/img6.jpg'
import Img7 from './assets/img7.jpg'
import Img8 from './assets/img8.webp'
import Img9 from './assets/img9.jpg'
import Img10 from './assets/img10.png'



const App = () => {
  let userData = [
    {
      userName: 'Xtylish@sad',
      profilePhoto: Img1,
      post: '120',
      followers: '145k',
      following: '10k',
      Name: "Asad Khan",
      descrip: "I am a Software Engineer and work in software house last three years.",
      secondryProfile: [
        {
          profile: Img2,
          userName: "Smith Jons"
        },
        {
          profile: Img3,
          userName: "Loreta Smiths"
        },
        {
          profile: Img4,
          userName: "AnwarKh@n"
        },
        {
          profile: Img5,
          userName: "Ismail565g"
        }
      ]
    },
    {
      userName: 'Smith Jons',
      profilePhoto: Img2,
      post: '10',
      followers: '15k',
      following: '1k',
      Name: "Jons",
      descrip: "I am a Designer and work in thes field last three years.",
      secondryProfile: [
        {
          profile: Img4,
          userName: "AnwarKh@n"
        },
        {
          profile: Img1,
          userName: "Xtylish@hmed"
        },
        {
          profile: Img3,
          userName: "Loreta Smiths"
        },
        {
          profile: Img5,
          userName: "Ismail565g"
        }
      ]
    },
    {
      userName: 'Loreta Smiths',
      profilePhoto: Img3,
      post: '100',
      followers: '1.2M',
      following: '109',
      Name: "Loreta",
      descrip: "I am a Actorest and work in movie & Series. 'Today's My Birthday' .",
      secondryProfile: [
        {
          profile: Img5,
          userName: "Ismail565g"
        },
        {
          profile: Img2,
          userName: "Smith Jons"
        },
        {
          profile: Img10,
          userName: "BMW"
        },
        {
          profile: Img4,
          userName: "AnwarKh@n"
        }
      ]
    },
    {
      userName: 'Anwarkh@n333',
      profilePhoto: Img4,
      post: '90',
      followers: '105k',
      following: '5k',
      Name: "Anwar Ahmed",
      descrip: "I am a Software Engineer and workd in software house last three years.",
      secondryProfile: [
        {
          profile: Img2,
          userName: "Smith Jons"
        },
        {
          profile: Img1,
          userName: "Xtylish@hmed"
        },
        {
          profile: Img7,
          userName: "Sana Jutt"
        },
        {
          profile: Img3,
          userName: "Loreta Smiths"
        }
      ]
    },
    {
      userName: 'Ismail565g',
      profilePhoto: Img5,
      post: '10',
      followers: '14M',
      following: '105',
      Name: "Ismail Ansari",
      descrip: "I am a Programmer and workd in ABCD Company.",
      secondryProfile: [
        {
          profile: Img2,
          userName: "Smith Jons"
        },
        {
          profile: Img1,
          userName: "Xtylish@hmed"
        },
        {
          profile: Img3,
          userName: "Loreta Smiths"
        },
        {
          profile: Img4,
          userName: "AnwarKh@n"
        }
      ]
    },
    {
      userName: 'BMW OFFICIAL',
      profilePhoto: Img10,
      post: '105k',
      followers: '5.4B',
      following: '0',
      Name: "BMW",
      descrip: "We are very happy to lunch a new and more efficient car that is Supra ratatatatata....",
      secondryProfile: [
        {
          profile: Img6,
          userName: "Billa"
        },
        {
          profile: Img7,
          userName: "Xtylish@hmed"
        },
        {
          profile: Img8,
          userName: "cutyPie"
        },
        {
          profile: Img9,
          userName: "AnwarKh@n"
        }
      ]
    }
    ,
    {
      userName: 'Sana Jutt',
      profilePhoto: Img7,
      post: '1.5k',
      followers: '50k',
      following: '100',
      Name: "Sana",
      descrip: "#asthetic picture #viral #foryou #famous #new #iphone #sangsum # beauty .more....",
      secondryProfile: [
        {
          profile: Img9,
          userName: "sheaby"
        },
        {
          profile: Img1,
          userName: "Xtylish@hmed"
        },
        {
          profile: Img8,
          userName: "cutyPie"
        },
        {
          profile: Img4,
          userName: "AnwarKh@n"
        }
      ]
    },
    {
      userName: 'cutyPie',
      profilePhoto: Img8,
      post: '10.5k',
      followers: '500k',
      following: '10k',
      Name: "Cuty",
      descrip: "I am so lonly sampo #asthetic picture #viral #foryou #famous more....",
      secondryProfile: [
        {
          profile: Img2,
          userName: "smith Jones"
        },
        {
          profile: Img3,
          userName: "Loreta Smiths"
        },
        {
          profile: Img6,
          userName: "Billa"
        },
        {
          profile: Img1,
          userName: "Xtylish@hmed"
        }
      ]
    },
    {
      userName: 'Billa',
      profilePhoto: Img6,
      post: '1.5k',
      followers: '5.2k',
      following: '100k',
      Name: "Billa",
      descrip: "If you think I am weak so remember that you just thinking Got it.",
      secondryProfile: [
        {
          profile: Img10,
          userName: "BMW"
        },
        {
          profile: Img5,
          userName: "Ismail565g"
        },
        {
          profile: Img4,
          userName: "Anwarkh@n"
        },
        {
          profile: Img7,
          userName: "Sana Jutt"
        }
      ]
    },
    {
      userName: 'Sheaby',
      profilePhoto: Img9,
      post: '800',
      followers: '58.5k',
      following: '107',
      Name: "Sheaby",
      descrip: "I never lose nobody defeats me until I win Dreams comes true more....",
      secondryProfile: [
        {
          profile: Img8,
          userName: "cutyPie"
        },
        {
          profile: Img10,
          userName: "BMW"
        },
        {
          profile: Img7,
          userName: "Sana Jutt"
        },
        {
          profile: Img3,
          userName: "Loreta Smith"
        }
      ]
    }
  ]
  return (
    <div className='flex flex-row gap-12 p-10 slider '>
      {
        userData.map((item, indx) => <Card
          username={item.userName}
          photo={item.profilePhoto}
          posts={item.post}
          followers={item.followers}
          following={item.following}
          name={item.Name}
          desc={item.descrip}
          oth_user={item.secondryProfile}
          oth_pro={item.secondryProfile}
          
          key={indx}
        />
        )
      }
    </div>
  )
}
{/*key & index are used to remove unique key error on console it doesn't impact on code*/ }

export default App
