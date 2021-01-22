import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({id, ...otherSectionProps}) => (
      <MenuItem key={id} {...otherSectionProps} />
      // 等於 key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}
    ))}
    { console.log(sections) }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

// class Directory extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       sections: []
//     }
// render() { 
// <div className='directory-menu'>
//       {this.state.sections.map(({ id, ...otherSectionProps }) => (
//         <MenuItem key={id} {...otherSectionProps} />
//         // 等於 key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}
//       ))}
//     </div>
// }
//   }

export default connect(mapStateToProps)(Directory);
