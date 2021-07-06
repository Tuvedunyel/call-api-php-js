let categoryArray = [];
let postTitle = [];
let jobType = [];
let jobs;
let sortedArray = [];
const cardContainer = document.querySelector(".card-container");

let selectEvent = [];

function searchData(jobs, events) {
  if (events[0] && events[1] && events[2]) {
    jobs
      .filter((job) => job.category.includes(events[0]))
      .filter((job) => job.job_type.includes(events[1]))
      .filter((job) => job.title.includes(events[2]))
      .map((job) => {
        cardContainer.innerHTML += `
            <div class="card">
            <strong class="job-strong">${job.job_type}</strong>
            <div class="card-details">
            <p class="post-type">${job.category}</p>
            <h3>${job.title}</h3>
            <div class="post-description">${job.description}</div>
            <a href=${job.url} target="_blank" rel="noreferrer noopener" title="En savoir plus sur le poste ${job.title}" >En savoir plus</a>
            </div>
            </div>
            `;
      });
    selectEvent = [];
  } else if (events[0] && events[1]) {
    jobs
      .filter((job) => job.category.includes(events[0]))
      .filter((job) => job.job_type.includes(events[1]))
      .map((job) => {
        cardContainer.innerHTML += `
          <div class="card">
          <strong class="job-strong">${job.job_type}</strong>
          <div class="card-details">
          <p class="post-type">${job.category}</p>
          <h3>${job.title}</h3>
          <div class="post-description">${job.description}</div>
          <a href=${job.url} target="_blank" rel="noreferrer noopener" title="En savoir plus sur le poste ${job.title}" >En savoir plus</a>
          </div>
          </div>
          `;
      });
    selectEvent = [];
  } else if (events[0] && events[2]) {
    jobs
      .filter((job) => job.category.includes(events[0]))
      .filter((job) => job.title.includes(events[2]))
      .map((job) => {
        cardContainer.innerHTML += `
          <div class="card">
          <strong class="job-strong">${job.job_type}</strong>
          <div class="card-details">
          <p class="post-type">${job.category}</p>
          <h3>${job.title}</h3>
          <div class="post-description">${job.description}</div>
          <a href=${job.url} target="_blank" rel="noreferrer noopener" title="En savoir plus sur le poste ${job.title}" >En savoir plus</a>
          </div>
          </div>
          `;
      });
    selectEvent = [];
  } else if (events[1] && events[2]) {
    jobs
      .filter((job) => job.job_type.includes(events[1]))
      .filter((job) => job.title.includes(events[2]))
      .map((job) => {
        cardContainer.innerHTML += `
          <div class="card">
          <strong class="job-strong">${job.job_type}</strong>
          <div class="card-details">
          <p class="post-type">${job.category}</p>
          <h3>${job.title}</h3>
          <div class="post-description">${job.description}</div>
          <a href=${job.url} target="_blank" rel="noreferrer noopener" title="En savoir plus sur le poste ${job.title}" >En savoir plus</a>
          </div>
          </div>
          `;
      });
    selectEvent = [];
  } else if (events[0]) {
    jobs
      .filter((job) => job.category.includes(events[0]))
      .map((job) => {
        cardContainer.innerHTML += `
          <div class="card">
          <strong class="job-strong">${job.job_type}</strong>
          <div class="card-details">
          <p class="post-type">${job.category}</p>
          <h3>${job.title}</h3>
          <div class="post-description">${job.description}</div>
          <a href=${job.url} target="_blank" rel="noreferrer noopener" title="En savoir plus sur le poste ${job.title}" >En savoir plus</a>
          </div>
          </div>
          `;
      });
    selectEvent = [];
  } else if (events[1]) {
    jobs
      .filter((job) => job.job_type.includes(events[1]))
      .map((job) => {
        cardContainer.innerHTML += `
          <div class="card">
          <strong class="job-strong">${job.job_type}</strong>
          <div class="card-details">
          <p class="post-type">${job.category}</p>
          <h3>${job.title}</h3>
          <div class="post-description">${job.description}</div>
          <a href=${job.url} target="_blank" rel="noreferrer noopener" title="En savoir plus sur le poste ${job.title}" >En savoir plus</a>
          </div>
          </div>
          `;
      });
    selectEvent = [];
  } else {
    jobs
      .filter((job) => job.title.includes(events[2]))
      .map((job) => {
        cardContainer.innerHTML += `
          <div class="card">
          <strong class="job-strong">${job.job_type}</strong>
          <div class="card-details">
          <p class="post-type">${job.category}</p>
          <h3>${job.title}</h3>
          <div class="post-description">${job.description}</div>
          <a href=${job.url} target="_blank" rel="noreferrer noopener" title="En savoir plus sur le poste ${job.title}" >En savoir plus</a>
          </div>
          </div>
          `;
      });
    selectEvent = [];
  }
}

category.addEventListener("change", (e) => {
  return (selectEvent[0] = e.target.value);
});

region.addEventListener("change", (e) => {
  return (selectEvent[1] = e.target.value);
});

posttype.addEventListener("change", (e) => {
  return (selectEvent[2] = e.target.value);
});

send.addEventListener("click", (e) => {
  e.preventDefault();
  if (selectEvent.length >= 1) {
    resetOption(category, posttype, region);
    isSearch(selectEvent);
  }
});

const resetOption = (category, post, zone) => {
  category.innerHTML = `
        <option value="">Catégorie</option
    `;
  post.innerHTML = `
        <option value="">Intitulé du poste</option
    `;
  zone.innerHTML = `
        <option value="">Région</option
    `;
};

const isSearch = (events) => {
  cardContainer.innerHTML = "<div></div>";
  fetchData(events);
};

const removeDuplicates = (array, id) => {
  sortedArray = array.filter((value, index) => array.indexOf(value) === index);
  sortedArray.sort();

  sortedArray.forEach((cat) => {
    if (cat) {
      id.innerHTML += `
              <option value=${cat}>${cat}</option>
          `;
    }
  });
};

const fetchData = (events) => {
  const jobs = sendingData.jobs;

  jobs.map((job) => {
    categoryArray.push(job.category);
    postTitle.push(job.title);
    jobType.push(job.job_type);
  });

  if (events !== undefined) {
    searchData(jobs, events);
  } else {
    jobs.slice(0, 4).map((job) => {
      cardContainer.innerHTML += `
        <div class="card">
        <strong class="job-strong">${job.job_type}</strong>
        <div class="card-details">
        <p class="post-type">${job.category}</p>
        <h3>${job.title}</h3>
        <div class="post-description">${job.description}</div>
        <a href=${job.url} target="_blank" rel="noreferrer noopener" title="En savoir plus sur le poste ${job.title}" >En savoir plus</a>
        </div>
        </div>
        `;
      selectEvent = [];
    });
  }

  removeDuplicates(categoryArray, category);
  removeDuplicates(postTitle, posttype);
  removeDuplicates(jobType, region);
};

fetchData();
