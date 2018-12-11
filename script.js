function togglecontent(id) {
  if (id.style.display === "none") {
    id.style.display = "block";
  } else {
    id.style.display = "none";
  }
}

function homefunction(id,id1){
  id.innerHTML = "Home";

  id1.innerHTML = "The home page is meant to give readers an introduction to the website. Underneath the first paragraph are two sections- Upcoming Features and Major Updates. Upcoming Features provides information on upcoming updates, and Major Updates provides information on recent large updates.";
}
 function aboutfunction(id,id1){
   id.innerHTML = "About";

   id1.innerHTML = "The About page provides readers with information about me. Information is sorted into sections. For example, information about my current goals will be in the 'Goals' section. To view the content of a section, click on the section's name. If you move your cursor away from the content, then it will close.";
 }
function helpfunction(id,id1){
  id.innerHTML = "Help";

  id1.innerHTML = "The Help page, which is the page you are viewing right now, is meant to provide readers with information about the website. It helps readers understand how the website functions.";
}
function historyfunction(id,id1){
  id.innerHTML = "History";

  id1.innerHTML = "The History page serves as the website's update log. Every change made to the website is recorded on the History page. All updates are listed from top to bottom, with the oldest updates on the top and the most recent updates on the bottom. In the bottom right corner of your screen, you will see a down arrow. If you click it, you will instantly scroll down to the bottom of the page. This is helpful for quickly finding the most recent update. At the bottom of the list is a 'Scroll to top' button. Clicking on this button will make you instantly scroll back to the top of the page.";
}
