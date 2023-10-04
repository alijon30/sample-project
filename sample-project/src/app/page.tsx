'use client';
import Image from 'next/image';
import icon from './assets/icon.png';
import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import DiamondIcon from './assets/Diamond blue.png';
import GoldIcon from './assets/Symbol=Diamond, Component=Symbol.png';
import AvatarImg from './assets/Avatar.png'
const navLinks =  [
  {
    title: 'Missions',
    link: '#',
    icon: '🚀',
  },
  {
    title: 'Leaderboard',
    link: '#',
    icon: '🏆',
  },
  {
    title: 'Rewards',
    link: '#',
    icon: '💰',
  }
]

const resources = [
  {
    img_source : DiamondIcon,
    quantity: 20000,
  },
  {
    img_source : GoldIcon,
    quantity: 11000
  }
]

export default function Home() {

  const iconStyle = {
    fontSize: '25px',
  }
  const [activeItem, setActiveItem] = useState(null);
  return (
    <main className='h-full w-full'>
      <Box sx={{flexGrow: 1, padding: 5}}>
        <Grid container spacing={1} sx={{display:'flex', flexDirection:'row', justifyContent: 'space-between',}}>
          <Grid item  sx={{ display: 'flex', height: 'full',  alignItems: 'center'}}>
              <div style={{cursor: 'pointer'}}>
                <Image src={icon} alt="Icon" width={300} height={100} />
              </div>
            </Grid>
            <Grid item  sx={{ display: 'flex', flexDirection: 'row', gap: 5,   alignItems: 'center'}}>
              {navLinks.map((navlink, index)=> (
                <div className={`flex flex-row items-center gap-2 cursor-pointer group text-cyan-100 transition duration-300`}>
                <span id="icon" style={iconStyle}>
                  {navlink.icon}
                </span>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '25px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    color: 'slategray',
                    '&:hover': {color: 'cyan'}
                  }}
                >
                {navlink.title}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 rounded bg-sky-600"></span>
                </Typography>
              </div>
              ))}
            
            </Grid>
            <Grid item  sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
              {resources.map((resource, index) => (
                <div className='flex flex-row py-1 px-4 items-center gap-2 cursor-pointer rounded-3xl border-blue-300 border-2 '>
                  <Image src={resource.img_source} alt="Icon" width={35} height={30} />
                  <Typography variant="body1" sx={{fontSize: '25px', fontWeight: 'normal', color: 'white', cursor: 'pointer'}}>{resource.quantity.toLocaleString()}</Typography>
                </div>
              ))}
              <div>
              <Image alt="Remy Sharp" src={AvatarImg}width={50} height={50} />
              </div>
            </Grid>
        </Grid>
      </Box>
    </main>
  )
}
