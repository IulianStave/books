import React from "react";

class Gallery extends React.Component {
  render() {
    let alternate = "https://img.icons8.com/wired/64/000000/no-camera.png";

    return (
      <div>
        {this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a key={index} className="book" href={infoLink} target="_blank">
              <img
                className="book-img"
                src={
                  imageLinks.thumbnail !== undefined
                    ? imageLinks.thumbnail
                    : alternate
                }
                alt="book image"
              />
              <div className="book-title">{title}</div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
