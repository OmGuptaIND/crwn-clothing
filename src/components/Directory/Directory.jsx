import React from "react";
import "./Directory.scss";

//Components;
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { selecDirectory } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: selecDirectory(state),
});

export default connect(mapStateToProps)(Directory);
