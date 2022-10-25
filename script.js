const menuButton = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const menu = document.getElementById('mobile-menu-id');

function hideMenu() {
  menu.classList.replace('show', 'hide');
  document.body.style.overflow = 'scroll';
}

function showMenu() {
  menu.classList.replace('hide', 'show');
  document.body.style.overflow = 'hidden';
}

menuButton.addEventListener('click', showMenu);
cross.addEventListener('click', hideMenu);
const team = [
  {
    image: './images/rm.png',
    name: 'Rm',
    designation: 'Team leader',
    description:
      'is a South Korean rapper, singer-songwriter and record producer. He is the leader of the South Korean boy group BTS.',
  },
  {
    image: './images/jin.png',
    name: 'Kim Seok-jin',
    designation: 'vocal leader',
    description:
      ' Jin is a South Korean singer, songwriter, and member of the South Korean boy band BTS. Kim has co-written and released three solo tracks with BTS.',
  },
  {
    image: './images/jimin.png',
    name: 'Park Ji-min',
    designation: 'vocal leader',
    description:
      'Jimin, is a South Korean singer and dancer. In 2013, he made his debut as a member of the South Korean boy group BTS',
  },
  {
    image: './images/v.png',
    name: 'Kim Tae-hyung',
    designation: 'vocalist',
    description:
      'V, is a South Korean singer and songwriter. He is a member of the South Korean boy band BTS',
  },
  {
    image: './images/junkook.png',
    name: 'Jeon Jung-kook',
    designation: 'vocalist',
    description:
      'Jungkook (stylized as Jung Kook), is a South Korean singer and songwriter. He is the youngest member and vocalist',
  },
  {
    image: './images/suga.png',
    name: 'Min Yoon-g',
    designation: 'main rapper',
    description:
      ' suga is a South Korean rapper-songwriter and record producer under Big Hit Music. He is member of the boy group BTS',
  },
];

const teamMembers = document.getElementById('featured-members-id');

team.forEach((element) => {
  const members = document.createElement('div');
  members.className = 'feature-detail';
  members.innerHTML = ` 
  <div class='feature-detail'>
    <div>
      <img id='feature-image' src='${element.image}'>
    </div>
    <div class='feature-data'>
      <h4 id='feature-name'>${element.name}</h4>
      <h5 class='deignation'>${element.designation}</h5>
      <p id='feature-desc'>${element.description}</p>
    </div>   
  </div> 
    `;
  teamMembers.appendChild(members);
});
