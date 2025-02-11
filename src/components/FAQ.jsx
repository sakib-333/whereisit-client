import React from "react";
import Heading from "./Heading";

const FAQ = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="900"
      className="mt-20 px-4"
    >
      <Heading title="Frequently Asked Questions" />
      <div className="space-y-4 pb-8">
        <div className="collapse collapse-arrow bg-background text-text border border-text rounded-sm">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is the purpose of this website?
          </div>
          <div className="collapse-content">
            <p className="text-basic">
              Our website helps individuals report lost or found items and
              facilitates reconnecting them with their rightful owners.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background text-text border border-text rounded-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is this service free to use?
          </div>
          <div className="collapse-content">
            <p className="text-basic">
              Yes, our platform is completely free for users to report lost or
              found items.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background text-text border border-text rounded-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I report a lost item?
          </div>
          <div className="collapse-content">
            <p className="text-basic">
              Click on the "Report Lost Item" button, fill out the form with
              details like item description, location, and date, and submit it.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background text-text border border-text rounded-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What details should I include when reporting a lost item?
          </div>
          <div className="collapse-content">
            <p className="text-basic">
              Provide a clear description, the approximate location where the
              item was lost, the date, and photo.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-background text-text border border-text rounded-sm">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I report a found item?
          </div>
          <div className="collapse-content">
            <p className="text-basic">
              Click on the "Report Found Item" button, provide details about the
              item, and upload a photo if possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
