import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [marriageDiv] = timeContainer.querySelectorAll('div div');
    // const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');
     const [mapLink, wazeLink] = timeContainer.querySelectorAll('a'); // ← Tambah waze link
    const addressParagraph = timeContainer.querySelector('a + p');

    const createTimeListItem = (title, details) => (
        `<h3>${title}</h3>
         <p>Pada ${details.day}, ${details.date} ${details.month} ${details.year} <br> 
         Pukul ${details.hours.start} Hingga ${details.hours.finish}</p>`
    );

    marriageDiv.innerHTML = createTimeListItem('Nama Tempat', data.time.marriage);
    // receptionDiv.innerHTML = createTimeListItem('Resepsi', data.time.reception);

    // Set hrefs for both links
    mapLink.href = data.link.map;
    wazeLink.href = data.link2.map;
    
    addressParagraph.textContent = data.time.address;
};
