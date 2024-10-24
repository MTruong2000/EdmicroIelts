import { CiCircleCheck } from "react-icons/ci";
import "./style.scss";
import { useEffect, useRef } from "react";

function AboutUs() {
  // const animationUpDown = useRef(null);
  // const animationDownUp = useRef(null);
  // const animationLR = useRef(null);
  // const animationRL = useRef(null);

  // useEffect(() => {
  //   const observerUpDown = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add(
  //           "animate__animated",
  //           "animate__backInDown"
  //         );
  //       }
  //     });
  //   });

  //   const observerDownUp = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("animate__animated", "animate__backInUp");
  //       }
  //     });
  //   });
  //   const observerLR = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add(
  //           "animate__animated",
  //           "animate__backInLeft"
  //         );
  //       }
  //     });
  //   });
  //   const observerRL = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add(
  //           "animate__animated",
  //           "animate__backInRight"
  //         );
  //       }
  //     });
  //   });

  //   if (animationUpDown.current) {
  //     observerUpDown.observe(animationUpDown.current);
  //   }
  //   if (animationDownUp.current) {
  //     observerDownUp.observe(animationDownUp.current);
  //   }
  //   if (animationLR.current) {
  //     observerLR.observe(animationLR.current);
  //   }
  //   if (animationRL.current) {
  //     observerRL.observe(animationRL.current);
  //   }

  //   return () => {
  //     if (observerUpDown) {
  //       observerUpDown.disconnect();
  //     }
  //     if (observerDownUp) {
  //       observerDownUp.disconnect();
  //     }
  //     if (observerLR) {
  //       observerLR.disconnect();
  //     }
  //     if (observerRL) {
  //       observerRL.disconnect();
  //     }
  //   };
  // }, []);


  const animationRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.dataset.animation;   
          entry.target.classList.add('animate__animated', animationClass);
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
      <div className="container block-aboutus">
        <div className="block block-1">
          <h4 className="animate__animated" ref={element => animationRefs.current.push(element)} data-animation="animate__backInDown">
            about us
          </h4>
          <h2 className="animate__animated" ref={element => animationRefs.current.push(element)} data-animation="animate__backInLeft">
            Learn more, get results, go further
          </h2>
          <p className="animate__animated" ref={element => animationRefs.current.push(element)} data-animation="animate__backInLeft">
            Etanon est nisl mi vitae faucibus nulla amet malesuada bibendum
            massa vivam tempor imperdiet posuere elit proin ut dui adipiscing
            dignissim sagittis, ultrices eu. Adipiscing ante dignissim consequat
            sit pellentesque laoreet risus magna eu fringilla dolor, tincidunt
            dictum ultrices. Varius mi scelerisque et, consectetur.
          </p>
          <div
            className="btn-learnmore animate__animated"
            ref={element => animationRefs.current.push(element)} data-animation="animate__backInUp"
          >
            <span>&#10095;</span> learn more
          </div>
        </div>
        <div className="block block-2">
          <h4 className="animate__animated" ref={element => animationRefs.current.push(element)} data-animation="animate__backInDown">
            Target your goals with our best English online course.
          </h4>
          <p className="animate__animated" ref={element => animationRefs.current.push(element)} data-animation="animate__backInRight">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="block-img animate__animated" ref={element => animationRefs.current.push(element)} data-animation="animate__backInRight">
            <img
              src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/elementor/thumbs/about-sect1-plxny85fu5mnkovf2mtcl5loxnwaiqzlh51053tzso.jpg"
              alt="img"
            />
          </div>
        </div>
        <div className="block block-3">
          <div className="block-img">
            <img
              src="https://templatekits.themewarrior.com/inglis/wp-content/uploads/sites/49/elementor/thumbs/about-sect2-plxo0mmlptpigsj5u9vm8r4cef8oqn4u37333wvmjw.jpg"
              alt="img"
            />
          </div>
          <p>
            Ultrices eu. Adipiscing ante dignissim consequat sit pellentesque
            laoreet risus magna eu fringilla dolor, tincidunt dictum ultrices.
            scelerisque et, consectetur bignissim consequat sit pellentesque
            laoreet risus.
          </p>
          <div className="btn-contactus">
            <span>&#10095;</span> contact us
          </div>
        </div>
        <div className="block block-4">
          <div className="block-child-1">
            <h5>about us</h5>
            <h2>A 100% online and interactive adult course</h2>
          </div>
          <div className="block-child-1">
            <p>
              <CiCircleCheck className="icons-check" /> Including a study plan
              to take your English to the next level in just a few months.
            </p>
            <p>
              <CiCircleCheck className="icons-check" /> Each level is made up of
              24 units and 6 group unit review classes with one of our teachers.
            </p>
            <p>
              <CiCircleCheck className="icons-check" /> Certificate when you
              pass each level and can share it on LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
