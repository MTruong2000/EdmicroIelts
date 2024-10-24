import { useEffect, useRef } from "react";
import "./style.scss";

function Discover() {
  const animationRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.dataset.animation;
          entry.target.classList.add("animate__animated", animationClass);
        }
      });
    });

    animationRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [animationRefs]);
  return (
    <>
      <div className="container block-discover">
        <div className="block-content">
          <h5
            className="animate__animated"
            ref={(element) => animationRefs.current.push(element)}
            data-animation="animate__backInDown"
          >
            our mentors
          </h5>
          <h1
            className="animate__animated"
            ref={(element) => animationRefs.current.push(element)}
            data-animation="animate__backInDown"
          >
            they'll guide you from day one.
          </h1>
          <p
            className="animate__animated"
            ref={(element) => animationRefs.current.push(element)}
            data-animation="animate__backInLeft"
          >
            Etanon est nisl mi vitae faucibus nulla amet malesuada bibendum
            massa vivamus tempor imperdiet posuere elit proin ut dui adipiscing
            dignissim sagittis, ultrices eu. Adipiscing ante dignissim consequat
            sit pellentesque laoreet risus magna eu fringilla dolor, tincidunt
            dictum ultrices. Varius mi scelerisque et, consectetur.
          </p>
          <div
            className="btn-discover animate__animated"
            ref={(element) => animationRefs.current.push(element)}
            data-animation="animate__backInUp"
          >
            <span>&#10095;</span> discover mentors
          </div>
        </div>
        <div className="block-img-mentor">
          <div
            className="block-mentor animate__animated"
            ref={(element) => animationRefs.current.push(element)}
            data-animation="animate__backInRight"
          >
            <img
              src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/elementor/thumbs/mentor1-plxqr45r0h5aw6ni1wtuok541t974k7pg3j8xqg5qw.jpg"
              alt="mentor"
            />
          </div>
          <div
            className="block-mentor animate__animated"
            ref={(element) => animationRefs.current.push(element)}
            data-animation="animate__backInRight"
          >
            <img
              src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/elementor/thumbs/mentor2-plxqr61fe57vjekrqxn3tjo18kzxjyf64cu7waddeg.jpg"
              alt="mentor"
            />
          </div>
          <div
            className="block-mentor animate__animated"
            ref={(element) => animationRefs.current.push(element)}
            data-animation="animate__backInRight"
          >
            <img
              src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/elementor/thumbs/mentor3-plxqr7x3rtag6mi1fygcyj6yfcqnzcmmsm56uual20.jpg"
              alt="mentor"
            />
          </div>
          <div
            className="block-mentor animate__animated"
            ref={(element) => animationRefs.current.push(element)}
            data-animation="animate__backInRight"
          >
            <img
              src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/elementor/thumbs/mentor4-plxqrbogj5gqe915i5fsapwtkl4jdwzxc3qstv6yg8.jpg"
              alt="mentor"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
