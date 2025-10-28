
const sections = document.querySelectorAll('.edu-section');

sections.forEach(section => {
  const btn = section.querySelector('.edu-btn');
  const content = section.querySelector('.edu-content');

  btn.addEventListener('click', () => {
    const isActive = section.classList.contains('active');

    
    sections.forEach(s => {
      s.classList.remove('active');
      const c = s.querySelector('.edu-content');
      c.style.maxHeight = null;
      c.style.paddingTop = 0;
      c.style.paddingBottom = 0;

     
      s.querySelectorAll('.nested-item').forEach(ni => {
        ni.classList.remove('active');
        const nc = ni.querySelector('.nested-content');
        if (nc) {
          nc.style.maxHeight = null;
          nc.style.paddingTop = 0;
          nc.style.paddingBottom = 0;
        }
      });
    });

    if (!isActive) {
  
      section.classList.add('active');
    
      content.style.paddingTop = "15px";
      content.style.paddingBottom = "15px";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });


  const nestedItems = section.querySelectorAll('.nested-item');
  nestedItems.forEach(nestedItem => {
    const nBtn = nestedItem.querySelector('.nested-btn');
    const nContent = nestedItem.querySelector('.nested-content');

    nBtn.addEventListener('click', (e) => {
      e.stopPropagation(); 

      const isNestedActive = nestedItem.classList.contains('active');

      
      nestedItems.forEach(ni => {
        ni.classList.remove('active');
        const nc = ni.querySelector('.nested-content');
        if (nc) {
          nc.style.maxHeight = null;
          nc.style.paddingTop = 0;
          nc.style.paddingBottom = 0;
        }
      });

      if (!isNestedActive) {
        nestedItem.classList.add('active');
        nContent.style.paddingTop = "12px";
        nContent.style.paddingBottom = "12px";
        nContent.style.maxHeight = nContent.scrollHeight + "px";

       
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

});

