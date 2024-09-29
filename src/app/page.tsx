// components/page/Page.tsx
import React from 'react';
import Scrollable from './components/scrollable/scrollable';
// import ThreeAvatar from './components/three_avatar/avatar';

const Page: React.FC = () => {
  return (
    <div className="flex">
        <Scrollable />
       {/* <ThreeAvatar/> */}
    </div>
  );
};

export default Page;
