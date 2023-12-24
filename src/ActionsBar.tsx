import { useEffect, useState } from 'react';
import './App.css';
import rgbHex from 'rgb-hex';
import StarredMessages from './Components/StarredMessage';

const tabs: any = [
  { _id: 1, title: 'Inbox', thumbnail: '' },
  { _id: 2, title: 'Unread', thumbnail: '' },
  { _id: 3, title: 'Stared', thumbnail: '' },
];

function ActionsBar() {
  const [themeSettings, setThemeSettings] = useState({
    themeColor: 'white',
    textColor: 'black',
  });
  const [haveNewMessages, setHaveNewMessages] = useState(false);
  const [activeTabId, setActiveTabId] = useState(1);
  const [isInUnreadMessages, setIsInUnreadMessages] = useState(false);

  const getUnReadMessagesFromWhatsApp = () => {
    const getUnReadMessages = document.getElementsByClassName('_1KV7I');
    const unReadMessagesArray = Array.from(getUnReadMessages);
    const unReadList: any = unReadMessagesArray.map((message) => {
      return message.parentElement?.parentElement?.parentElement;
    });
    console.log(unReadList);
    if (unReadList.length) {
      setHaveNewMessages(true);
    }
  };

  useEffect(() => {
    getUnReadMessagesFromWhatsApp();
    const getWhatsappTheme = document.getElementsByClassName('_3fGK2')[0];
    if (getWhatsappTheme) {
      const style: any = window.getComputedStyle(getWhatsappTheme);
      const whatsAppThemeSettings = {
        themeColor: style['background-color'],
        textColor: style['color'],
      };
      const themeColor = style['background-color'].match(/\d+/g);
      const textColor = style['color'].match(/\d+/g);

      if (themeColor && textColor) {
        // Convert RGB values to hexadecimal
        const hexThemeColor = rgbHex(
          ...(themeColor.map(Number) as [number, number, number])
        );
        const hexTextColor = rgbHex(
          ...(textColor.map(Number) as [number, number, number])
        );
        whatsAppThemeSettings.themeColor = '#' + hexThemeColor;
        whatsAppThemeSettings.textColor = '#' + hexTextColor;

        console.log(whatsAppThemeSettings);
        setThemeSettings(whatsAppThemeSettings);
      }
    }
  }, []);

  const filterInbox = function () {
    const unreadFilter: any = document.getElementsByClassName(
      'tt8xd2xn bugiwsl0 mpdn4nr2 fooq7fky'
    )[0];
    if (unreadFilter) {
      unreadFilter.click();
    }
  };

  const Onclick = (tabId: number) => {
    console.log('Clicked');
    if (tabId == 1 && isInUnreadMessages) {
      getUnReadMessagesFromWhatsApp();
      filterInbox();
      setIsInUnreadMessages(false);
    } else if (tabId == 2 && !isInUnreadMessages) {
      getUnReadMessagesFromWhatsApp();
      filterInbox();
      setIsInUnreadMessages(true);
    }

    setActiveTabId(tabId);
  };

  return (
    <>
      <div className="relative w-full h-full px-8 flex items-center">
        <div className="flex flex-row gap-4  h-full">
          {tabs.map((tab: any) => (
            <div>
              <div
                className="w-20 h-ful flex itmes-center justify-center mb-2 mt-3"
                id={tab._id}
              >
                {haveNewMessages && [1, 2].includes(tab._id) && (
                  <div className="w-2 h-2 bg-green-500 top-4 rounded-full m-1.5 mt-1"></div>
                )}
                <button
                  style={{
                    color: activeTabId == tab._id ? '#2d39e6' : 'black',
                  }}
                  className="group focus:outline-none"
                  onClick={() => Onclick(tab._id)}
                >
                  {tab.title}
                </button>
              </div>
              {activeTabId == tab._id && (
                <div
                  className="w-full"
                  style={{
                    border: '10px #2d39e6 solid',
                    borderRadius: '10px',
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {activeTabId == 3 && <StarredMessages />}
    </>
  );
}

export default ActionsBar;
