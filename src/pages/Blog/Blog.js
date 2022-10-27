import React from "react";

const Blog = () => {
  return (
    <div className="w-full md:w-3/5 mx-auto mt-10">
      <div>
        <h1 className="text-2xl font-bold">what is cors?</h1>
        <p className="text-xl ml-2 mt-4">
          “CORS” stands for Cross-Origin Resource Sharing. CORS is a protocol
          and security standard for browsers that helps to maintain the
          integrity of a website and secure it from unauthorized access.When our
          frontend makes requests to a backend that lives in a different domain,
          we'll have to deal with (CORS).
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p className="text-xl ml-2 mt-4">
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more.
        </p>
        <p className="text-xl ml-2 mt-4 font-bold">
          Other options to implement authtication
        </p>
        <ul className="list-disc ml-10">
          <li>
            <p className="text-xl mt-4">Auth0</p>
          </li>
          <li>
            <p className="text-xl mt-4">MongoDB</p>
          </li>
          <li>
            <p className="text-xl mt-4">Okta</p>
          </li>
          <li>
            <p className="text-xl mt-4">Passport</p>
          </li>
          <li>
            <p className="text-xl mt-4">JSON Web token</p>
          </li>
          <li>
            <p className="text-xl mt-4">Keycloak</p>
          </li>
          <li>
            <p className="text-xl mt-4">Amazon Cognito</p>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold">How does the private route work?</h1>
        <p className="text-xl ml-2 mt-4">
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-bold">
          What is Node? How does Node work?
        </h1>
        <p className="text-xl ml-2 mt-4">
          In the Document Object model (DOM), all parts of the document, such as
          elements, attributes, text, etc. are organized in a hierarchical
          tree-like structure; consisting of parents and children. These
          individual parts of the document are known as nodes. <br />
          Node.js accepts the request from the clients and sends the response,
          while working with the request node.js handles them with a single
          thread. To operate I/O operations or requests node.js use the concept
          of threads. Thread is a sequence of instructions that the server needs
          to perform. It runs parallel on the server to provide the information
          to multiple clients. Node.js is an event loop single-threaded
          language. It can handle concurrent requests with a single thread
          without blocking it for one request. Node.js basically works on two
          concept Asynchronous Non-blocking I/O
        </p>
      </div>
    </div>
  );
};

export default Blog;
