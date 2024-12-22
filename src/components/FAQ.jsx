import React from "react";

const FAQ = () => {
  return (
    <div className="mt-20 px-4">
      <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl my-8 underline">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 pb-8">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is the purpose of this website?
          </div>
          <div className="collapse-content">
            <p>
              Our website helps individuals report lost or found items and
              facilitates reconnecting them with their rightful owners.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Is this service free to use?
          </div>
          <div className="collapse-content">
            <p>
              Yes, our platform is completely free for users to report lost or
              found items.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I report a lost item?
          </div>
          <div className="collapse-content">
            <p>
              Click on the "Report Lost Item" button, fill out the form with
              details like item description, location, and date, and submit it.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What details should I include when reporting a lost item?
          </div>
          <div className="collapse-content">
            <p>
              Provide a clear description, the approximate location where the
              item was lost, the date, and photo.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I report a found item?
          </div>
          <div className="collapse-content">
            <p>
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
