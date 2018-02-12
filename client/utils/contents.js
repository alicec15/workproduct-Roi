const date1 = '05/30/1991';
const content1 = 'I was born in Queens, NY and lived in Brooklyn until the age of 7. From there my family briefly moved to Englewood Cliffs, NJ for 2 years before settling into my hometown in Edison, NJ.';
const picture1 = './img/babyLuigi.png';

const date2 = '06/19/2009';
const content2 = 'I graduated from John P Stevens High School (Go Hawks!). Here I leave the proverbial nest to go to the next town over and start my life away from home!';
const picture2 = './img/jps.png';

const date3 = '05/19/2013';
const content3 = 'Graduated Rutgers University with a degree in Finance and minor in Economics. I also took an interest in math (1 class short of a math minor!) towards the latter years of college and was first introduced to computer programming by taking intro to computer science. Here is where I made some of my closest friends and was part of a hip-hop dance troupe!';
const picture3 = './img/rutgers.png';

const date4 = '07/09/2013';
const content4 = 'Started my first job at Bloomberg LP as a fixed income analyst, working with financial data, assisting with team management and was later promoted to a fixed income specialist. In this role, I was first exposed to working with developers on various department-wide projects including cleaning messy data using OpenRefine (formerly Google Refine), design models and get them properly coded, tested, and deployed within the Bloomberg terminal, and building schemas to help automate data feeds for foreign securities.';
const picture4 = './img/bloomberg.png';

const date5 = '04/25/2016';
const content5 = 'I later transitioned over to Barclays Bank, where I worked to assess the counterparty risk for all Barclays US entities. Working with hundreds of megabytes of data in excel seemed very slow and at times painful, especially when the solution could be tackled programmatically. I decided to study some programming on my own, only to learn that this was truly what I enjoyed doing all along and decided to make the jump!';
const picture5 = './img/barclays.png'

const date6 = '03/10/2017';
const content6 = 'After doing a ton of research for different options and getting feedback and recommendations from friends and family, I decided to apply to New York City\'s top bootcamp, Fullstack Academy of Code. With a lot of studying and a sprinkle of luck, I was accepted and thus began my journey at Fullstack Academy of Code, meeting classmates and making friends from all over the world.';
const picture6 = './img/fsa.png';

const date7 = '07/14/2017';
const content7 = 'I graduated Fullstack Academy! I\'ve poured 50-80 hour 6-day weeks for over 3 months studying full stack JavaScript, making many friends, and working on various projects (see above).';
const picture7 = './img/fsa2.png'

const today = new Date(Date.now());
let month = today.getMonth()+1;
month = month > 9 ? month.toString() : '0' + month.toString();
let day = today.getDate() > 9 ? today.getDate().toString() : '0' + today.getDate().toString()
let year = today.getFullYear();

const date8 = month.concat('/',day,'/',year);
const content8 = 'No time like the present :)';
const picture8 = './img/headshot.png';

module.exports = [
  {
    date: date1,
    content: content1,
    picture: picture1
  },
  {
    date: date2,
    content: content2,
    picture: picture2
  },
  {
    date: date3,
    content: content3,
    picture: picture3
  },
  {
    date: date4,
    content: content4,
    picture: picture4
  },
  {
    date: date5,
    content: content5,
    picture: picture5
  },
  {
    date: date6,
    content: content6,
    picture: picture6
  },
  {
    date: date7,
    content: content7,
    picture: picture7
  },
  {
    date: date8,
    content: content8,
    picture: picture8
  }
];
