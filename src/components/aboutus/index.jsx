import "./style.scss";

function AboutUs() {
  return (
    <>
      <div className="container block-aboutus">
        <div className="block block-1">
          <h4>about us</h4>
          <h2>Learn more, get results, go further</h2>
          <p>
            Etanon est nisl mi vitae faucibus nulla amet malesuada bibendum
            massa vivam tempor imperdiet posuere elit proin ut dui adipiscing
            dignissim sagittis, ultrices eu. Adipiscing ante dignissim consequat
            sit pellentesque laoreet risus magna eu fringilla dolor, tincidunt
            dictum ultrices. Varius mi scelerisque et, consectetur.
          </p>
          <div className="btn-learnmore">
            <span>&#10095;</span> learn more
          </div>
        </div>
        <div className="block block-2">
          <h4>Target your goals with our best English online course.</h4>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="block-img">
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
              <span className="sp-icons">&#10004;</span> Including a study plan
              to take your English to the next level in just a few months.
            </p>
            <p>
              <span className="sp-icons">&#10004;</span> Each level is made up
              of 24 units and 6 group unit review classes with one of our
              teachers.
            </p>
            <p>
              <span className="sp-icons">&#10004;</span> You'll get a
              Certificate when you pass each level and can share it on LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
