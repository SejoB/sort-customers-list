const size = {
  mobile: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '680px',
  tabletL: '880px',
  laptop: '1080px',
}
export const deviceMin = Object.keys(size).reduce((acc, key) => {
  acc[key] = style => `
     @media (min-width: ${size[key]}) {
       ${style};
     }
   `
  return acc
}, {})
export const deviceMax = Object.keys(size).reduce((acc, key) => {
  acc[key] = style => `
     @media (max-width: ${size[key]}) {
       ${style};
     }
   `
  return acc
}, {})

export const flexbox = ({ d = 'row', j = 'center', a = 'center' } = {}) => `
    display:flex;
    flex-direction:${d};
    justify-content:${j};
    align-items:${a};     
`