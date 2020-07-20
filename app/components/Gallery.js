import React from "react";

class Gallery extends React.Component {
  render() {
    return (
      <div>
        Gallery Component
        {this.props.items.map((item, index) => {
          let { title } = item.volumeInfo;
          return <div key={index}> {title}</div>;
        })}
      </div>
    );
  }
}

export default Gallery;
