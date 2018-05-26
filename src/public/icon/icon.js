import React from 'react';
const {PropTypes} = React;

const icons = {
    trash: 'M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z',
    facebook: 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
    css3: 'M9.524 3.033l-2.147 10.745h43.734l-1.368 6.941h-43.762l-2.118 10.744h43.73l-2.439 12.254-17.626 5.839-15.275-5.839 1.046-5.315h-10.744l-2.556 12.897 25.264 9.669 29.125-9.669 9.611-48.266z'
};

const Icon = props => (
  <svg width="22" height="22" viewBox="0 0 1024 1024">
    <path d={icons[props.icon]}></path>
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;