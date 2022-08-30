import React, { useState } from 'react';
import './style.css';
import SharePng from '../assets/share.png';
import Globe from '../assets/globe.svg';
import FeedBackIcon from '../assets/feedback_icon.svg';
import CopyLinkIcon from '../assets/copy-link.svg';
import OlashLogo from '../assets/oslashLogo.svg';
import Wade from '../assets/wade.svg';
import Initial from '../assets/intial.svg';
import Arnie from '../assets/arnie.svg';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import './tippy_style.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import Toggle from './Toggle';
import MyListbox from './SelectDropDown';
import useCopyToClipboard from '../customHooks/useCopyToClipboard';

//Share Modal Header
const ShareModalHeader = () => {
  return (
    <div className='tippy__header flex flex-row justify-between'>
      <div className='flex'>
        <div className='w-[48px] h-[48px] '>
          <img
            src={Globe}
            alt='share'
            className='block m-auto w-[32px] h-[32px] mt-[4px]'
          />
        </div>
        <div className='flex-row justify-start items-start'>
          <p className='text-base text-start text-[#111827]'>Share to web</p>
          <p className='text-sm text-start text-[#6B7280]'>
            Publish and share link with anyone
          </p>
        </div>
      </div>
      <div className='relative top-1/2 translate-y-[-25%]'>
        <Toggle />
      </div>
    </div>
  );
};

type ShareModalMainProps = {
  setSearchMode(val: boolean): void;
};

// Share Modal Main
const ShareModalMain = ({ setSearchMode }: ShareModalMainProps) => {
  return (
    <div className='tippy__main px-4 py-3 flex flex-col'>
      <div className='tippy__main__search w-full h-[42px]'>
        <input
          type='submit'
          className='w-10/12 h-full border rounded-l-lg text-start pl-2 text-[#6B7280]'
          value='People, emails, groups'
          onClick={() => setSearchMode(true)}
        ></input>
        <input
          type='submit'
          className='w-1/6 h-full border rounded-r-lg hover:cursor-pointer bg-[#F9FAFB]'
          value='Invite'
        ></input>
      </div>

      <div className='tippy__main__search__results w-full h-[44px] mt-6 flex flex-row justify-between'>
        <div className='flex'>
          <div className='w-[48px] h-[48px] '>
            <img
              src={OlashLogo}
              alt='share'
              className='block m-auto w-[40px] h-[40px] rounded-full'
            />
          </div>
          <div className='flex-row justify-start items-start ml-2'>
            <p className='text-base text-start text-[#111827]'>
              Everyone at Oslash
            </p>
            <p className='text-sm text-start text-[#6B7280]'>
              25 workspace members
            </p>
          </div>
        </div>
        <div className='relative top-1/2 translate-y-[-50%]'>
          <MyListbox />
        </div>
      </div>
    </div>
  );
};

//Share Modal fotter
const ShareModalFotter = () => {
  const [copyText, setCopyText] = useCopyToClipboard();
  return (
    <div className='tippy__bottom px-4 py-2'>
      <div className=' w-full h-full flex flex-row justify-between'>
        <div className='flex relative top-1/2 translate-y-[-35%]'>
          <img
            src={FeedBackIcon}
            alt='share'
            className='block m-auto w-[12px] h-[12px] mt-[4px] hover:cursor-pointer'
          />

          <p className='text-sm text-start ml-1 font-normal text-[#6B7280]'>
            learn about sharing
          </p>
        </div>

        <div
          className='flex relative top-1/2 translate-y-[-35%] hover:cursor-pointer'
          onClick={() => setCopyText('Test copy text')}
          style={{ zIndex: '-1' }}
        >
          <img
            src={CopyLinkIcon}
            alt='share'
            className='block m-auto w-[12px] h-[12px] mt-[4px]'
          />

          <p className='text-sm text-start ml-1 font-medium text-[#111827]'>
            {' '}
            Copy Link
          </p>
        </div>
      </div>
    </div>
  );
};

type ShareModalSearchHeaderProps = {
  setSearchMode(val: boolean): void;
};

const ShareModalSearchHeader = ({
  setSearchMode,
}: ShareModalSearchHeaderProps) => {
  return (
    <div className='tippy__search__header  w-full flex justify-between'>
      <input
        type='text'
        placeholder='Search emails, names, and groups'
        className='w-[215px] bg-[#F3F4F6] text-[14px]'
        autoFocus={true}
      />
      <div className='flex'>
        <div className='relative top-1/2 translate-y-[-65%]'>
          <MyListbox />
        </div>
        <button
          className='invite__button ml-2'
          onClick={() => {
            setSearchMode(false);
          }}
        >
          Invite
        </button>
      </div>
    </div>
  );
};

const ShareModalSearchMain = () => {
  return (
    <div className='tippy__search__main'>
      <div className='text-start text-[16px] ml-[12px]'>Select a person</div>
      <div className='tippy__select__menu__item h-[40px] flex hover:cursor-pointer'>
        <img src={Wade} alt='' style={{ width: '24px', height: '24px' }} />
        <p className='ml-2'>Wade Copper</p>
      </div>
      <div className='tippy__select__menu__item h-[40px] flex hover:cursor-pointer'>
        <img src={Arnie} alt='' style={{ width: '24px', height: '24px' }} />
        <p className='ml-2'>Arlene Mccoy</p>
      </div>
      <div className='text-start text-[16px] mt-4  ml-[12px]'>
        Select a group
      </div>
      <div className='tippy__select__menu__item h-[40px] flex hover:cursor-pointer'>
        <img src={Initial} alt='' style={{ width: '24px', height: '24px' }} />
        <p className='ml-2'>Product</p>
      </div>
      <div className='tippy__select__menu__item h-[40px] flex hover:cursor-pointer'>
        <img src={Initial} alt='' style={{ width: '24px', height: '24px' }} />
        <p className='ml-2'>Engineering</p>
      </div>
    </div>
  );
};

const ShareModalSearchFotter = () => {
  return (
    <div className='tippy__search__fotter px-4 '>
      <div className=' w-full h-full flex flex-row justify-between'>
        <div className='flex relative top-1/2 translate-y-[-35%]'>
          <img
            src={FeedBackIcon}
            alt='share'
            className='block m-auto w-[12px] h-[12px] mt-[4px] hover:cursor-pointer'
          />

          <p className='text-sm text-start ml-1 font-normal text-[#6B7280]'>
            learn about sharing
          </p>
        </div>
      </div>
    </div>
  );
};

const ShareButton = () => {
  const [searchMode, setSearchMode] = useState(false);

  return (
    <Tippy
      render={(attrs) => (
        <div className='tippy__box' {...attrs}>
          {!searchMode ? (
            <>
              <ShareModalHeader />
              <ShareModalMain setSearchMode={setSearchMode} />
              <ShareModalFotter />
            </>
          ) : (
            <>
              <ShareModalSearchHeader setSearchMode={setSearchMode} />
              <ShareModalSearchMain />
              <ShareModalSearchFotter />
            </>
          )}
        </div>
      )}
      placement={'bottom'}
      sticky={true}
      interactive={true}
      trigger={'click'}
      zIndex={-1}
    >
      <button className='share__btn'>
        Share
        <img
          src={SharePng}
          style={{ width: '16px', height: '16px' }}
          alt='fireSpot'
        />
      </button>
    </Tippy>
  );
};

export default ShareButton;
