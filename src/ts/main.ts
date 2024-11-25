// navbar
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.mobile-nav');

hamburger?.addEventListener('click',()=>{
    links?.classList.toggle('mobile-links');
});


// faqs
document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll<HTMLButtonElement>(".accordion-header");
  
    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const targetId = header.getAttribute("data-target");
        const content = document.getElementById(targetId!);
  
        if (!content) return;
  
        const isOpen = content.classList.contains("open");
        const icon = header.querySelector(".icon");
  
        
        document.querySelectorAll(".accordion-content.open").forEach((openContent) => {
          openContent.classList.remove("open");
  
          const siblingIcon = openContent.previousElementSibling?.querySelector<HTMLSpanElement>(".icon");
          if (siblingIcon) {
            siblingIcon.textContent = "+";
          }
        });
  
        if (!isOpen) {
          content.classList.add("open");
          icon!.textContent = "-";
        } else {
          content.classList.remove("open");
          icon!.textContent = "+";
        }
      });
    });
  });

