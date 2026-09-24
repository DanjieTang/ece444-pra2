// Project data: add, remove, or edit objects here to update the Projects section.
const projects = [
  {
    title: 'GemmaLLM',
    date: 'Mar 2024 – Apr 2024',
    description: 'Implemented the Gemma language model architecture from scratch in PyTorch and trained it on 6.5 million English Wikipedia pages, approximately two billion tokens.',
    tools: ['PyTorch', 'Large language models'],
    link: 'https://github.com/DanjieTang/FoundationLLM',
    linkText: 'View source on GitHub'
  },
  {
    title: 'Diffusion CIFAR10',
    date: 'Sep 2023 – Oct 2023',
    description: 'Built a generative model for CIFAR-10 images using diffusion and classifier-free guidance.',
    tools: ['PyTorch', 'Diffusion models'],
    link: 'https://github.com/DanjieTang/MyTripOnDeepLearning/tree/main/Diffusino%20Model',
    linkText: 'View source on GitHub'
  },
  {
    title: 'Conversational Recommendation System',
    date: 'May 2023 – Aug 2023',
    description: 'Developed LLM-ConvRec, a prompt-based conversational recommendation system that combines GPT with semi-structured state tracking for natural interactions.',
    tools: ['Python', 'PyTorch', 'Prompt engineering'],
    link: 'https://github.com/D3Mlab/llm-convrec',
    linkText: 'View source on GitHub'
  },
  {
    title: 'My Map',
    date: 'Jan 2023 – Apr 2023',
    description: 'Placed third in the ECE297 Courier Problem Contest using simulated annealing and parallel programming, among more than 100 teams and 87 valid submissions.',
    tools: ['C++', 'GTK', 'Optimization'],
    link: 'https://www.linkedin.com/in/danjie-tang/details/projects/',
    linkText: 'View project on LinkedIn'
  },
  {
    title: 'Video Game',
    date: 'Sep 2020 – Dec 2020',
    description: 'Combined graphical interface design and object-oriented programming to build a game with an advanced AI opponent.',
    tools: ['GUI design', 'Object-oriented programming'],
    link: 'https://github.com/DanjieTang/favourite-project-high-school',
    linkText: 'View source on GitHub'
  }
];

// How many projects to show before "Load More" is clicked.
const INITIAL_COUNT = 2;

const projectGrid = document.getElementById('project-grid');
const loadMoreButton = document.getElementById('load-more');

// Build one card for a project and add it to the Projects grid.
function addProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'card project-card';
  card.innerHTML = `
    <div class="card-content">
      <h4 class="card-title teal-text">${project.title}</h4>
      <p class="project-date">${project.date}</p>
      <p>${project.description}</p>
      <p class="project-tools">${project.tools.join(' · ')}</p>
    </div>
    <div class="card-action"><a href="${project.link}" target="_blank" rel="noopener noreferrer" class="hoverline">${project.linkText}</a></div>
  `;
  projectGrid.appendChild(card);
}

// Show the first few projects right away.
projects.slice(0, INITIAL_COUNT).forEach(addProjectCard);

// Hide the button if there's nothing more to load.
if (projects.length <= INITIAL_COUNT) {
  loadMoreButton.style.display = 'none';
}

// On click, show the remaining projects and hide the button.
loadMoreButton.addEventListener('click', function () {
  projects.slice(INITIAL_COUNT).forEach(addProjectCard);
  loadMoreButton.style.display = 'none';
});
