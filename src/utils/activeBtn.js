const activeBtn = (e, callback, options = '') => {
  const active = options ? `${options} .active` : '.active';
  const activeBtn = document.querySelector(active);

  if (activeBtn) {
    activeBtn.classList.remove('active');
  }
  e.target.classList.toggle('active');

  callback();
};

export default activeBtn;

/*
options

this is to isolate the elements so that the styles 
of all elements are not changed (all elements name = 'active'), but only the selected ones (1. name = '.form active' 2. name='.list-btn active)

(Form and ListBtn) 
*/
