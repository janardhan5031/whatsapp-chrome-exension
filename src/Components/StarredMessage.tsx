// src/Popup.js

import { useEffect } from 'react';

const staredProfiles = ['My Devil', "The Lord's Church"];

function StarredMessages() {
  useEffect(() => {
    // get all the profiles with class name
    const getAllProfiles: any = document.getElementsByClassName(
      'ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr _11JPr' // Mk0Bp _30scZ
    );
    if (getAllProfiles.length) {
      let filteredElements: any = Array.from(getAllProfiles).filter(
        (chat: any) => {
          return staredProfiles.includes(chat.innerText);
        }
      );

      const starredChats: any = filteredElements.map(
        (ele: any, idx: number) => {
          const staredInnerContainer: any =
            ele.parentElement.parentElement.parentElement.parentElement
              .parentElement.parentElement.parentElement.parentElement
              .innerHTML;

          const chatProfile = document.createElement('div');
          chatProfile.className = 'lhggkp7q ln8gz9je rx9719la';
          chatProfile.style.zIndex = '100';
          chatProfile.style.transition = 'none 0s ease 0s';
          chatProfile.style.height = '72px';
          chatProfile.style.transform = `translateY(${72 * (idx * 72)}px)`;
          chatProfile.innerHTML = staredInnerContainer;

          return chatProfile;
        }
      );

      console.log(filteredElements, 'filteredElements Messages');
      console.log(starredChats, 'STARRED Messages');

      const chatContainer: any =
        document.getElementsByClassName('g0rxnol2 _3fGK2')[0];
      console.log(chatContainer);
      chatContainer.innerHTML = '';
      if (chatContainer) {
        starredChats.forEach((chat: any) => {
          console.log(chat);
          chatContainer.appendChild(chat);
        });
      }
    }
  }, []);

  return <></>;
}

export default StarredMessages;
