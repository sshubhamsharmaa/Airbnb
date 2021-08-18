import React from "react";

function Footer() {
  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Trust and Safety</p>
        <p>Travel credit</p>
        <p>Gift Cards</p>
        <p>Airbnb picks</p>
        <p>Mobile</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOSTING</h5>
        <p>Why host?</p>
        <p>Hospitality</p>
        <p>Responsible Hosting</p>
        <p>Home Safety</p>
        <p>instant Book</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMPANY</h5>
        <p>About</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Help</p>
        <p>Policies</p>
      </div>
    </div>
  );
}

export default Footer;
