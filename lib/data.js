// lib/data.js
export const MOVIES = [
  {
    id: 'chainsaw-man',
    title: 'Chainsaw Man',
    thumb: 'https://res.cloudinary.com/demo/image/upload/v1690000000/chainsaw.jpg',
    description: 'A gritty, high-octane series about devil hunters and survival.',
    adstraLink: 'https://example-adstra.com/campaign?ref=watch_chainsaw',
    teraboxLink: 'https://www.terabox.com/s/your-chainsaw-link'
  },
  {
    id: 'ek-villain-returns',
    title: 'Ek Villain Returns',
    thumb: 'https://res.cloudinary.com/demo/image/upload/v1690000001/villain.jpg',
    description: 'A thriller exploring revenge, obsession, and twisted motives.',
    adstraLink: 'https://example-adstra.com/campaign?ref=watch_villain',
    teraboxLink: 'https://www.terabox.com/s/your-villain-link'
  },
  {
    id: 'hi-venus',
    title: 'Hi Venus',
    thumb: 'https://res.cloudinary.com/demo/image/upload/v1690000002/hivenus.jpg',
    description: 'A soft romance blooming against unexpected odds.',
    adstraLink: 'https://example-adstra.com/campaign?ref=watch_hivenus',
    teraboxLink: 'https://www.terabox.com/s/your-hivenus-link'
  }
  // Add more entries as needed
];

export const byId = (arr, id) => arr.find(m => m.id === id);
